import React from 'react';
import { Text, View, Pressable, ActivityIndicator } from 'react-native';
import styles from './styles';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


import { useNavigation } from '@react-navigation/native';

const Introduction = () => {

    const navigation = useNavigation();

    const handlePress = ({ pressed }) => [
        navigation.navigate('Welcome Screen'),

    ]

    return (
        <View style={styles.container}>
            {/* <Text h3 style={{ marginBottom: 50, fontSize: 30, color: 'black' }}>Who are you? </Text> */}
            <View style={{ marginBottom: 30, flexDirection: 'row' }}>
                <FontAwesome name="stethoscope" size={95} color="black" style={styles.icon} />
                <FontAwesome5 name="head-side-mask" size={81} color="black" style={styles.icon} />
            </View>


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
                            : '#3d9eda'
                    },
                ]}
                    onPress={handlePress}
                >

                    {/* {loading && <ActivityIndicator size="large" color="#00ff00" />} */}

                    <Text style={styles.buttonText}>Patient</Text>
                </Pressable>
            </View>
        </View>
    );
};

export default Introduction;