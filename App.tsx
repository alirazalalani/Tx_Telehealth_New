import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import StackNavigator from './src/navigators/StackNavigator/StackNavigator';
import {SafeAreaProvider} from 'react-native-safe-area-context';
// import SplashScreen from 'react-native-splash-screen';

const App = () => {
  // useEffect(() => {
  //   setTimeout(() => {
  //     SplashScreen.hide();
  //   }, 3000);
  // }, []);
  return (
    <SafeAreaProvider>
      <StackNavigator />
    </SafeAreaProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
