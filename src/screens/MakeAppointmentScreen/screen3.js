import React, { useState } from 'react';
import { View, KeyboardAvoidingView, Text, Pressable, StyleSheet, ActivityIndicator, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import Foundation from 'react-native-vector-icons/Foundation';

const MakeAppointmentScreen3 = () => {
    const navigation = useNavigation();

    const handlePress = () => navigation.navigate('Make Appointment Screen 4');

    return (
        <View style={styles.container}>
            <Foundation name="book-bookmark" size={250} color="lightgrey" style={{ position: 'absolute' }} />
            <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between', alignItems: 'flex-end' }}>



                <TouchableOpacity
                    style={styles.button}
                // onPress={handlePress}
                >
                    <Text style={styles.buttonText}

                    >Offline</Text>

                </TouchableOpacity>



                <TouchableOpacity
                    style={[styles.button, { backgroundColor: '#f15454', }]}
                    onPress={handlePress}
                >
                    <Text style={styles.buttonText}

                    >Online</Text>

                </TouchableOpacity>
            </View >
        </View >
    );
};

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        paddingTop: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        backgroundColor: '#3d9eda',
        height: 50,
        width: 120,
        marginHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,
        marginBottom: 60
    },
    buttonText: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#ffffff'
    }
});

export default MakeAppointmentScreen3;

// c7226263ff854462b0b94cf7a15d39fb