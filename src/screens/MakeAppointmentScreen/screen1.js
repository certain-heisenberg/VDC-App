import React, { useState } from 'react';
import { View, KeyboardAvoidingView, Text, ImageBackground, Pressable, StyleSheet } from 'react-native';
import { Input } from 'react-native-elements';


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
        height: '100%',
        flex: 1,
        width: '100%',
    },
    textContainer: {
        // backgroundColor: '#fff',
        height: 200,
        width: 300,
        marginHorizontal: 20,
        paddingTop: 10
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

export default MakeAppointmentScreen1;