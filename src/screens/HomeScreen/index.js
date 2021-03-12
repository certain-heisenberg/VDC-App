import React from 'react';
import { View, Text, Pressable, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

const HomeScreen = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../../assets/images/img2.jpg')}
                style={styles.buttonsContainer}
            >
                <Pressable
                    onPress={() => navigation.navigate('Make Appointment Screen 1')}
                    style={({ pressed }) => [
                        styles.button,
                        {
                            backgroundColor: pressed
                                ? '#1AFF5F49'
                                : 'transparent'
                        },
                    ]}
                >
                    <Text style={styles.buttonText}>Make Appointment</Text>
                </Pressable>
            </ImageBackground>

            <ImageBackground source={require('../../../assets/images/img3.jpg')}
                style={styles.buttonsContainer}
            >
                <Pressable style={({ pressed }) => [
                    styles.button,
                    {
                        backgroundColor: pressed
                            ? '#1AFF5F49'
                            : 'transparent'
                    },
                ]}
                    onPress={() => navigation.navigate('Appointment Screen')}
                >
                    <Text style={styles.buttonText}>Appointments</Text>
                </Pressable>
            </ImageBackground>

            <ImageBackground source={require('../../../assets/images/img5.jpg')}
                style={styles.buttonsContainer}
            >
                <Pressable
                    // onPress={() => navigation.navigate('')}
                    style={({ pressed }) => [
                        styles.button,
                        {
                            backgroundColor: pressed
                                ? '#1AFF5F49'
                                : 'transparent'
                        },
                    ]}
                >
                    <Text style={styles.buttonText}>Doctors Nearby</Text>
                </Pressable>
            </ImageBackground>
        </View >
    );
};

export default HomeScreen;