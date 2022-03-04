import React, { createContext, useState } from 'react';

interface ImageDualColors {
    primary: string;
    secondary: string;
}

interface ContextProps {
    color: ImageDualColors;
    prevColor: ImageDualColors;
    setMainColor:  (color: ImageDualColors) => void
    setPrevMainColor:  (color: ImageDualColors) => void

}

export const GradientContext = createContext({} as ContextProps);

export const GradientProvider = ( {children}: any ) => {

    const [color, setColor] = useState<ImageDualColors>({
        primary: 'transparent',
        secondary: 'transparent'
    });
    const [prevColor, setPrevColor] = useState<ImageDualColors>({
        primary: 'transparent',
        secondary: 'transparent'
    });

    const setMainColor = ( color: ImageDualColors ) => {
        setColor(color);
    }
    const setPrevMainColor = ( color: ImageDualColors ) => {
        setPrevColor(color);
    }

    return(
        <GradientContext.Provider value={{
            color,
            prevColor,
            setMainColor,
            setPrevMainColor
        }} >
            {children}
        </GradientContext.Provider>
    )
}