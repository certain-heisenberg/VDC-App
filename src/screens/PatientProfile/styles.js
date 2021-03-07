import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#64b5f6',
        height: '100%',
        flex: 1,
        width: '100%',
        justifyContent: 'space-between',
    },
    textContainer: {
        backgroundColor: '#fff',
        height: 400,
        width: '100%',
        resizeMode: 'contain',
    },
    button: {
        backgroundColor: '#f15454',
        height: 50,
        borderRadius: 10,
        marginBottom: 20,
        marginHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
    },
});

export default styles;
