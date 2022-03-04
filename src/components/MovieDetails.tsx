import React from 'react'
import { Text, View, FlatList } from 'react-native';
import currencyFormatter from "currency-formatter";
import { Cast } from '../interfaces/creditsInterface';
import { MovieFull } from '../interfaces/movieInterface';
import Icon from 'react-native-vector-icons/Ionicons';
import { CastItem } from './CastItem';

interface Props {
    movieFull: MovieFull;
    cast: Cast[];
}

export const MovieDetails = ( { cast, movieFull } :Props ) => {
    return (
        <>
            {/* Detalles */}
            <View style={{ marginHorizontal: 20 }}>
                <View style={{
                    flexDirection: 'row'
                }}>
                    <Icon name='star-outline' color='gray' size={16} />
                    <Text style={{color:'black'}}> { movieFull.vote_average }</Text>

                    <Text style={{color:'black', marginLeft: 11}}>
                        -    { movieFull.genres.map( g => g.name).join(', ') }
                    </Text>
                </View>

                {/* Historia */}
                <Text style={{ fontSize: 23,color: 'black', marginTop: 10, fontWeight:'bold' }}>Historia</Text>
                <Text style={{color:'black', fontSize: 16}}>{ movieFull.overview }</Text>

                {/* Presupuesto */}
                <Text style={{ fontSize: 23,color: 'black', marginTop: 10, fontWeight:'bold' }}>Presupuesto</Text>
                <Text style={{color:'black', fontSize: 18}}>{ currencyFormatter.format( movieFull.budget, { code: 'USD' } ) }</Text>
            </View>

            {/* Casting */}
            <View style={{ marginTop: 5, width: '100%' }}>
                <Text style={{ fontSize: 23,color: 'black', marginTop: 10, fontWeight:'bold', paddingLeft: 20 }}>Actores</Text>
                <FlatList 
                    data={ cast }
                    keyExtractor={ (item) => item.id.toString() }
                    renderItem={ ({item}): any => <CastItem actor={item} /> }
                    horizontal={ true }
                    showsHorizontalScrollIndicator={false}
                    style={{ marginTop: 10, height: 100, marginLeft: 10, marginBottom: 10 }}
                />
            </View>
        </>
    )
}
