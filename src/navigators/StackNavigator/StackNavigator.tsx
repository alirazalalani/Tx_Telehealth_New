import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {StackNavigatorParamList} from '../types';
import BottomNavigator from '../BottomTabNavigator/BottomNavigator';

import {SplashScreen} from '../../screens';
import OnBoarding from '../../screens/OnBoarding';

const Stack = createNativeStackNavigator<StackNavigatorParamList>();

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="OnBoarding"
          component={OnBoarding}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Bottom"
          component={BottomNavigator}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
