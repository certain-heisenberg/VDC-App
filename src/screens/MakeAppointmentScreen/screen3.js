import React, { useState } from 'react';
import { View, KeyboardAvoidingView, Text, Pressable } from 'react-native';
import { Input } from 'react-native-elements';

import styles from './styles';

import { useNavigation } from '@react-navigation/native';

const MakeAppointmentScreen3 = () => {
    // const navigation = useNavigation();

    const [problem, setProblem] = useState("");

    return (
        <KeyboardAvoidingView behavior='padding' style={styles.container}>

            <View style={styles.textContainer}>
                <Input onChangeText={(text) => setProblem(text)}
                    placeholder="Problem"
                    value={problem}
                    type="text"
                    autoFocus
                />
            </View>

            <Pressable style={styles.button}
                // onPress={}
                type='outline'
            >
                <Text style={styles.buttonText}>Submit</Text>
            </Pressable>
        </KeyboardAvoidingView>
    );
};

export default MakeAppointmentScreen3;