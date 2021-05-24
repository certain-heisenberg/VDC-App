import React, { useState } from 'react';
import { View, Text, Pressable, ImageBackground, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import moment from 'moment';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import Entypo from 'react-native-vector-icons/Entypo';

const ChatInputBox = () => {
    const navigation = useNavigation();

    // const { chatRoom } = props;

    const [message, setMessage] = useState("");

    const onSendPress = () => {
        console.warn(`Sending: ${message}`);

        // send the message to backend

        setMessage("");
    }

    const onPress = () => {
        if (message) {
            onSendPress();
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.leftContainer}>
                <TextInput style={styles.textInput}
                    multiline
                    placeholder="Type a message"
                    value={message}
                    onChangeText={setMessage}
                />
                <Entypo name="attachment" size={25} color="grey" style={styles.icon} />
            </View>

            <TouchableOpacity onPress={onPress}>
                <View style={styles.rightContainer}>
                    <MaterialIcons name="send" size={25} color="white" />
                </View>
            </TouchableOpacity>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        margin: 7,
        alignItems: 'flex-end',
    },
    leftContainer: {
        flexDirection: 'row',
        backgroundColor: 'white',
        paddingLeft: 5,
        borderRadius: 25,
        marginRight: 7,
        flex: 1,
        alignItems: 'flex-end'
    },
    textInput: {
        flex: 1,
        marginHorizontal: 10,
        maxHeight: 100,
    },
    icon: {
        marginRight: 5,
        marginRight: 12,
        marginBottom: 10,
    },
    rightContainer: {
        backgroundColor: '#075E54',
        borderRadius: 25,
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default ChatInputBox;