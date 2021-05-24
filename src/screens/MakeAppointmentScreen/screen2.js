import React, { useState } from 'react';
import { SafeAreaView, View, ScrollView, Platform, KeyboardAvoidingView, Text, Alert, Pressable, StyleSheet, TextInput, ActivityIndicator } from 'react-native';

import DropDownPicker from 'react-native-dropdown-picker';
import { useNavigation } from '@react-navigation/native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


import specialist from './specialist';

const MakeAppointmentScreen2 = () => {

    const navigation = useNavigation();


    const [problem, setProblem] = useState("");
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState(specialist);

    const handlePress = () => {
        if (problem.length === 0) {
            Alert.alert("Please give brief description");
        }
        else if (value === null) {
            Alert.alert("Please select specialist");
        }
        else {
            navigation.navigate('Make Appointment Screen 3');
        }
    }


    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.container}>
            <Text h3 style={{ fontSize: 30, color: '#f15454', marginLeft: 21, marginTop: 15 }}>Problem</Text>
            <SafeAreaView style={styles.textContainer}
            >

                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
                    <Text style={{ fontSize: 20, color: 'black', marginRight: 10 }}>Description</Text>
                    <MaterialIcons name="description" size={25} color="black" />
                </View>



                <TextInput
                    style={[styles.input, { height: 160, textAlignVertical: 'top' }]}
                    placeholder={"Brief Description"}
                    value={problem}
                    onChangeText={setProblem}
                    multiline={true}
                />
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
                    <Text style={{ fontSize: 20, color: 'black', marginRight: 10 }}>Specialist</Text>
                    <Fontisto name="doctor" size={25} color="black" />
                </View>
                <DropDownPicker
                    open={open}
                    value={value}
                    items={items}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setItems}
                    placeholder="Select concerned specialist"
                    containerStyle={{
                        width: '87%',
                        marginTop: 13
                    }}
                    listMode="SCROLLVIEW"
                />










                <Pressable
                    onPress={handlePress}
                    // disabled={loading}
                    style={({ pressed }) => [
                        styles.button,
                        {
                            backgroundColor: pressed
                                ? 'white'
                                : '#3d9eda'
                        },
                    ]}
                >
                    {/* {loading && <ActivityIndicator />} */}
                    {<ActivityIndicator />}

                    <Text style={{ fontSize: 20, color: "white", fontWeight: "bold", marginRight: 14 }}>Book</Text>
                </Pressable>



            </SafeAreaView>

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
        paddingTop: 10,
        flex: 1,
    },
    button: {
        backgroundColor: '#e33062',
        width: '55%',
        height: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
        flexDirection: 'row',
        marginBottom: 25,
        marginHorizontal: 60
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
        backgroundColor: 'white',
        height: 50,
        marginVertical: 10,
        borderRadius: 5,
        padding: 10
    }
});


export default MakeAppointmentScreen2;