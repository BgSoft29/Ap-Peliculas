import { useState, useEffect } from 'react';
import movieDB from '../api/movieDB';
import { MovieFull } from '../interfaces/movieInterface';
import { CreditsResponse, Cast } from '../interfaces/creditsInterface';

interface MovieDetails {
    cast: Cast[];
    movieFull?: MovieFull;
    isLoading: boolean;
}

export const useMovieDetails = ( movieID: number ) => {

    const [state, setState] = useState<MovieDetails>({
        isLoading: true,
        movieFull: undefined,
        cast: []
    });
    const getMovieDetails = async() => {
        const moviesDetailsPromise = movieDB.get<MovieFull>(`${ movieID }`);
        const CastPromise = movieDB.get<CreditsResponse>(`${ movieID }/credits`);

        const [ movieDetailsResp, castPromiseResp ] = await Promise.all([ moviesDetailsPromise, CastPromise ])

        setState({
            isLoading: false,
            movieFull: movieDetailsResp.data,
            cast: castPromiseResp.data.cast
        })

        // console.log( resp.data.overview )
    }

    useEffect(() => {
        getMovieDetails();

    }, []);

    return ({
        ...state,
    })
}
