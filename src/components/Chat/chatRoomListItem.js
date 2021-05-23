import React, { useState } from 'react';
import { View, Text, Pressable, ImageBackground, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import moment from 'moment';

const ChatRoomListItem = (props) => {
    const navigation = useNavigation();

    const { chatRoom } = props;

    const user = chatRoom.users[1];

    const onClick = () => {
        navigation.navigate("Chat Room Screen", { id: chatRoom.id, name: user.name });
    }

    return (
        <TouchableOpacity style={styles.chatRoomContainer} onPress={onClick}>
            <View style={styles.leftContainer}>
                <Image source={{ uri: user.imageUri }}
                    style={styles.avatar}
                />
                <View style={styles.insideLeftContainer}>
                    <Text style={styles.username}>{user.name}</Text>
                    <Text style={styles.lastMessage}
                        numberOfLines={1}
                    >{chatRoom.lastMessage.content}</Text>
                </View>
            </View>

            <Text style={styles.time}
            >
                {moment(chatRoom.lastMessage.createdAt).format("DD/MM/YYYY")}
            </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    avatar: {
        height: 60,
        width: 60,
        marginRight: 15,
        borderRadius: 50,
    },
    username: {
        fontWeight: 'bold',
        fontSize: 17,
    },
    lastMessage: {
        fontSize: 15,
        color: 'grey',
        marginBottom: 7
    },
    time: {
        fontSize: 12,
        color: 'grey'
    },
    chatRoomContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        padding: 10,
    },
    leftContainer: {
        flexDirection: 'row',
    },
    insideLeftContainer: {
        justifyContent: 'space-around',
        borderBottomWidth: 1,
        shadowOpacity: 1,
        borderColor: 'lightgrey',
    }

});

export default ChatRoomListItem;