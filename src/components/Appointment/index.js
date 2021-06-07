import React, { Component } from 'react';
import { View, Text, StyleSheet, Pressable, TouchableOpacity, Dimensions } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';


const Appointment = (props) => {

    const { id, doctor, patient, date, status } = props.details;
    // console.log(props.details);

    const navigation = useNavigation();

    const next = () => {
        navigation.navigate('Appointment Screen 2', { id });
    };

    const [aDate, aMonth, aYear] = date.toString().split("-");

    var getStatus = {
        '0': 'COMPLETED',
        '1': 'UPCOMING',
        '2': 'ONGOING'
    }

    var months = {
        '01': 'Jan',
        '02': 'Feb',
        '03': 'Mar',
        '04': 'Apr',
        '05': 'May',
        '06': 'Jun',
        '07': 'Jul',
        '08': 'Aug',
        '09': 'Sep',
        '10': 'Oct',
        '11': 'Nov',
        '12': 'Dec',
    }

    var allColors = {
        '0': '#5a5a5a',
        '1': '#d14126',
        '2': '#ff8b66',
        '3': '#3367d5',
        '4': '#566e7a',
    }

    var statusColor = {
        '0': '#54e21e',
        '1': 'yellow',
        '2': '#5cffff',
    }

    const colorIndex = Math.floor((Math.random() * 5));
    const index = Math.floor(id);

    return (
        <View style={styles.buttonContainer}>

            <TouchableOpacity
                style={[styles.button1, { backgroundColor: allColors[colorIndex] }]}
                onPress={next}
            >
                <Text style={{ color: 'white', fontSize: 20 }}>Appointment {index + 1}</Text>
                <Text style={{ color: 'white', fontSize: 14 }}>{doctor}</Text>
                <Text style={{ color: 'white', fontSize: 14 }}>{aDate} {months[aMonth]} {aYear}</Text>

                <Text style={{ color: statusColor[status], fontSize: 18, fontWeight: 'bold', marginBottom: 3 }}>{getStatus[status]}</Text>

            </TouchableOpacity>

            {/* <TouchableOpacity
                style={[styles.button2, { backgroundColor: allColors[4 - colorIndex] }]}
            >
                <Text style={{ color: 'white', fontSize: 20 }}>Appointment 2</Text>
                <Text style={{ color: 'white', fontSize: 14 }}>{doctor}</Text>
                <Text style={{ color: 'white', fontSize: 14 }}>{aDate} {months[aMonth]} {aYear}</Text>
                <Text style={{ color: statusColor[status], fontSize: 18, fontWeight: 'bold', marginBottom: 3 }}>{getStatus[status]}</Text>
            </TouchableOpacity> */}
        </View>
    );
};

const styles = StyleSheet.create({
    button1: {
        backgroundColor: '#f15454',
        height: 110,
        width: Dimensions.get('window').width / 2 - 12,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        marginBottom: 15,
        marginRight: 7,
    },
    // button2: {
    //     backgroundColor: '#f15454',
    //     height: 110,
    //     width: '49%',
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     borderRadius: 5,
    //     marginBottom: 15,
    //     marginLeft: 3
    // },
    buttonContainer: {
        flexDirection: 'row'
    }
});

export default Appointment;