# VDC-App

## Virtual Dental Clinic

### Below tutorial is for setting up this repository on your system and install the native App initialized using React Native CLI on your device for further development.
### Before you proceed further, please check [here](https://reactnative.dev/docs/environment-setup) to install required dependencies for running a React Native project in your system.

To see the app running in your mobile for development purpose, follow the below steps:

1) Open a terminal/CLI window.
2) Copy and paste below commands in your terminal one by one and let the commands to finish. 
   ```npm install ``` might take 2-5 minutes to finish.
```
git clone https://github.com/kineticdud/VDC-App.git
cd VDC-App
npm install
```
3) If you want to see the app running on an virtual device(emulator), you first need to install Android Studio and set up emulator device. See [here](https://reactnative.dev/docs/environment-setup) if you haven't done so already. <br /> But, if you want to see the app running on a physical device(smartphone). See [here](https://reactnative.dev/docs/running-on-device) for further setup.
4) If you want to continue using AWS Amplify used in this repository, you need to make an AWS Account and setup Amplify CLI. See [here](https://docs.amplify.aws/start/getting-started/installation/q/integration/react-native#option-2-follow-the-instructions) for Amplify CLI setup.
5) Initialize Amplify using ```amplify init```, then push to AWS cloud using ```amplify push```.
6) Start the development server using ```npx react-native start```.
7) Finally run ```npx react-native run-android``` or ```npx react-native run-ios``` based on the Operating System of mobile device and wait for build to finish.

Voilà now you have the App installed and running on your device.

If you want to make changes to this App using your development server, you need
to connect your device with development server. See ```Connecting to the development server``` section in [here](https://reactnative.dev/docs/running-on-device)
