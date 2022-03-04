import { StyleSheet, Dimensions } from 'react-native';

const screenHeight = Dimensions.get('screen').height;

export const styles = StyleSheet.create({
    texto: {
        color: 'white'
    },
    imageBorder: {
        flex: 1,
        borderBottomEndRadius: 25,
        borderBottomStartRadius: 25,
        overflow: 'hidden'
    },
    posterImage: {
        flex: 1,
        // overflow: 'hidden'
        // borderBottomEndRadius: 25
    },
    imageContainer: {
        width: '100%',
        height: screenHeight * 0.7,
        // paddingBottom: 15,
        shadowColor: "#000",
        shadowOffset: {
        width: 0,
        height: 10,
        },
        shadowOpacity: 0.9,
        shadowRadius: 3.84,
        elevation: 10,
        
    },
    marginContainer: {
        marginHorizontal: 20,
        marginTop: 18,
    },
    subTitle: {
        fontSize: 18,
        color: 'black',
        opacity: 0.8},
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black'
    }
});