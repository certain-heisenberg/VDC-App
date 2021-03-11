import React, { useState } from 'react';
import { View, KeyboardAvoidingView, Text, Pressable } from 'react-native';
import { Input } from 'react-native-elements';

import styles from './styles';

import { useNavigation } from '@react-navigation/native';

const MakeAppointmentScreen2 = () => {
    const navigation = useNavigation();

    const next = () => navigation.navigate('Make Appointment Screen 3');

    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");

    return (
        <KeyboardAvoidingView behavior='padding' style={styles.container}>

            <View style={styles.textContainer}>
                <Input onChangeText={(text) => setAge(text)}
                    placeholder="Age"
                    value={age}
                    type="text"
                    autoFocus
                />
                <Input onChangeText={(text) => setGender(text)}
                    placeholder="Gender"
                    value={gender}
                    type="text"
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

export default MakeAppointmentScreen2;