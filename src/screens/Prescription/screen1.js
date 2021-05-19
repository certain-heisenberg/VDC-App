import React, { Component } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

import { useNavigation } from '@react-navigation/native';


const PrescriptionList = () => {
    const navigation = useNavigation();

    const next = () => {
        navigation.navigate('Prescription Screen')
    }

    return (
        <View style={styles.container}>
            <Pressable style={styles.cardContainer}
                onPress={next}
            >
                <Text style={{ fontSize: 20 }}>Prescription 1</Text>
                <Text>Issued on: Date</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {

    },
    cardContainer: {

    }
});

export default PrescriptionList;