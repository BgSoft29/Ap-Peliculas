import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { Cast } from '../interfaces/creditsInterface';

interface Props {
    actor: Cast
}

export const CastItem = ( { actor }: Props) => {

    const uri = `https://image.tmdb.org/t/p/w500${ actor.profile_path }`;


    return (
        <View style={stylesCast.container} >
            {
                actor.profile_path && (
                    <Image 
                        source={{ uri }}
                        style={{ width: 60, height: 80, borderRadius: 10 }}
                    />
                )
            }
            
            <View style={ stylesCast.actorInfo}>
                <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'black' }}>{actor.name}</Text>
                <Text style={{ fontSize: 12, fontWeight: 'bold', color:'black', opacity: 0.7 }}>{actor.character}</Text>
            </View>
        </View>
    )
}

const stylesCast = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flexDirection: 'row',
        shadowColor: "#000",
        width: 180,
        shadowOffset: {
        width: 0,
        height: 10,
        },
        shadowOpacity: 0.9,
        shadowRadius: 3.84,
        elevation: 10,
        borderRadius: 10,
        marginRight: 10,
        paddingRight: 10,
        alignItems: 'center',
        alignContent: 'space-between',
        marginBottom: 20
    },
    actorInfo: {
        marginLeft: 10,
        width: '62%'
    }
    
});