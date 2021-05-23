import React, { Component } from 'react';
import { Text, View, Pressable, TouchableOpacity, StyleSheet, FlatList, ImageBackground } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import chatData from './chatData';
import ChatMessageItem from '../../components/Chat/chatMessageItem';

const ChatRoomScreen = () => {
    const navigation = useNavigation();

    const route = useRoute();

    return (
        <ImageBackground style={styles.container}
            source={require('./BG.png')}
        >
            <FlatList
                data={chatData.messages}
                renderItem={({ item }) => <ChatMessageItem message={item} />}
                inverted
            />
        </ImageBackground >
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default ChatRoomScreen;