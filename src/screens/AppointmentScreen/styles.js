import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        paddingTop: 20,
        justifyContent: 'flex-end',
    },
    button: {
        backgroundColor: '#f15454',
        height: 50,
        width: 120,
        marginHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 7,
        marginBottom: 20
    },
    buttonText: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#ffffff'
    }
});

export default styles;