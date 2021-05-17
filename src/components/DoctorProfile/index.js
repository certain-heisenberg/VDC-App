import React from 'react';
import { View, KeyboardAvoidingView, Text, Pressable, StyleSheet, ActivityIndicator, Image, SafeAreaView } from 'react-native';

import styles from './styles';
import { useNavigation, } from '@react-navigation/native';


const DoctorProfile = (props) => {
    const { id, image, name, speciality, experience, fee } = props.profile;
    const navigation = useNavigation();

    const next = () => {
        navigation.navigate('Make Appointment Screen 5', { id });
    };

    return (
        <View style={styles.cardContainer}>
            <Image style={styles.image}
                source={image}
            />

            <View style={styles.textContainer}>
                <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#2F4F4F' }}>{name}</Text>
                <Text style={{ fontSize: 16, color: '#737373', marginTop: 5 }}>{experience} Years of experience</Text>
                <Text style={{ fontSize: 16, marginTop: 5, color: '#FFA500', fontWeight: 'bold' }}>Speciality in {speciality}</Text>
                <Text style={{ fontSize: 16, marginTop: 5 }}>Fee: {'\u20B9'}{fee}</Text>
                <Pressable
                    style={({ pressed }) => [
                        styles.button,
                        {
                            backgroundColor: pressed
                                ? 'white'
                                : '#f15454'
                        },
                    ]}

                    onPress={next}

                >
                    <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'white' }}>View more details</Text>
                </Pressable>
            </View>
        </View>
    );
};

export default DoctorProfile;;