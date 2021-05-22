import React, { useState } from 'react';
import { View, Text, Pressable, ImageBackground, StyleSheet, Image, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import chatRoomsData from './chatRoomsData';
import ChatRoomListItem from '../../components/Chat/chatRoomListItem';

const ChatRoomList = () => {
    const navigation = useNavigation();

    const chatRoom = chatRoomsData[0];

    const user = chatRoom.users[1];

    return (
        <View style={styles.container}>
            <FlatList
                style={{ width: '100%' }}
                data={chatRoomsData}
                renderItem={({ item }) => <ChatRoomListItem chatRoom={item} />}
                keyExtractor={(item) => item.id}
            />
        </View >
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
});

export default ChatRoomList;