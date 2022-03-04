import React, { useContext } from 'react'
import { View, StyleSheet, Animated } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { GradientContext } from '../context/GradientContext';
import { useEffect } from 'react';
import { useFade } from '../hooks/useFade';

interface Props {
    children: JSX.Element | JSX.Element[]
}

export const GradientBackground = ( { children }: Props ) => {

    const {color,prevColor,setPrevMainColor} = useContext(GradientContext);

    const { opacity, fadeIn, fadeOut } = useFade();

    useEffect(() => {
        fadeIn( () => {
            setPrevMainColor( color );
            fadeOut();
        } )
    }, [ color ])

    return (
        <View style={{ flex: 1}} >
            <LinearGradient 
                colors={[ prevColor.primary, prevColor.secondary, 'white' ]}
                style={{ ...StyleSheet.absoluteFillObject }}
                start={{ x: 0.1, y: 0.1}}
                end={{ x: 0.6, y: 0.7 }}
            />
            <Animated.View
                style={{ ...StyleSheet.absoluteFillObject, opacity}}
            >
                <LinearGradient 
                    colors={[ color.primary, color.secondary, 'white' ]}
                    style={{ ...StyleSheet.absoluteFillObject }}
                    start={{ x: 0.1, y: 0.1}}
                    end={{ x: 0.6, y: 0.7 }}
                />
            </Animated.View>
                
            { children }
        </View>
    )
}
