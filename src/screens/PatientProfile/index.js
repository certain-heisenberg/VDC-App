import React, { useState } from 'react';
import { View, Text, ImageBackground, Pressable, Image } from 'react-native';
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
                <Image
                    source={require('../../../assets/images/defaultAvatar.png')}
                    style={{ width: 100, backgroundColor: 'white', height: 100, borderRadius: 100 / 2 }}
                    resizeMode='contain'
                />
                <Text style={{ fontSize: 25, fontWeight: '700', marginLeft: 20 }}>Username</Text>
            </View>

            <Pressable style={({ pressed }) => [
                styles.button,
                {
                    backgroundColor: pressed
                        ? '#DCDCDC'
                        : 'transparent'
                },
            ]}
                onPress={() => navigation.navigate('Personal Info Screen')}
                type='outline'
            >
                <Text style={styles.buttonText}>Personal information</Text>
                <Fontisto name="person" size={22} style={{ paddingLeft: 20 }} />
            </Pressable>

            <Pressable style={({ pressed }) => [
                styles.button,
                {
                    backgroundColor: pressed
                        ? '#DCDCDC'
                        : 'transparent'
                },
            ]}
                // onPress={}
                type='outline'
            >
                <Text style={styles.buttonText}>Payments</Text>
                <Fontisto name="credit-card" size={22} style={{ paddingLeft: 20 }} />
            </Pressable>

            <Pressable style={({ pressed }) => [
                styles.button,
                {
                    backgroundColor: pressed
                        ? '#DCDCDC'
                        : 'transparent'
                },
            ]}
                // onPress={}
                type='outline'
            >
                <Text style={styles.buttonText}>Get help</Text>
                <Fontisto name="question" size={22} style={{ paddingLeft: 20 }} />
            </Pressable>

            <Pressable style={({ pressed }) => [
                styles.button,
                {
                    backgroundColor: pressed
                        ? '#DCDCDC'
                        : 'transparent'
                },
            ]}
                onPress={signout}
                type='outline'
            >
                <Text style={styles.buttonText}>Log out</Text>

            </Pressable>

        </View>
    );
};

export default PatientProfile;