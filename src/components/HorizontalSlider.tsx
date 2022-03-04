import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { Movie } from '../interfaces/movieInterface';
import { MoviePoster } from './MoviePoster';

interface Props {
    title?: string;
    movies: Movie[]
}

export const HorizontalSlider = ( { title, movies }: Props ) => {
    return (
        <View style={{ backgroundColor:'transparent',height: ( title ) ? 240 : 200 }}>
                {
                    title && <Text style={{ fontSize: 30, fontWeight: 'bold', color: 'black', marginLeft: 10 }}>{title}</Text>
                }
                <FlatList 
                    data={ movies }
                    renderItem={ ({ item }: any ) => <MoviePoster movie={ item } width={120} height={180} /> }
                    keyExtractor={ ( item ) => item.id.toString() }
                    horizontal= { true }
                    showsHorizontalScrollIndicator= {false}
                />
        </View>
    )
}
