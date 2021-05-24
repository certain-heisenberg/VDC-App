import React, { Component } from 'react';
import { Text, View, Pressable, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import moment from 'moment';

const ChatMessageItem = (props) => {
    const navigation = useNavigation();
    const route = useRoute();

    const { message } = props;

    const isMyMessage = () => {
        return message.user.id === 'u1';
    }

    return (
        <View style={styles.container}>
            <View style={[styles.messageBox, {
                backgroundColor: isMyMessage() ? '#DCF8C5' : 'white',
                marginLeft: isMyMessage() ? 50 : 0,
                marginRight: isMyMessage() ? 0 : 50,
            }]}>
                {!isMyMessage() && <Text style={styles.name}>{message.user.name}</Text>}
                <Text style={styles.content}>{message.content}</Text>
                <Text style={styles.time}>{moment(message.createdAt).fromNow()}</Text>
            </View>
        </View >
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 9
    },
    messageBox: {
        borderRadius: 5,
        padding: 10,
    },
    name: {
        color: '#2f95dc',
        fontWeight: 'bold',
        marginBottom: 5,
    },
    content: {
    },
    time: {
        alignSelf: 'flex-end',
        color: 'grey',
        fontSize: 12
    }
});

export default ChatMessageItem;