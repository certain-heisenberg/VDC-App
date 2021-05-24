import React, { Component } from 'react';
import { Text, View, Pressable, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


import styles from './styles';

const AppointmentScreen = () => {
    const navigation = useNavigation();
    const route = useRoute();

    const id = route.params?.id;

    return (
        <View style={styles.container}>
            <FontAwesome name="meetup" size={250} color="lightgrey" style={{ position: 'absolute' }} />
            <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between', alignItems: 'flex-end' }}>



                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('Chat Room List Screen')}
                >
                    <Text style={styles.buttonText}

                    >Chat</Text>

                </TouchableOpacity>



                <TouchableOpacity
                    style={[styles.button, { backgroundColor: '#f15454', }]}
                    onPress={() => navigation.navigate('Video Login Screen')}
                >
                    <Text style={styles.buttonText}

                    >Video Call</Text>

                </TouchableOpacity>
            </View >
        </View >
    );
};

export default AppointmentScreen;