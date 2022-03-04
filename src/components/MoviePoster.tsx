import { useNavigation } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Movie } from '../interfaces/movieInterface';
// import { Navigation, RootStackParams } from '../navigation/Navigation';

interface Props {
    movie: Movie;
    height?: number;
    width?: number;
}

// interface navi extends StackScreenProps<RootStackParams, 'MoviePoster'>{};

export const MoviePoster = ( {movie, height=420, width= 300}: Props) => {

    const uri = `https://image.tmdb.org/t/p/w500${ movie.poster_path }`;

    const navigation = useNavigation();

    // console.log(movie.poster_path)
    return (
        <TouchableOpacity
            onPress={ () => navigation.navigate('DetailScreen', movie) }
            activeOpacity={0.8} 
            style={{width, height, paddingLeft: 9}}
         >
            <View style={styles.imageContainer}>
                <Image
                    source={{ uri }}
                    style={styles.image}
                />
            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    image: {
       flex: 1,
       borderRadius: 18,
    },
    imageContainer: {
        flex: 1,
        borderRadius: 18,
        shadowColor: "#000",
        shadowOffset: {
        width: 0,
        height: 10,
        },
        shadowOpacity: 0.9,
        shadowRadius: 3.84,
        elevation: 10,
    }
});
