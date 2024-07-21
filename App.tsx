import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import StackNavigator from './src/navigators/StackNavigator/StackNavigator';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 3000);
  }, []);
  return <StackNavigator />;
};

export default App;

const styles = StyleSheet.create({});
