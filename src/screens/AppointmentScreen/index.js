import React, { Component } from 'react';
import { Text, View, Pressable } from 'react-native';

import styles from './styles';

const AppointmentScreen = () => {
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between' }}>
                <Pressable style={({ pressed }) => [
                    styles.button,
                    {
                        backgroundColor: pressed
                            ? 'white'
                            : '#f15454'
                    },
                ]}>
                    <Text style={styles.buttonText}>Chat</Text>
                </Pressable>

                <Pressable style={({ pressed }) => [
                    styles.button,
                    {
                        backgroundColor: pressed
                            ? 'white'
                            : '#f15454'
                    },
                ]}>
                    <Text style={styles.buttonText}

                    >Video Call</Text>
                </Pressable>
            </View >
        </View >
    );
};

export default AppointmentScreen;