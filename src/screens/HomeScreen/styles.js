import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        paddingTop: 20
    },
    buttonsContainer: {
        height: 100,
        marginHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginBottom: 20,
        overflow: 'hidden'
    },
    button: {
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    buttonText: {
        fontWeight: 'bold',
        fontSize: 25,
        color: '#ffffff'
    }
});

export default styles;