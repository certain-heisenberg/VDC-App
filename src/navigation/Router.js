/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import PosterList from '../components/PosterList/index';
import HomeTabNavigator from './HomeTabNavigator';
import PatientProfile from '../screens/PatientProfile/index';
import Introduction from '../screens/Introduction/index';
import AppointmentScreen1 from '../screens/AppointmentScreen/screen1';
import AppointmentScreen2 from '../screens/AppointmentScreen/screen2';
import MakeAppointmentScreen1 from '../screens/MakeAppointmentScreen/screen1';
import MakeAppointmentScreen2 from '../screens/MakeAppointmentScreen/screen2';
import MakeAppointmentScreen3 from '../screens/MakeAppointmentScreen/screen3';
import MakeAppointmentScreen4 from '../screens/MakeAppointmentScreen/screen4';
import PersonalInfoScreen from '../screens/PersonaInfoScreen/index';
import VideoLoginScreen from '../screens/VideoCall/VideoLoginScreen';
import CallScreen from '../screens/VideoCall/CallScreen';
import MakeAppointmentScreen5 from '../screens/MakeAppointmentScreen/screen5';
import PrescriptionScreen from '../screens/Prescription/screen2';
import MakeAppointmentScreen6 from '../screens/MakeAppointmentScreen/screen6';
import ChatRoomList from '../screens/Chat/screen1';

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
                    name={'Appointment Screen 1'}
                    component={AppointmentScreen1}
                    options={{
                        headerShown: false,
                    }}
                />

                <Stack.Screen
                    name={'Appointment Screen 2'}
                    component={AppointmentScreen2}
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

                <Stack.Screen
                    name={'Make Appointment Screen 4'}
                    component={MakeAppointmentScreen4}
                    options={{
                        headerShown: false,
                    }}
                />

                <Stack.Screen
                    name={'Make Appointment Screen 5'}
                    component={MakeAppointmentScreen5}
                    options={{
                        headerShown: false,
                    }}
                />

                <Stack.Screen
                    name={'Make Appointment Screen 6'}
                    component={MakeAppointmentScreen6}
                    options={{
                        headerShown: false,
                    }}
                />


                <Stack.Screen
                    name={'Personal Info Screen'}
                    component={PersonalInfoScreen}
                    options={{
                        headerShown: false,
                    }}
                />

                <Stack.Screen
                    name={'Video Login Screen'}
                    component={VideoLoginScreen}
                    options={{
                        headerShown: false,
                    }}
                />

                <Stack.Screen
                    name={'Call Screen'}
                    component={CallScreen}
                    options={{
                        headerShown: false,
                    }}
                />

                <Stack.Screen
                    name={'Prescription Screen'}
                    component={PrescriptionScreen}
                    options={{
                        headerShown: false,
                    }}
                />

                <Stack.Screen
                    name={'Chat List Screen'}
                    component={ChatRoomList}
                    options={{
                        headerShown: false,
                    }}
                />


            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Router;
