import React, { Component } from 'react';
import { View, Text, ImageBackground, Pressable } from 'react-native';

import styles from './styles';

import { useNavigation } from '@react-navigation/native';
import { Auth } from 'aws-amplify';

const PatientProfile = () => {
    const navigation = useNavigation();
    const signout = () => {
        Auth.signOut();
    }

    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text>Username</Text>
                <Text>Email</Text>
                <Text>Contact</Text>
                <Text>Age</Text>
                <Text>Gender</Text>
            </View>

            <Pressable style={styles.button}
                onPress={signout}
            >
                <Text style={styles.buttonText}>Sign Out</Text>
            </Pressable>

        </View>
    );
};

export default PatientProfile;