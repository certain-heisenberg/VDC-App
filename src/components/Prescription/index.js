import React, { Component } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';


const Prescription = (props) => {

    const { id, patientName, doctor, prescriptionDate, appointmentDate } = props.details;

    const navigation = useNavigation();

    const next = () => {
        navigation.navigate('Prescription Screen', { id });
    };

    const [date, month, year] = prescriptionDate.toString().split("-");

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
        '12': 'Dec'
    }

    return (
        <Pressable
            style={({ pressed }) => [
                styles.cardContainer,
                {
                    backgroundColor: pressed
                        ? 'lightgrey'
                        : '#d14126'
                },
            ]}
            onPress={next}
        >
            <FontAwesome5 name="notes-medical" size={35} color="black" />
            <View style={styles.textContainer1}>
                <Text style={{ fontSize: 20, color: 'white' }}>Prescription {id}</Text>
                <Text style={{ fontSize: 12, color: 'white' }}>Issued on: {date} {months[month]} {year}</Text>
            </View>
            <View style={styles.textContainer2}>
                <Text style={{ fontSize: 13, color: 'white' }}>Issued by:</Text>
                <Text style={{ fontSize: 18, color: '#f0d756', fontWeight: 'bold' }}>{doctor}</Text>
            </View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {

    },
    cardContainer: {
        flexDirection: 'row',
        paddingLeft: 10,
        alignItems: 'center',
        backgroundColor: '#5a5a5a',
        height: 80,
        marginHorizontal: 3,
        borderRadius: 7,
        marginTop: 5,

        borderWidth: 1,
        borderColor: '#C1C1C1',
        borderBottomWidth: 5,
        shadowColor: 'red',
        shadowOffset: { width: 10, height: 2 },
        shadowOpacity: 1,
        shadowRadius: 2,
        elevation: 1,

    },
    textContainer1: {
        marginLeft: 10,
        justifyContent: 'center',
        alignItems: 'center',
        height: 80,
    },
    textContainer2: {
        marginLeft: 10,
        justifyContent: 'center',
        alignItems: 'center',
        height: 80,
        width: 167
    }
});

export default Prescription;