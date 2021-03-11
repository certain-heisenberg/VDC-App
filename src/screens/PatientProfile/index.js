import React, { useState } from 'react';
import { View, Text, ImageBackground, Pressable } from 'react-native';
import { Input } from 'react-native-elements';

import styles from './styles';

import { useNavigation } from '@react-navigation/native';
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
    }

    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                {/* <Text>Username</Text>
                <Text>Email</Text>
                <Text>Contact</Text>
                <Text>Age</Text>
                <Text>Gender</Text> */}
                <Input onChangeText={(text) => setUser(text)}
                    placeholder="Username"
                    value={username}
                />
                <Input onChangeText={(text) => setEmail(text)}
                    placeholder="Email"
                    type="email"
                    value={username}
                />
                {/* <Input onChangeText={(text) => setText(text)}
                    placeholder="Username"
                    value={username}
                />
                <Input onChangeText={(text) => setText(text)}
                    placeholder="Username"
                    value={username}
                />
                <Input onChangeText={(text) => setText(text)}
                    placeholder="Username"
                    value={username}
                /> */}
            </View>

            <Pressable style={styles.button}
                // onPress={signout}
                type='outline'
            >
                <Text style={styles.buttonText}>Sign Out</Text>
            </Pressable>

        </View>
    );
};

export default PatientProfile;