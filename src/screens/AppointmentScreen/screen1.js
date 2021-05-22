import React, { Component } from 'react';
import { Text, View, Pressable, StyleSheet, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import appointment from './appointment';
import Appointment from '../../components/Appointment/index';

const AppointmentScreen1 = () => {
    // const navigation = useNavigation();

    return (
        <View style={styles.container}>

            <FlatList
                data={appointment}
                renderItem={({ item }) => <Appointment details={item} />}
                numColumns={2}
            />

        </View >
    );
};


const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        flex: 1,
        paddingLeft: 9,
        paddingTop: 15
    },

});

export default AppointmentScreen1;