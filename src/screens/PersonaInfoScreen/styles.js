import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        height: '100%',
        flex: 1,
        width: '100%',
        // justifyContent: 'space-between',
        backgroundColor: '#fff',
        alignItems: 'center'
    },
    textContainer: {
        backgroundColor: '#fff',
        height: 110,
        width: '100%',
        resizeMode: 'contain',
        alignItems: 'center',
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: 'lightgrey',
        // marginHorizontal: 20,
        marginBottom: 20,
        paddingLeft: 5,
    },
    input: {
        fontSize: 18,
        width: '87%',
        backgroundColor: 'lightgrey',
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        marginTop: 3,
        marginBottom: 10,
        borderRadius: 5,
        color: 'black'
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '40%',
        backgroundColor: '#e33062',
        height: 45,
        borderRadius: 25

    }
});

export default styles;
