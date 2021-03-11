import React, { useState } from 'react';
import { View, Text, ImageBackground, Pressable } from 'react-native';
import { Input } from 'react-native-elements';

import styles from './styles';

import { useNavigation } from '@react-navigation/native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { Auth } from 'aws-amplify'

const PatientProfile = () => {
    const navigation = useNavigation();

    const [username, setUser] = useState("");
    const [email, setEmail] = useState("");
    const [contact, setContact] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");

    const signout = () => {
        Auth.signOut();
    };

    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Fontisto name="male" size={50} style={{ paddingLeft: 20, color: 'gray' }} />
                <Text style={{ fontSize: 30, fontWeight: 'bold', marginLeft: 25 }}>Name</Text>
            </View>

            <Pressable style={styles.button}
                onPress={() => navigation.navigate('Personal Info Screen')}
                type='outline'
            >
                <Text style={styles.buttonText}>Personal information</Text>
                <Fontisto name="person" size={22} style={{ paddingLeft: 20 }} />
            </Pressable>

            <Pressable style={styles.button}
                // onPress={}
                type='outline'
            >
                <Text style={styles.buttonText}>Payments</Text>
                <Fontisto name="credit-card" size={22} style={{ paddingLeft: 20 }} />
            </Pressable>

            <Pressable style={styles.button}
                // onPress={}
                type='outline'
            >
                <Text style={styles.buttonText}>Get help</Text>
                <Fontisto name="question" size={22} style={{ paddingLeft: 20 }} />
            </Pressable>

            <Pressable style={styles.button}
                onPress={signout}
                type='outline'
            >
                <Text style={styles.buttonText}>Log out</Text>

            </Pressable>

        </View>
    );
};

export default PatientProfile;