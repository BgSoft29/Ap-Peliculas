import React from 'react'
import { View, Text, Image, StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
import { styles } from '../theme/AppTheme';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigation/Navigation';

import  Icon from "react-native-vector-icons/Ionicons";
import { useMovieDetails } from '../hooks/useMovieDetails';
import { MovieDetails } from '../components/MovieDetails';
import { TouchableOpacity } from 'react-native-gesture-handler';
interface Props extends StackScreenProps< RootStackParams, 'DetailScreen'> {
    
}

export const DetailScreen = ( { route, navigation}: Props ) => {

    const movie = route.params
    // console.log(movie.id);
    const uri = `https://image.tmdb.org/t/p/w500${ movie.poster_path }`;

    const { isLoading, cast, movieFull } = useMovieDetails( movie.id )
    return (
        <ScrollView >
            <View style={styles.imageContainer}>
                <View style={ styles.imageBorder }>
                    <Image 
                    source={{ uri }}
                    style={styles.posterImage}
                    />
                </View>
                
            </View>
            <View style={ styles.marginContainer }>
                <Text style={styles.subTitle}>{ movie.original_title }</Text>
                <Text style={styles.title}>{ movie.title }</Text>
            </View>

            {
                isLoading
                ? <ActivityIndicator size={30} color='gray' style={{ marginTop: 18 }}/>
                : <MovieDetails movieFull={movieFull!} cast={cast} />
            }
            <View style={{ position: 'absolute', zIndex: 900, elevation: 25, top: 20, left: 9,  }}>
                <TouchableOpacity
                    onPress={ () => navigation.pop()}
                    // style={{ width: 50, height:50 ,borderRadius: 25, backgroundColor: 'gray', alignContent:'center',alignItems:'center' }}
                >
                    <Icon 
                        color='white'
                        name='arrow-back-outline'
                        size={ 50 }
                        style={{ fontWeight: '100' }}
                    />
                </TouchableOpacity> 
            </View>   
            

            
        </ScrollView>
        
    )
}