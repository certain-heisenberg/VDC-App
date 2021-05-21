import React, { Component } from 'react';
import { View, Text, StyleSheet, Pressable, FlatList } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';

import prescription from './prescription';
import Prescription from '../../components/Prescription/index';

const PrescriptionList = () => {
    const navigation = useNavigation();

    const next = () => {
        navigation.navigate('Prescription Screen')
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={prescription}
                renderItem={({ item }) => <Prescription details={item} />}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {

    },
    cardContainer: {
        flexDirection: 'row',
        paddingLeft: 10,
        alignItems: 'center',
        backgroundColor: 'black',
        height: 70,
        marginHorizontal: 3,
        borderRadius: 7,
        marginTop: 5,

        borderWidth: 1,
        borderColor: '#ddd',
        borderBottomWidth: 5,
        shadowColor: 'red',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,

    },
    textContainer: {
        marginLeft: 10,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default PrescriptionList;