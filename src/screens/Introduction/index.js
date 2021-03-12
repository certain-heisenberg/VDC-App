import React from 'react';
import { Text, View, Pressable } from 'react-native';
import styles from './styles';

import { useNavigation } from '@react-navigation/native';

const Introduction = () => {

    const navigation = useNavigation();

    // const hover = ({ pressed }) => [
    //     {
    //         backgroundColor: pressed
    //             ? 'white'
    //             : 'transparent',
    //     }
    // ]

    return (
        <View style={styles.container}>
            <Text h3 style={{ marginBottom: 50, fontSize: 30, color: '#f15454' }}>Who are you? </Text>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: 250 }}>
                <Pressable style={({ pressed }) => [
                    styles.button,
                    {
                        backgroundColor: pressed
                            ? 'white'
                            : '#f15454'
                    },
                ]}
                >
                    <Text style={styles.buttonText}>Doctor</Text>
                </Pressable>

                <Pressable style={({ pressed }) => [
                    styles.button,
                    {
                        backgroundColor: pressed
                            ? 'white'
                            : '#f15454'
                    },
                ]}
                    onPress={() => navigation.navigate('Welcome Screen')}
                >
                    <Text style={styles.buttonText}>Patient</Text>
                </Pressable>
            </View>
        </View>
    );
};

export default Introduction;