import { useEffect, useState } from 'react'
import movieDB from '../api/movieDB';
import { MovieDBMoviesResponse, Movie } from '../interfaces/movieInterface';

interface MoviesState {
    NowPlaying: Movie[];
    Popular: Movie[];
    TopRated: Movie[];
    Upcoming: Movie[]
}

export const useMovies = () => {

    const [isLoading, setIsLoading] = useState(true)

    const [ moviesState  , setMoviesState ] = useState<MoviesState>({
        NowPlaying: [],
        Popular: [],
        TopRated: [],
        Upcoming: []
    })

    const getMovies = async () => {

        const upcomingPromise = movieDB.get<MovieDBMoviesResponse>('/upcoming?');
        const nowPlayingPromise = movieDB.get<MovieDBMoviesResponse>('/now_playing?');
        const popularPromise = movieDB.get<MovieDBMoviesResponse>('/popular?');
        const topRatedPromise = movieDB.get<MovieDBMoviesResponse>('/top_rated?');

        const response = await Promise.all( [upcomingPromise, nowPlayingPromise, popularPromise, topRatedPromise] )

        setMoviesState({
            NowPlaying: response[1].data.results,
            Popular: response[2].data.results,
            TopRated:response[3].data.results,
            Upcoming: response[0].data.results
        })


        setIsLoading(false);

    }

    useEffect(() => {
        //Peliculas reproduciendose ahora
        getMovies();
    }, [])

    return {
        ...moviesState, isLoading
    }
}
