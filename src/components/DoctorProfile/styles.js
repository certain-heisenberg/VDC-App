import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#e33062',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        width: 175,
        height: 40,
        marginHorizontal: 5,
        marginTop: 5
    },
    image: {
        width: 160,
        aspectRatio: 1 / 1,
        resizeMode: 'cover',
        borderRadius: 10,
        marginRight: 9,
    },
    cardContainer: {
        height: 160,
        width: '100%',
        flexDirection: 'row',
        marginTop: 10
    },
    textContainer: {
        width: '100%',
        height: 160,
    }
});

export default styles;