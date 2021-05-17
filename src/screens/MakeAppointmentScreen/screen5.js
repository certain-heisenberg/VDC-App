import React, { useState, useEffect } from 'react';
import { View, KeyboardAvoidingView, Text, Pressable, StyleSheet, ActivityIndicator, Image, SafeAreaView, FlatList } from 'react-native';

import { useNavigation, useRoute } from '@react-navigation/native';
import { API, graphqlOperation } from 'aws-amplify';
import { createPaymentIntent } from '../../../mutations';
import { useStripe } from '@stripe/stripe-react-native';

import doctors from './doctors';
import { Alert } from 'react-native';

const MakeAppointmentScreen5 = () => {
    // const navigation = useNavigation();

    const [clientSecret, setClientSecret] = useState("");
    const { initPaymentSheet } = useStripe();

    const route = useRoute();
    const id = Math.floor(route.params?.id);

    const { image, name, speciality, experience, fee, qualification, description, language } = doctors[id];

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
        console.log('Success');

        if (error) {
            Alert.alert(error);
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text h3 style={{ fontSize: 30, color: '#f15454', marginLeft: 21, marginTop: 15 }}>Choose Consultant</Text>

            <Pressable
                // onPress={next}
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

                <Text style={{ fontSize: 20, color: "white", fontWeight: "bold" }}>Next</Text>
            </Pressable>
        </SafeAreaView>
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
    }

});

export default MakeAppointmentScreen5;