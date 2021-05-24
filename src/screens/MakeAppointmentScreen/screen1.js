import React, { useState } from 'react';
import { View, ScrollView, Alert, KeyboardAvoidingView, Text, SafeAreaView, ImageBackground, Platform, Pressable, StyleSheet, TextInput, ActivityIndicator } from 'react-native';
import { ButtonGroup } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import DropDownPicker from 'react-native-dropdown-picker';
import states from './states';

import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const MakeAppointmentScreen1 = () => {

    const navigation = useNavigation();

    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [pin, setPin] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");

    const [index, setIndex] = useState(0);

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState(states);

    const buttons = ['Male', 'Female'];

    const handlePress = () => {
        if (name.length === 0) {
            Alert.alert("Please enter your name");
        }

        else if (age.length === 0 || parseInt(age) === 0) {
            Alert.alert("Age must be greater than 0");
        }

        else if (pin.length < 6) {
            Alert.alert("Invalid PIN");
        }

        else if (value === null) {
            Alert.alert("Please select state");
        }

        else if (city.length === 0) {
            Alert.alert("Please fill city");
        }

        else if (address.length === 0) {
            Alert.alert("Please fill address");
        }

        else {

            navigation.navigate('Make Appointment Screen 2');
        }
    }

    // console.log("State is:", items[value - 1].label, ", it's value is ", value);


    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}>
            <Text h3 style={{ fontSize: 30, color: '#f15454', marginLeft: 21, marginTop: 15, marginBottom: 3 }}>Create an Appointment</Text>
            <ScrollView style={styles.textContainer} keyboardShouldPersistTaps='always'
            >
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
                    <Text style={{ fontSize: 20, color: 'black', marginRight: 10 }}>Full Name</Text>
                    <Feather name="user" size={25} color="black" />
                </View>
                <TextInput
                    style={styles.input}
                    placeholder={"Full Name"}
                    value={name}
                    onChangeText={setName}
                    autoFocus
                />
                <Text style={{ fontSize: 20, color: 'black', marginTop: 15 }}>Age</Text>
                <TextInput
                    style={styles.input}
                    placeholder={"Age"}
                    value={age}
                    onChangeText={setAge}
                    maxLength={2}
                    keyboardType='numeric'
                />

                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
                    <Text style={{ fontSize: 20, color: 'black', marginRight: 10 }}>Gender</Text>
                    <MaterialCommunityIcons name="gender-male" size={25} color="black" />
                    <Text style={{ fontSize: 20, color: 'black', }}>|</Text>
                    <MaterialCommunityIcons name="gender-female" size={25} color="black" />

                </View>

                <ButtonGroup
                    onPress={setIndex}
                    selectedIndex={index}
                    buttons={buttons}
                    containerStyle={{ height: 35, width: 311, marginLeft: 0 }}
                />



                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
                    <Text style={{ fontSize: 20, color: 'black', marginRight: 10 }}>PIN</Text>
                    <Ionicons name="location-outline" size={25} color="black" />
                </View>

                <TextInput
                    style={styles.input}
                    placeholder={"Area Code"}
                    value={pin}
                    onChangeText={setPin}
                    maxLength={6}
                    keyboardType='numeric'
                />

                <Text style={{ fontSize: 20, color: 'black', marginTop: 15 }}>State</Text>

                <DropDownPicker
                    open={open}
                    value={value}
                    items={items}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setItems}
                    placeholder="Select State"
                    containerStyle={{
                        width: '87%',
                        marginTop: 13
                    }}
                    listMode="SCROLLVIEW"
                />

                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
                    <Text style={{ fontSize: 20, color: 'black', marginRight: 10 }}>City</Text>
                    <MaterialCommunityIcons name="city" size={25} color="black" />
                </View>
                <TextInput
                    style={styles.input}
                    placeholder={"City"}
                    value={city}
                    onChangeText={setCity}
                />

                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
                    <Text style={{ fontSize: 20, color: 'black', marginRight: 10 }}>Address</Text>
                    <Entypo name="address" size={25} color="black" />
                </View>

                <TextInput
                    style={styles.input}
                    placeholder={"Address"}
                    value={address}
                    onChangeText={setAddress}
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

                    <Text style={{ fontSize: 20, color: "white", fontWeight: "bold", marginRight: 14 }}>Next</Text>
                </Pressable>

            </ScrollView >




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
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        marginVertical: 10,
        borderRadius: 5,
        padding: 10
    }
});


export default MakeAppointmentScreen1;

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