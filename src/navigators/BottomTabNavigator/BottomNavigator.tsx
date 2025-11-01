import React, {useState, useEffect} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomNavigatorParamList} from '../types';
import {
  HomeScreen,
  ContactScreen,
  AppointmentScreen,
  UpdateProfile,
} from '../../screens';
import {horizontalScale, moderateScale, verticalScale} from '../../utils/Dim';
import {Colors, Fonts, Images} from '../../constants';
import {View, Text, StyleSheet, Image} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const Tab = createBottomTabNavigator<BottomNavigatorParamList>();
const BottomNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          elevation: 50,
          height: verticalScale(70),
          shadowOffset: {
            width: 0,
            height: 20,
          },
          shadowOpacity: 0.5,
          shadowRadius: 50,
          alignItems: 'center',
          justifyContent: 'center',
        },
      }}>
      <Tab.Screen
        name="Appointment"
        component={AppointmentScreen}
        options={{
          tabBarHideOnKeyboard: true,
          headerTintColor: 'white',

          title: 'Appointment',
          headerStyle: {
            elevation: 0,
            shadowOffset: {
              width: 0,
              height: 0,
            },
            shadowOpacity: 0,
            shadowRadius: 0,
            backgroundColor: Colors.PRIMARY_COLOR,
          },
          tabBarIcon: ({focused}: any) => {
            return (
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  source={Images.APPOINTMENT}
                  resizeMode="contain"
                  style={{
                    width: focused ? verticalScale(45) : verticalScale(40),
                    height: focused ? verticalScale(42) : verticalScale(40),
                    tintColor: focused
                      ? Colors.PRIMARY_COLOR
                      : Colors.ICON_GRAY,
                  }}
                />
                <Text
                  style={{
                    color: focused ? Colors.PRIMARY_COLOR : Colors.ICON_GRAY,
                    fontSize: verticalScale(13),
                    marginLeft: horizontalScale(3),
                    fontFamily: Fonts.POPPINS_MEDIUM,
                  }}>
                  Book Now
                </Text>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="UpdateProfile"
        component={UpdateProfile}
        options={{
          tabBarHideOnKeyboard: true,
          headerTintColor: 'white',

          headerStyle: {
            backgroundColor: Colors.PRIMARY_COLOR,
            elevation: 0,
          },

          headerTitleStyle: {
            paddingLeft: horizontalScale(5),
          },

          tabBarIcon: ({focused}: any) => {
            return (
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  source={Images.WHY}
                  resizeMode="contain"
                  style={{
                    width: focused ? verticalScale(33) : verticalScale(27),
                    height: focused ? verticalScale(40) : verticalScale(40),
                    tintColor: focused
                      ? Colors.PRIMARY_COLOR
                      : Colors.ICON_GRAY,
                  }}
                />
                <Text
                  style={{
                    color: focused ? Colors.PRIMARY_COLOR : Colors.ICON_GRAY,
                    fontSize: verticalScale(13),
                    marginLeft: horizontalScale(3),
                    fontFamily: Fonts.POPPINS_MEDIUM,
                  }}>
                  Why Us
                </Text>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Services"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}: any) => {
            return (
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  source={Images.SERVICE}
                  resizeMode="contain"
                  style={{
                    width: focused ? verticalScale(35) : verticalScale(30),
                    height: focused ? verticalScale(40) : verticalScale(40),
                    tintColor: focused
                      ? Colors.PRIMARY_COLOR
                      : Colors.ICON_GRAY,
                  }}
                />
                <Text
                  style={{
                    color: focused ? Colors.PRIMARY_COLOR : Colors.ICON_GRAY,
                    fontSize: verticalScale(13),
                    marginLeft: horizontalScale(3),
                    fontFamily: Fonts.POPPINS_MEDIUM,
                  }}>
                  Services
                </Text>
              </View>
            );
          },
          headerStyle: {
            backgroundColor: Colors.PRIMARY_COLOR,
          },
          headerTintColor: 'white',
        }}
      />
      <Tab.Screen
        name="Contact"
        component={ContactScreen}
        options={{
          tabBarHideOnKeyboard: true,
          headerTintColor: 'white',

          headerStyle: {
            backgroundColor: Colors.PRIMARY_COLOR,
            elevation: 0,
          },

          headerTitleStyle: {
            paddingLeft: horizontalScale(5),
          },

          tabBarIcon: ({focused}: any) => {
            return (
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  source={Images.CONTACT}
                  resizeMode="contain"
                  style={{
                    width: focused ? verticalScale(33) : verticalScale(30),
                    height: focused ? verticalScale(40) : verticalScale(40),
                    tintColor: focused
                      ? Colors.PRIMARY_COLOR
                      : Colors.ICON_GRAY,
                  }}
                />
                <Text
                  style={{
                    color: focused ? Colors.PRIMARY_COLOR : Colors.ICON_GRAY,
                    fontSize: verticalScale(13),
                    marginLeft: horizontalScale(3),
                    fontFamily: Fonts.POPPINS_MEDIUM,
                  }}>
                  Contact
                </Text>
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigator;

const styles = StyleSheet.create({
  header: {
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    // alignItems: 'center',
    // marginRight: horizontalScale(20),
  },
});
