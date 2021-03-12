import React, { useState } from 'react';
import { View, KeyboardAvoidingView, Text, Pressable, StyleSheet } from 'react-native';
import { Input } from 'react-native-elements';

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
                    onSubmitEditing={next}
                />
            </View>

            <Pressable style={({ pressed }) => [
                styles.button,
                {
                    backgroundColor: pressed
                        ? 'white'
                        : '#f15454'
                },
            ]}
                onPress={next}
                type='outline'
            >
                <Text style={styles.buttonText}>Next</Text>
            </Pressable>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        // backgroundColor: '#64b5f6',
        height: '100%',
        flex: 1,
        width: '100%',
        // justifyContent: 'space-between',
    },
    textContainer: {
        // backgroundColor: '#fff',
        height: 200,
        width: 300,
        marginHorizontal: 20,
        paddingTop: 20
    },
    button: {
        backgroundColor: '#f15454',
        height: 50,
        borderRadius: 10,
        marginBottom: 20,
        marginTop: 50,
        marginHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
    },
});

export default MakeAppointmentScreen2;