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
import {horizontalScale, moderateScale, verticalScale} from '../utils/Dim';
import {useNavigation} from '@react-navigation/native';
import Button from '../components/Button';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

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
          height: responsiveHeight(20),
          width: responsiveWidth(60),
          alignSelf: 'center',
        }}>
        <Image
          source={Images.LOGO}
          style={{width: '100%', height: '100%'}}
          resizeMode="contain"
        />
      </View>
      <View
        style={{
          width: responsiveWidth(75),
          height: responsiveHeight(50),
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
