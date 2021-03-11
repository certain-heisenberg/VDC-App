/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import PosterList from '../components/PosterList/index';
import HomeTabNavigator from './HomeTabNavigator';
import PatientProfile from '../screens/PatientProfile/index';
import Introduction from '../screens/Introduction/index';
import AppointmentScreen from '../screens/AppointmentScreen/index';
import MakeAppointmentScreen1 from '../screens/MakeAppointmentScreen/screen1';
import MakeAppointmentScreen2 from '../screens/MakeAppointmentScreen/screen2';
import MakeAppointmentScreen3 from '../screens/MakeAppointmentScreen/screen3';

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

                <Stack.Screen
                    name={'Introdction Screen'}
                    component={Introduction}
                    options={{
                        headerShown: false,
                    }}
                />

                <Stack.Screen
                    name={'Appointment Screen'}
                    component={AppointmentScreen}
                    options={{
                        headerShown: false,
                    }}
                />

                <Stack.Screen
                    name={'Make Appointment Screen 1'}
                    component={MakeAppointmentScreen1}
                    options={{
                        headerShown: false,
                    }}
                />

                <Stack.Screen
                    name={'Make Appointment Screen 2'}
                    component={MakeAppointmentScreen2}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name={'Make Appointment Screen 3'}
                    component={MakeAppointmentScreen3}
                    options={{
                        headerShown: false,
                    }}
                />


            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Router;
