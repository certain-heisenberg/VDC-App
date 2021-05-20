import React, { useState, useEffect } from 'react';
import { View, KeyboardAvoidingView, Text, TouchableOpacity, Pressable, StyleSheet, ActivityIndicator, Image, SafeAreaView, FlatList } from 'react-native';

import { useNavigation, useRoute } from '@react-navigation/native';
import { API, graphqlOperation } from 'aws-amplify';
import { createPaymentIntent } from '../../../mutations';
import { useStripe } from '@stripe/stripe-react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";

import doctors from './doctors';
import { Alert } from 'react-native';

const MakeAppointmentScreen6 = () => {
    // const navigation = useNavigation();

    const [clientSecret, setClientSecret] = useState("");
    const { initPaymentSheet, presentPaymentSheet } = useStripe();

    const route = useRoute();
    const id = Math.floor(route.params?.id);

    const { fee } = doctors[id];

    const amount = Math.floor(fee) * 100;

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

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

    const [dateBool, setDateBool] = useState(false);
    const [timeBool, setTimeBool] = useState(false);
    const [isEnabled, setIsEnabled] = useState(false);
    const [isToday, setIsToday] = useState(false);
    const [fDate, setFDate] = useState('');
    const [fMonth, setFMonth] = useState('');
    const [fYear, setFYear] = useState('');
    const [fHour, setFHour] = useState('');
    const [fMinute, setFMinute] = useState('');

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleDateConfirm = (date) => {
        const [day, month, chosenDate, year] = date.toString().split(" ");

        const todayDate = new Date();
        const [curDay, curMonth, curDate, curYear] = todayDate.toString().split(" ");

        var months = {
            'Jan': '01',
            'Feb': '02',
            'Mar': '03',
            'Apr': '04',
            'May': '05',
            'Jun': '06',
            'Jul': '07',
            'Aug': '08',
            'Sep': '09',
            'Oct': '10',
            'Nov': '11',
            'Dec': '12'
        }

        const flag = 1;

        if (parseInt(year) < parseInt(curYear)) {
            hideDatePicker();
            Alert.alert("Invalid Year");
            flag = 0;
        }

        if (parseInt(year) === parseInt(curYear) && parseInt(months[month]) < parseInt(months[curMonth])) {
            hideDatePicker();
            Alert.alert("Invalid Month");
            flag = 0;
        }

        if (parseInt(year) === parseInt(curYear) && parseInt(months[month]) === parseInt(months[curMonth]) && parseInt(chosenDate) < parseInt(curDate)) {
            hideDatePicker();
            Alert.alert("Invalid Date");
            flag = 0;
        }

        if (flag === 0) {
            setDateBool(false);
        }


        if (parseInt(year) === parseInt(curYear) && parseInt(months[month]) === parseInt(months[curMonth]) && parseInt(chosenDate) === parseInt(curDate)) {
            setIsToday(true);
        }

        setFDate(chosenDate);
        setFMonth(month);
        setFYear(year);
        // console.log("Date Success");

        setDateBool(true);
        hideDatePicker();
    };

    const showTimePicker = () => {
        setTimePickerVisibility(true);
    };

    const hideTimePicker = () => {
        setTimePickerVisibility(false);
    };

    const handleTimePress = () => {
        if (!dateBool) {
            Alert.alert("Please choose date first!");
        }
        else {
            showTimePicker();
        }
        // showTimePicker();

    }

    const handleTimeConfirm = (time) => {
        const [_, __, ___, ____, chosenTime] = time.toString().split(" ");
        const [hour, minute] = chosenTime.split(":");

        const todayDate = new Date();
        const [_a, __aa, ___aaa, ____aaaa, curTime] = todayDate.toString().split(" ");
        const [curHour, curMinute] = curTime.split(":");

        if (isToday && parseInt(hour) < parseInt(curHour)) {
            hideTimePicker();
            setTimeBool(false);
            Alert.alert("Time must be in future");
        }

        if (isToday && parseInt(hour) === parseInt(curHour) && parseInt(minute) <= parseInt(curMinute)) {
            hideTimePicker();
            setTimeBool(false);
            Alert.alert("Time must be in future");
        }
        setFHour(hour);
        setFMinute(minute);

        setTimeBool(true);

        setIsEnabled(dateBool);
        hideTimePicker();
    };

    const handlePress = () => {
        if (!isEnabled) {
            Alert.alert("Please choose date and time!");
        }
        else {
            Alert.alert(
                "Are you sure?",
                `You appointment is scheduled on ${fDate} ${fMonth} ${fYear} at ${fHour}:${fMinute} Hrs`,
                [
                    {
                        text: "Yes",
                        onPress: () => onPay(),
                    },
                    { text: "No" }
                ]
            );
        }
    }




    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={showDatePicker}
                style={{ backgroundColor: '#009688', marginBottom: 15, marginHorizontal: 35, height: 35, alignItems: 'center', justifyContent: 'center', borderRadius: 10 }}
            >
                <Text style={{ fontSize: 18, color: 'white' }}>Choose Date</Text>
            </TouchableOpacity>
            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleDateConfirm}
                onCancel={hideDatePicker}
            />

            <TouchableOpacity onPress={handleTimePress}
                style={{ backgroundColor: '#009688', marginBottom: 10, marginHorizontal: 35, height: 35, alignItems: 'center', justifyContent: 'center', borderRadius: 10 }}
            >
                <Text style={{ fontSize: 18, color: 'white' }}>Choose Time</Text>
            </TouchableOpacity>

            <DateTimePickerModal
                isVisible={isTimePickerVisible}
                mode="time"
                onConfirm={handleTimeConfirm}
                onCancel={hideTimePicker}
            />

            <Pressable
                onPress={handlePress}
                // disabled={!isEnabled}
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

                <Text style={{ fontSize: 20, color: "white", fontWeight: "bold" }}>Confirm</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: '100%',
        flex: 1,
        width: '100%',
        justifyContent: 'center',
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
});

export default MakeAppointmentScreen6;