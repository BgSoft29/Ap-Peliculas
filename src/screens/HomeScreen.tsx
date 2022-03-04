import React, { useContext } from 'react'
import Carousel from 'react-native-snap-carousel';
import { View, ActivityIndicator, Dimensions, ScrollView } from 'react-native';
import { useMovies } from '../hooks/useMovies';
import { MoviePoster } from '../components/MoviePoster';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { HorizontalSlider } from '../components/HorizontalSlider';
import { GradientBackground } from '../components/GradientBackground';
import { getColores } from '../helpers/getColores';
import { GradientContext } from '../context/GradientContext';
import { useEffect } from 'react';

const { width : windowWith} =Dimensions.get('window')

export const HomeScreen = () => {

    
    const { NowPlaying, Popular, Upcoming, TopRated, isLoading } = useMovies();

    const { top } = useSafeAreaInsets();

    const { setMainColor} = useContext(GradientContext)

    const getPosterColors = async ( index : number ) => {

        const movie = NowPlaying[index]
        const uri = `https://image.tmdb.org/t/p/w500${ movie.poster_path }`;
        const [primary = 'green', secondary = 'orange'] = await getColores( uri );
        setMainColor({ primary, secondary})
    }

    useEffect(() => {
        if( NowPlaying.length > 0) {
            getPosterColors(0)
        }
    }, [NowPlaying])

    if ( isLoading ) {
        return (
            <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
                <ActivityIndicator color='red' size={50} />
            </View>
        )
    }

    return (
        <GradientBackground>
            <ScrollView>
            
                {/* Carrusel principal de Peliculas */}
                <View style={{marginTop: top+20}}>
                    {/* //Carrusel principal */}
                    <View style={{
                        height: 440,
                        backgroundColor: 'transparent'
                    }}>
                        <Carousel 
                            data={ NowPlaying }
                            renderItem={ ({ item }: any ) => <MoviePoster movie={ item } /> }
                            sliderWidth={ windowWith }
                            itemWidth={ 300}
                            inactiveSlideOpacity={1}
                            onSnapToItem= { index => getPosterColors( index )}
                        />
                    </View>
                </View>

                {/* Películas populares */}            
                <HorizontalSlider title='Popular' movies={ Popular } />
                <HorizontalSlider title='Top Rated' movies={ TopRated } />
                <HorizontalSlider title='Upcoming' movies={ Upcoming } />
               
            </ScrollView>
        </GradientBackground>
        
        
    )
}
