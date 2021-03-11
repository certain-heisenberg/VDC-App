/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import AsyncStorage from '@react-native-community/async-storage';
import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import Amplify from 'aws-amplify';
import config from './src/aws-exports';
Amplify.configure(config);

import PosterList from './src/components/PosterList/index';
import Router from './src/navigation/Router';
import Introduction from './src/screens/Introduction/index';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      {/* <Introduction /> */}
      <Router />
      {/* <PosterList /> */}
    </>
  );
};

export default App;
