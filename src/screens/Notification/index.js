import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const NotificationScreen = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Ionicons name="menu-outline" size={25} color="black" />
                <Text style={{ fontSize: 21, fontWeight: '700', marginLeft: 20 }}>Notifications</Text>
            </View>


        </View >
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        width: '100%',
        height: 60,
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 13
    }

});

export default NotificationScreen;

