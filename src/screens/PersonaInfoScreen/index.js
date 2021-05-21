// import React, { Component, useState } from 'react';
// import { View, TouchableOpacity, Text } from 'react-native';

// import { useNavigation } from '@react-navigation/native';
// import { Root, Popup } from 'popup-ui';

// import styles from './styles';

// const PersonalInfoScreen = () => {
//     const navigation = useNavigation();

//     const [imageSource, setImageSource] = useState(null);
//     const [username, setUsername] = useState('iamkkumar99@gmail.com');
//     const [email, setEmail] = useState('iamkkumar99@gmail.com');
//     const [contact, setContact] = useState('8709560460');
//     const [appointmentCount, setAppointmentCount] = useState(5);

//     return (
//         <View style={styles.container}>
//             <Text>Choose Profile Photo</Text>
//             <Text>User Name</Text>
//             <Text>Email</Text>
//             <Text>Mobile</Text>
//             <Text>Appointment Made</Text>

//         </View>
//     );
// };

// export default PersonalInfoScreen;

import React, { useState } from 'react';
import { View, Text, TextInput, ImageBackground, Pressable } from 'react-native';
import { Input } from 'react-native-elements';

import styles from './styles';

import { useNavigation } from '@react-navigation/native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


const PersonalInfoScreen = () => {
    const navigation = useNavigation();

    const [imageSource, setImageSource] = useState(null);
    const [username, setUsername] = useState('iamkkumar99@gmail.com');
    const [email, setEmail] = useState('iamkkumar99@gmail.com');
    const [contact, setContact] = useState('8709560460');
    const [appointmentCount, setAppointmentCount] = useState('5');
    const [isEnabled, setIsEnabled] = useState(false);

    const handleEditPress = async () => {
        if (await !isEnabled) {
            setIsEnabled(true);
        }
    }

    const handleSavePress = async () => {
        if (await isEnabled) {
            setIsEnabled(false);
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Fontisto name="male" size={50} style={{ paddingLeft: 20, color: 'gray' }} />
                <Text style={{ fontSize: 30, fontWeight: 'bold', marginLeft: 25 }}>Name</Text>
            </View>
            <View style={{ width: '100%', marginLeft: 40 }}
            >

                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
                    <Text style={{ fontSize: 20, color: 'black', marginRight: 10 }}>Username</Text>
                    <Fontisto name="user-secret" size={25} color="black" />
                </View>
                <TextInput
                    style={[styles.input, {
                        backgroundColor: isEnabled ? 'lightgrey' : 'white',
                        paddingLeft: isEnabled ? 10 : 0
                    }]}
                    value={username}
                    onChangeText={setUsername}
                    editable={isEnabled}
                />

                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
                    <Text style={{ fontSize: 20, color: 'black', marginRight: 10 }}>Email</Text>
                    <MaterialCommunityIcons name="email-outline" size={25} color="black" />
                </View>
                <TextInput
                    style={[styles.input, {
                        backgroundColor: isEnabled ? 'lightgrey' : 'white',
                        paddingLeft: isEnabled ? 10 : 0
                    }]}
                    value={email}
                    onChangeText={setEmail}
                    editable={isEnabled}
                />

                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
                    <Text style={{ fontSize: 20, color: 'black', marginRight: 10 }}>Contact</Text>
                    <FontAwesome5 name="mobile-alt" size={25} color="black" />
                </View>
                <TextInput
                    style={[styles.input, {
                        backgroundColor: isEnabled ? 'lightgrey' : 'white',
                        paddingLeft: isEnabled ? 10 : 0
                    }]}
                    value={contact}
                    onChangeText={setContact}
                    editable={isEnabled}
                />

                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
                    <Text style={{ fontSize: 20, color: 'black', marginRight: 10 }}>Appointments Made</Text>
                    <FontAwesome5 name="book-medical" size={25} color="black" />
                    <Text style={{ fontSize: 20, color: 'black', fontWeight: 'bold' }}> : </Text>
                    <Text style={{ fontSize: 20, color: 'black', }}>   {appointmentCount}</Text>

                </View>

            </View>

            <View style={{ width: '100%', flexDirection: 'row', paddingHorizontal: 30, marginTop: 40, justifyContent: 'space-between', }}>

                <Pressable
                    style={({ pressed }) => [
                        styles.button,
                        {
                            backgroundColor: pressed
                                ? 'white'
                                : '#f15454'
                        },
                    ]}

                    onPress={handleEditPress}
                >
                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20 }}>Edit</Text>
                </Pressable>

                <Pressable
                    style={({ pressed }) => [
                        styles.button,
                        {
                            backgroundColor: pressed
                                ? 'white'
                                : '#f15454'
                        },
                    ]}
                    onPress={handleSavePress}
                >
                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20 }}>Save</Text>
                </Pressable>
            </View>






        </View>
    );
};

export default PersonalInfoScreen;