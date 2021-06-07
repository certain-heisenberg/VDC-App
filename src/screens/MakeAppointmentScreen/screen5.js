import React, { useState, useEffect } from 'react';
import { View, KeyboardAvoidingView, Text, Pressable, StyleSheet, ActivityIndicator, Image, SafeAreaView, FlatList } from 'react-native';

import { useNavigation, useRoute } from '@react-navigation/native';

import doctors from './doctors';
import { ScrollView } from 'react-native';

const MakeAppointmentScreen5 = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const id = Math.floor(route.params?.id);

    const { image, name, speciality, experience, fee, qualification, description, language, coordinate } = doctors[id];

    const handlePress = () => {
        navigation.navigate('Make Appointment Screen 6', { id });
    }

    return (
        <ScrollView style={styles.container}>
            <Image style={styles.image}
                source={image}
                resizeMode='contain'
            />

            <View style={{ alignItems: 'center' }}>
                <Text style={{ fontSize: 19, marginTop: 10, marginLeft: 7, fontWeight: '700', color: '#7a583b' }}>{name}</Text>
            </View>


            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 5 }}>
                <View style={{ backgroundColor: '#4182a6', padding: 2, borderRadius: 5, alignItems: 'center', justifyContent: 'center', flexDirection: 'row', marginLeft: 7, paddingHorizontal: 7 }}>
                    <Text style={{ color: 'white' }}>{speciality}</Text>
                </View>
                <View style={{ backgroundColor: '#3a9c85', padding: 2, borderRadius: 5, alignItems: 'center', justifyContent: 'center', flexDirection: 'row', marginRight: 7, paddingHorizontal: 7 }}>
                    <Text style={{ color: 'white' }}>Fee: {'\u20B9'}{fee}</Text>
                </View>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 5, }}>
                <Text style={{ marginLeft: 7, color: 'brown' }}>{experience} Years of experience</Text>
                <View style={{ justifyContent: 'center', alignItems: 'center', }}>
                    <Text style={{ marginRight: 7, color: '#fc7703' }}>{language}</Text>
                </View>
            </View>

            <View style={{ borderBottomWidth: 1, borderColor: 'lightgrey', marginTop: 20, marginHorizontal: 5 }}>

            </View>

            <Text style={{ fontSize: 18, marginTop: 15, marginLeft: 7 }}>Bio</Text>

            <Text style={{ fontSize: 16, marginTop: 5, marginBottom: 10, marginLeft: 7 }}>{description}</Text>

            <View style={{ borderBottomWidth: 1, borderColor: 'lightgrey', marginTop: 20, marginHorizontal: 5 }}>

            </View>

            <Text style={{ fontSize: 18, marginVertical: 10, marginLeft: 7 }}>Clinic Address</Text>
            {/* {Address} */}
            <Text style={{ fontSize: 16, marginLeft: 7 }}>latitude: {coordinate.latitude}</Text>
            <Text style={{ fontSize: 16, marginLeft: 7 }}>longitude: {coordinate.longitude}</Text>

            <Pressable
                onPress={handlePress}
                // disabled={loading}
                style={({ pressed }) => [
                    styles.button,
                    {
                        backgroundColor: pressed
                            ? 'white'
                            : 'orange'
                    },
                ]}
            >
                {/* {loading && <ActivityIndicator />} */}
                {<ActivityIndicator />}

                <Text style={{ fontSize: 20, color: "white", fontWeight: "bold" }}>Schedule Meet</Text>
            </Pressable>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        height: '100%',
        flex: 1,
        width: '100%',
        padding: 1
    },
    button: {
        backgroundColor: 'green',
        height: 50,
        borderRadius: 5,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 30,
        marginBottom: 20,
        marginHorizontal: 10
    },
    image: {
        width: '100%',
        height: 325,
        resizeMode: 'cover',
    }

});

export default MakeAppointmentScreen5;