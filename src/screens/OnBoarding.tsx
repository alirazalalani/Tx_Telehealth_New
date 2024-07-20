import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {Images} from '../constants';
import {moderateScale} from '../utils/Dim';
import {useNavigation} from '@react-navigation/native';
import Button from '../components/Button';

const OnBoarding = () => {
  const navigation: any = useNavigation();
  const continueHandler = () => {
    navigation.replace('Bottom', {
      index: 0,
    });
  };
  return (
    <View style={{flex: 1, backgroundColor: 'white', paddingHorizontal: 20}}>
      <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
      <View
        style={{
          height: 150,
          width: 250,
          alignSelf: 'center',
          //   backgroundColor: 'red',
        }}>
        <Image
          source={Images.LOGO}
          style={{width: '100%', height: '100%'}}
          resizeMode="contain"
        />
      </View>
      <View
        style={{
          width: 470,
          height: 470,
          alignSelf: 'center',
        }}>
        <Image
          source={Images.DOCTOR}
          resizeMode="contain"
          style={{width: '100%', height: '100%'}}
        />
      </View>
      <Button title={'Continue'} rightBtn={true} onPress={continueHandler} />
    </View>
  );
};

export default OnBoarding;

const styles = StyleSheet.create({});
