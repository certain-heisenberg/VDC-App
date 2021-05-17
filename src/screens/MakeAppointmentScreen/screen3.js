import React, { useState } from 'react';
import { View, KeyboardAvoidingView, Text, Pressable, StyleSheet, ActivityIndicator } from 'react-native';

import { useNavigation } from '@react-navigation/native';

const MakeAppointmentScreen3 = () => {
    const navigation = useNavigation();

    const next = () => navigation.navigate('Make Appointment Screen 4');

    return (
        <View style={styles.container}>
            <Text h3 style={{ fontSize: 30, color: '#f15454', marginTop: 15 }}>Consultation Mode</Text>

            <Pressable
                onPress={next}
                // disabled={loading}
                style={({ pressed }) => [
                    styles.button,
                    {
                        backgroundColor: pressed
                            ? 'white'
                            : '#f15454'
                    },
                ]}
            >
                {/* {loading && <ActivityIndicator />} */}
                {<ActivityIndicator />}

                <Text style={{ fontSize: 20, color: "white", fontWeight: "bold" }}>Online</Text>
            </Pressable>

            <Pressable
                // onPress={next}
                // disabled={loading}
                style={({ pressed }) => [
                    styles.button,
                    {
                        backgroundColor: pressed
                            ? 'white'
                            : '#f15454'
                    },
                ]}
            >
                {/* {loading && <ActivityIndicator />} */}
                {<ActivityIndicator />}

                <Text style={{ fontSize: 20, color: "white", fontWeight: "bold" }}>Offline</Text>
            </Pressable>


        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: '100%',
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        backgroundColor: '#e33062',
        width: '87%',
        height: 50,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
        flexDirection: 'row',
    },
});

export default MakeAppointmentScreen3;

// c7226263ff854462b0b94cf7a15d39fb