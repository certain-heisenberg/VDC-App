import React, { useState } from 'react';
import { View, KeyboardAvoidingView, Text, ImageBackground, Pressable } from 'react-native';
import { Input } from 'react-native-elements';

import styles from './styles';

import { useNavigation } from '@react-navigation/native';

const MakeAppointmentScreen1 = () => {

    const navigation = useNavigation();

    const next = () => navigation.navigate('Make Appointment Screen 2');

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [contact, setContact] = useState("");

    return (
        <KeyboardAvoidingView behavior='padding' style={styles.container}>
            <Text h3 style={{ fontSize: 30, color: '#f15454', marginLeft: 21, marginTop: 15 }}>Create an Appointment</Text>
            <View style={styles.textContainer}>
                <Input onChangeText={(text) => setName(text)}
                    autoFocus
                    placeholder="Full Name"
                    value={name}
                    type="text"
                />
                <Input onChangeText={(text) => setEmail(text)}
                    placeholder="Email"
                    type="email"
                    value={email}
                />
                <Input onChangeText={(text) => setContact(text)}
                    placeholder="Contact"
                    value={contact}
                    type="text"
                    onSubmitEditing={next}
                />
            </View>

            <Pressable style={styles.button}
                onPress={next}
                type='outline'
            >
                <Text style={styles.buttonText}>Next</Text>
            </Pressable>
        </KeyboardAvoidingView>
    );
};

export default MakeAppointmentScreen1;