import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';

import styles from './styles';

const CustomListItem = ({ id, chatName, enterChat }) => {
    return (
        <ListItem style={styles.container}>
            <Avatar
                rounded
                source={{
                    uri: "https://images.unsplash.com/photo-1571249104671-f5537fb3e137?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80"
                }}
            />

            <ListItem.Content>
                <ListItem.Title style={{ fontWeight: 'bold', fontSize: 18 }}>
                    YouTube Chat
                </ListItem.Title>

                <ListItem.Subtitle numberOfLines={1} ellipsizeMode="tail">
                    This is a test. This is a test This is a test This is a test This is a testThis is a test
                </ListItem.Subtitle>
            </ListItem.Content>
        </ListItem>
    );
}

export default CustomListItem;