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
import { View, Text, TextInput, ImageBackground, Pressable, TouchableOpacity, Alert, Image } from 'react-native';
import { Input } from 'react-native-elements';

import styles from './styles';

import { useNavigation } from '@react-navigation/native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { launchImageLibrary } from 'react-native-image-picker';


const PersonalInfoScreen = () => {
    const navigation = useNavigation();

    const [username, setUsername] = useState('iamkkumar99@gmail.com');
    const [email, setEmail] = useState('iamkkumar99@gmail.com');
    const [contact, setContact] = useState('8709560460');
    const [appointmentCount, setAppointmentCount] = useState('5');
    const [isEnabled, setIsEnabled] = useState(false);

    const [imageSource, setImageSource] = useState(null);

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


    const selectImage = () => {
        let options = {
            title: 'Pick an image',
            maxWidth: 450,
            maxHeight: 200,
            storageOptions: {
                skipBackup: true
            },
            mediaType: 'photo',
            noData: true
        };

        launchImageLibrary(options, response => {
            console.log({ response });

            if (response.didCancel) {
                console.log('User cancelled photo picker');
                Alert.alert('You did not select any image');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                let source = { uri: response.uri };
                console.log({ source });
                setImageSource(source.uri);
            }
        });
    }

    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <View style={{ height: 75, width: 75, borderRadius: 75 / 2, color: 'red', height: 120, width: 120, alignItems: 'center', justifyContent: 'center' }}>
                    {imageSource === null ? (
                        <Image
                            source={require('../../../assets/images/defaultAvatar.png')}
                            style={{ width: 100, backgroundColor: 'white', height: 100, borderRadius: 100 / 2 }}
                            resizeMode='contain'
                        />
                    ) : (
                        <Image
                            source={{ uri: imageSource }}
                            style={{ width: 200, height: 100 }}
                            resizeMode='contain'
                        />
                    )}
                </View>
                <TouchableOpacity
                    onPress={selectImage}
                    style={{
                        backgroundColor: '#5698cb',
                        height: 30,
                        width: 120,
                        borderRadius: 7,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <Text style={{ fontSize: 18, color: 'white' }}>Change Avtar</Text>
                </TouchableOpacity>
            </View>
            <View style={{ width: '100%', marginLeft: 40 }}
            >

                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
                    <Text style={{ fontSize: 20, color: 'black', marginRight: 10, backgroundColor: !isEnabled ? 'lightgrey' : 'white', borderRadius: 5 }}>Username</Text>
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
                    <Text style={{ fontSize: 20, color: 'black', marginRight: 10, backgroundColor: !isEnabled ? 'lightgrey' : 'white', borderRadius: 5 }}>Email</Text>
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
                    <Text style={{ fontSize: 20, color: 'black', marginRight: 10, backgroundColor: !isEnabled ? 'lightgrey' : 'white', borderRadius: 5 }}>Contact</Text>
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
                                : '#3d9eda'
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