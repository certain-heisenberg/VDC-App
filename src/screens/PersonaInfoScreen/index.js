// import React, { Component } from 'react';
// import { View, Text } from 'react-native';

// import { useNavigation } from '@react-navigation/native';

// import styles from './styles';

// const PersonalInfoScreen = () => {
//     const navigation = useNavigation();

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
import { View, Text, ImageBackground, Pressable } from 'react-native';
import { Input } from 'react-native-elements';

import styles from './styles';

import { useNavigation } from '@react-navigation/native';
import Fontisto from 'react-native-vector-icons/Fontisto';

const PersonalInfoScreen = () => {
    const navigation = useNavigation();





    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Fontisto name="male" size={50} style={{ paddingLeft: 20, color: 'gray' }} />
                <Text style={{ fontSize: 30, fontWeight: 'bold', marginLeft: 25 }}>Name</Text>
            </View>

            <Pressable style={({ pressed }) => [
                styles.button,
                {
                    backgroundColor: pressed
                        ? '#DCDCDC'
                        : 'transparent'
                },
            ]}
                onPress={() => navigation.navigate('Personal Info Screen')}
                type='outline'
            >
                <Text style={styles.buttonText}>Personal information</Text>
                <Fontisto name="person" size={22} style={{ paddingLeft: 20 }} />
            </Pressable>

            <Pressable style={({ pressed }) => [
                styles.button,
                {
                    backgroundColor: pressed
                        ? '#DCDCDC'
                        : 'transparent'
                },
            ]}
                // onPress={}
                type='outline'
            >
                <Text style={styles.buttonText}>Payments</Text>
                <Fontisto name="credit-card" size={22} style={{ paddingLeft: 20 }} />
            </Pressable>

            <Pressable style={({ pressed }) => [
                styles.button,
                {
                    backgroundColor: pressed
                        ? '#DCDCDC'
                        : 'transparent'
                },
            ]}
                // onPress={}
                type='outline'
            >
                <Text style={styles.buttonText}>Get help</Text>
                <Fontisto name="question" size={22} style={{ paddingLeft: 20 }} />
            </Pressable>


        </View>
    );
};

export default PersonalInfoScreen;