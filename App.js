/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StripeProvider } from '@stripe/stripe-react-native';

import Amplify from 'aws-amplify';
import config from './src/aws-exports';
Amplify.configure(config);

import {
  RTCPeerConnection,
  RTCIceCandidate,
  RTCSessionDescription,
  RTCView,
  MediaStream,
  MediaStreamTrack,
  mediaDevices,
  registerGlobals
} from 'react-native-webrtc';

import PosterList from './src/components/PosterList/index';
import Router from './src/navigation/Router';
import Introduction from './src/screens/Introduction/index';
import CustomListItem from './src/components/CustomList/index';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      {/* <Introduction /> */}
      <StripeProvider publishableKey="pk_test_51Ig6dfSEehnNUNdbrX7XqTBhyIWB1KXPHYxm67ydDevK4KsRDxgUFdIDuFTTTnaUTFC5t2b2RUn9hTotlvBsvc6Z00yTpqRrgx">
        <Router />
      </StripeProvider>

      {/* <PosterList /> */}
      {/* <CustomListItem /> */}
    </>
  );
};

export default App;

// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';

// import LoginScreen from './src/screens/VideoCall/LoginScreen';
// import CallScreen from './src/screens/VideoCall/CallScreen';
// import { SafeAreaView } from 'react-native-safe-area-context';

// const Stack = createStackNavigator();

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen
//           name="Login"
//           component={LoginScreen}
//           options={{ headerShown: false }}
//         />
//         <Stack.Screen
//           name="Call"
//           component={CallScreen}
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;