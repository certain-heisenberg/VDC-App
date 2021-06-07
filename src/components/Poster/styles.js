import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
    posterContainer: {
        width: '100%',
        height: Dimensions.get('window').height,
    },
    titles: {
        marginTop: '45%',
        width: '100%',
        alignItems: 'center',
    },
    title: {
        fontSize: 25,
        fontWeight: '500',
        color: '#2F4F4F',
        fontFamily: 'lucida grande'
    },
    subtitle: {
        fontSize: 16,
        color: '#5c5e62'
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        position: 'absolute',
    },
    buttonsContainer: {
        position: 'absolute',
        width: '100%',
        bottom: 50
    }
});

export default styles;