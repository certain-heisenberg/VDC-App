import React, { useState } from 'react';
import { View, ScrollView, KeyboardAvoidingView, Text, ImageBackground, Pressable, StyleSheet, TextInput, ActivityIndicator } from 'react-native';
import { ButtonGroup } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

const MakeAppointmentScreen1 = () => {

    const navigation = useNavigation();

    const next = () => navigation.navigate('Make Appointment Screen 2');

    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [pin, setPin] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [index, setIndex] = useState(0);

    const buttons = ['Male', 'Female'];

    return (
        <KeyboardAvoidingView behavior='padding' style={styles.container}>
            <Text h3 style={{ fontSize: 30, color: '#f15454', marginLeft: 21, marginTop: 15 }}>Create an Appointment</Text>
            <ScrollView style={styles.textContainer}
            >

                <TextInput
                    style={styles.input}
                    placeholder={"Full Name"}
                    value={name}
                    onChangeText={setName}
                    autoFocus
                />
                <TextInput
                    style={styles.input}
                    placeholder={"Age"}
                    value={age}
                    onChangeText={setAge}
                    maxLength={2}
                    keyboardType='numeric'
                />

                <ButtonGroup
                    onPress={setIndex}
                    selectedIndex={index}
                    buttons={buttons}
                    containerStyle={{ height: 35, width: 305, marginLeft: 0 }}
                />

                <TextInput
                    style={styles.input}
                    placeholder={"PIN"}
                    value={pin}
                    onChangeText={setPin}
                    maxLength={6}
                    keyboardType='numeric'
                />

                <TextInput
                    style={styles.input}
                    placeholder={"Address"}
                    value={address}
                    onChangeText={setAddress}
                />

                <TextInput
                    style={styles.input}
                    placeholder={"City"}
                    value={city}
                    onChangeText={setCity}
                />

                <TextInput
                    style={styles.input}
                    placeholder={"State"}
                    value={state}
                    onChangeText={setState}
                />

                <Pressable
                    onPress={next}
                    // disabled={loading}
                    style={({ pressed }) => [
                        styles.button,
                        {
                            backgroundColor: pressed
                                ? 'white'
                                : '#f15454'
                        },
                    ]}
                >
                    {/* {loading && <ActivityIndicator />} */}
                    {<ActivityIndicator />}

                    <Text style={{ fontSize: 20, color: "white", fontWeight: "bold" }}>Next</Text>
                </Pressable>

            </ScrollView>

            {/* <Pressable style={({ pressed }) => [
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
            </Pressable> */}


        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        height: '100%',
        flex: 1,
        width: '100%',
        // backgroundColor: '#fff',
    },
    textContainer: {
        height: '100%',
        width: '100%',
        marginHorizontal: 20,
        paddingTop: 10
    },
    button: {
        backgroundColor: '#e33062',
        width: '87%',
        height: 50,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
        flexDirection: 'row',
        marginBottom: 25,
    }
    ,
    buttonText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
    },
    input: {
        fontSize: 18,
        width: '87%',
        backgroundColor: 'lightgrey',
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        marginVertical: 10,
        borderRadius: 5,
        padding: 10
    }
});


export default MakeAppointmentScreen1;