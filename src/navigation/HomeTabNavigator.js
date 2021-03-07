/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import PatientProfile from '../screens/PatientProfile/index';
import { withAuthenticator } from 'aws-amplify-react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

const Tab = createBottomTabNavigator();

const HomeTabNavigator = () => {
    return (
        <Tab.Navigator
            tabBarOptions={{
                activeTintColor: '#f15454',
            }}>
            <Tab.Screen
                name={'Appointment'}
                component={PatientProfile}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Fontisto name="calendar" size={25} color={color} />
                    )
                }}
            />
            <Tab.Screen
                name={'Prescription'}
                component={PatientProfile}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Fontisto name="paperclip" size={25} color={color} />
                    )
                }}
            />
            <Tab.Screen
                name={'Notification'}
                component={PatientProfile}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Fontisto name="bell" size={25} color={color} />
                    )
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
