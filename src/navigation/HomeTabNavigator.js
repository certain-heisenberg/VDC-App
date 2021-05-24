/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import PatientProfile from '../screens/PatientProfile/index';
import { withAuthenticator } from 'aws-amplify-react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import HomeScreen from '../screens/HomeScreen/index';
import PrescriptionList from '../screens/Prescription/screen1';
import NotificationScreen from '../screens/Notification/index';


const Tab = createBottomTabNavigator();

const HomeTabNavigator = () => {
    return (
        <Tab.Navigator
            tabBarOptions={{
                activeTintColor: '#f15454',
            }}>
            <Tab.Screen
                name={'Home'}
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Fontisto name="home" size={25} color={color} />
                    )
                }}
            />
            <Tab.Screen
                name={'Prescription'}
                component={PrescriptionList}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Fontisto name="paperclip" size={25} color={color} />
                    )
                }}
            />
            <Tab.Screen
                name={'Notification'}
                component={NotificationScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Fontisto name="bell" size={25} color={color} />
                    ),
                    headerShown: true,
                }}
            />
            <Tab.Screen
                name={'Profile'}
                component={PatientProfile}
                options={{
                    tabBarIcon: ({ color }) => (
                        <EvilIcons name="user" size={25} color={color} />
                    )
                }}
            />
        </Tab.Navigator>
    );
};

export default withAuthenticator(HomeTabNavigator);
