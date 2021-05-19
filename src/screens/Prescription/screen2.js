import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { useNavigation } from '@react-navigation/native';

const PrescriptionScreen = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View>
                <Text style={{ fontSize: 20 }}>Prescription 1</Text>

            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {

    },
    cardContainer: {

    }
});

export default PrescriptionScreen;