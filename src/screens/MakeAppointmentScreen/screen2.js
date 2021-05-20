// import React, { useState } from 'react';
// import { View, KeyboardAvoidingView, Text, Pressable, StyleSheet } from 'react-native';
// import { Input } from 'react-native-elements';

// import { useNavigation } from '@react-navigation/native';

// const MakeAppointmentScreen2 = () => {
//     const navigation = useNavigation();

//     const next = () => navigation.navigate('Make Appointment Screen 3');

//     const [age, setAge] = useState("");
//     const [gender, setGender] = useState("");

//     return (
//         <KeyboardAvoidingView behavior='padding' style={styles.container}>

//             <View style={styles.textContainer}>
//                 <Input onChangeText={(text) => setAge(text)}
//                     placeholder="Age"
//                     value={age}
//                     type="text"
//                     autoFocus
//                 />
//                 <Input onChangeText={(text) => setGender(text)}
//                     placeholder="Gender"
//                     value={gender}
//                     type="text"
//                     onSubmitEditing={next}
//                 />
//             </View>

//             <Pressable style={({ pressed }) => [
//                 styles.button,
//                 {
//                     backgroundColor: pressed
//                         ? 'white'
//                         : '#f15454'
//                 },
//             ]}
//                 onPress={next}
//                 type='outline'
//             >
//                 <Text style={styles.buttonText}>Next</Text>
//             </Pressable>
//         </KeyboardAvoidingView>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         // backgroundColor: '#64b5f6',
//         height: '100%',
//         flex: 1,
//         width: '100%',
//         // justifyContent: 'space-between',
//     },
//     textContainer: {
//         // backgroundColor: '#fff',
//         height: 200,
//         width: 300,
//         marginHorizontal: 20,
//         paddingTop: 20
//     },
//     button: {
//         backgroundColor: '#f15454',
//         height: 50,
//         borderRadius: 10,
//         marginBottom: 20,
//         marginTop: 50,
//         marginHorizontal: 20,
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     buttonText: {
//         fontSize: 20,
//         fontWeight: 'bold',
//         color: 'white'
//     },
// });

// export default MakeAppointmentScreen2;


import React, { useState } from 'react';
import { SafeAreaView, View, ScrollView, Platform, KeyboardAvoidingView, Text, Alert, Pressable, StyleSheet, TextInput, ActivityIndicator } from 'react-native';

import DropDownPicker from 'react-native-dropdown-picker';
import { useNavigation } from '@react-navigation/native';

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

                <Text style={{ fontSize: 20, color: 'black', marginTop: 15 }}>Description</Text>

                <TextInput
                    style={[styles.input, { height: 160, textAlignVertical: 'top' }]}
                    placeholder={"Brief Description"}
                    value={problem}
                    onChangeText={setProblem}
                    multiline={true}
                />
                <Text style={{ fontSize: 20, color: 'black', marginTop: 15 }}>Specialist</Text>

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
                                : '#f15454'
                        },
                    ]}
                >
                    {/* {loading && <ActivityIndicator />} */}
                    {<ActivityIndicator />}

                    <Text style={{ fontSize: 20, color: "white", fontWeight: "bold" }}>Book</Text>
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
        backgroundColor: 'white',
        height: 50,
        marginVertical: 10,
        borderRadius: 5,
        padding: 10
    }
});


export default MakeAppointmentScreen2;