import React, { useState } from 'react';
import { View, KeyboardAvoidingView, Text, Pressable, StyleSheet } from 'react-native';
import { Input } from 'react-native-elements';

import { useNavigation } from '@react-navigation/native';
// c7226263ff854462b0b94cf7a15d39fb
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
                    style={{ height: 150 }}
                    multiline={true}
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
                // onPress={}
                type='outline'
            >
                <Text style={styles.buttonText}>Submit</Text>
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

export default MakeAppointmentScreen3;