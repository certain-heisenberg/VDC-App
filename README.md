# VDC-App

Virtual Dental Clinic

Make sure react-native and package-manager 'npx' is installed on your system.

To see the app running in your mobile, follow the below steps:
```
git clone https://github.com/kineticdud/VDC-App.git
cd VDC-App
npx react-native start
```
You can see the App running in your physical device or in a virtual emulator. However,
using physical device is easier and faster to get started.

Follow the below steps to run App on physical device:

1) Enable USB Debugging in your physical device.
2) Plug in your device via USB to your development machine.
3) Run '```adb devices```' to check if device is connected to your machine or not.
4) If device shows up on doing previous step, run '```npx react-native run-android```' and wait for
   3-4 mins to get the App installed on your device.
   
Voilà now you have the App running on your device.

If any problem occurs during installation of App, feel free to check [here](https://reactnative.dev/docs/running-on-device).

If you want to make changes to this App using your development server, you need
to connect your device with development server. Follow the below steps for the same:

1) Enable USB Debugging in your physical device.
2) Plug in your device via USB to your development machine.
3) Run '```adb -s <device name> reverse tcp:8081 tcp:8081```'

Note: 'device name' can be find by running '```adb devices```'
