import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { useNavigation, useRoute } from '@react-navigation/native';

const PrescriptionScreen = () => {
    const navigation = useNavigation();

    const route = useRoute();
    const id = Math.floor(route.params?.id);

    return (
        <View style={styles.container}>
            <View>
                <Text style={{ fontSize: 20 }}>Prescription {id}</Text>

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

