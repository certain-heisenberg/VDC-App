import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

const HomeScreen = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Pressable style={styles.button}
                onPress={() => navigation.navigate('Make Appointment Screen 1')}
            >
                <Text style={styles.buttonText}>Make Appointment</Text>
            </Pressable>
            <Pressable style={styles.button}
                onPress={() => navigation.navigate('Appointment Screen')}
            >
                <Text style={styles.buttonText}>Appointments</Text>
            </Pressable>

            <Pressable style={styles.button}
            // onPress={() => navigation.navigate('')}
            >
                <Text style={styles.buttonText}>Doctors Nearby</Text>
            </Pressable>

        </View>
    );
};

export default HomeScreen;