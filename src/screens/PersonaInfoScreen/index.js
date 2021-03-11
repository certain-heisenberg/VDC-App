import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import styles from './styles';

const PersonalInfoScreen = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text>Personal Info</Text>
        </View>
    );
};

export default PersonalInfoScreen;