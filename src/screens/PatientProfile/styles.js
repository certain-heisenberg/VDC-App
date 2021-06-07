import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        height: '100%',
        flex: 1,
        width: '100%',
        // justifyContent: 'space-between',
        backgroundColor: '#fff'
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
    button: {
        height: 50,
        borderRadius: 10,
        marginBottom: 20,
        marginHorizontal: 7,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: 'lightgrey',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 10,
        paddingHorizontal: 7
    },
    buttonText: {
        fontSize: 20,
        color: 'black'
    },
});

export default styles;
