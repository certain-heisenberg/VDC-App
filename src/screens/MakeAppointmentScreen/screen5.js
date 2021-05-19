import React, { useState, useEffect } from 'react';
import { View, KeyboardAvoidingView, Text, Pressable, StyleSheet, ActivityIndicator, Image, SafeAreaView, FlatList } from 'react-native';

import { useNavigation, useRoute } from '@react-navigation/native';
import { API, graphqlOperation } from 'aws-amplify';
import { createPaymentIntent } from '../../../mutations';
import { useStripe } from '@stripe/stripe-react-native';

import doctors from './doctors';
import { Alert } from 'react-native';
import { ScrollView } from 'react-native';

const MakeAppointmentScreen5 = () => {
    // const navigation = useNavigation();

    const [clientSecret, setClientSecret] = useState("");
    const { initPaymentSheet, presentPaymentSheet } = useStripe();

    const route = useRoute();
    const id = Math.floor(route.params?.id);

    const { image, name, speciality, experience, fee, qualification, description, language, coordinate } = doctors[id];

    const amount = Math.floor(fee);

    useEffect(() => {
        fetchPaymentIntent();
    }, []);

    useEffect(() => {
        if (clientSecret) {
            initializePaymentSheet();
        }
    }, [clientSecret]);

    const fetchPaymentIntent = async () => {
        const response = await API.graphql(
            graphqlOperation(createPaymentIntent, { amount })
        );

        setClientSecret(response.data.createPaymentIntent.clientSecret);
    };

    const initializePaymentSheet = async () => {
        if (!clientSecret) {
            return;
        }

        const { error } = await initPaymentSheet({
            paymentIntentClientSecret: clientSecret
        });
        if (error) {
            Alert.alert(error);
        }
    };

    const openPaymentSheet = async () => {
        if (!clientSecret) {
            return;
        }

        const { error } = await presentPaymentSheet({ clientSecret });

        if (error) {
            Alert.alert(`Error code: ${error.code}`, error.message);
        } else {
            // saveAppointment();
            Alert.alert('Success', 'Your payment is confirmed!');
        }
    }

    // const saveAppointment = async () => {

    // }

    const onPay = () => {
        openPaymentSheet();
    };


    return (
        <ScrollView style={styles.container}>
            <Image style={styles.image}
                source={image}
            />

            <View style={{ alignItems: 'center' }}>
                <Text style={{ fontSize: 18, marginTop: 10, marginLeft: 7 }}>{name}</Text>
            </View>


            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 5 }}>
                <Text style={{ marginLeft: 7 }}>{speciality}</Text>
                <Text style={{ marginRight: 7 }}>Fee: {fee}</Text>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 5 }}>
                <Text style={{ marginLeft: 7 }}>{experience} Years of experience</Text>
                <Text style={{ marginRight: 7 }}>{language}</Text>
            </View>

            <Text style={{ fontSize: 16, marginTop: 10, marginLeft: 7 }}>Bio</Text>

            <Text style={{ fontSize: 16, marginTop: 5, marginBottom: 10, marginLeft: 7 }}>{description}</Text>

            <Text style={{ fontSize: 16, marginVertical: 10, marginLeft: 7 }}>Clinic Address</Text>
            {/* {Address} */}
            <Text style={{ fontSize: 16, marginLeft: 7 }}>latitude: {coordinate.latitude}</Text>
            <Text style={{ fontSize: 16, marginLeft: 7 }}>longitude: {coordinate.longitude}</Text>

            <Pressable
                onPress={onPay}
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
        marginHorizontal: 23
    },
    image: {
        width: '100%',
        height: 325,
        resizeMode: 'cover',
    }

});

export default MakeAppointmentScreen5;