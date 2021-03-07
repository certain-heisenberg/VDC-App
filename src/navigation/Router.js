/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import PosterList from '../components/PosterList/index';
import HomeTabNavigator from './HomeTabNavigator';
import PatientProfile from '../screens/PatientProfile/index';

const Stack = createStackNavigator();

const Router = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name={'Poster List'}
                    component={PosterList}
                    options={{
                        headerShown: false,
                    }}
                />

                <Stack.Screen
                    name={'Welcome Screen'}
                    component={HomeTabNavigator}
                    options={{
                        headerShown: false,
                    }}
                />

                <Stack.Screen
                    name={'Patient Profile'}
                    component={PatientProfile}
                    options={{
                        headerShown: false,
                    }}
                />

            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Router;
