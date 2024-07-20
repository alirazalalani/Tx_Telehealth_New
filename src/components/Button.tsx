import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {moderateScale} from '../utils/Dim';
import {Fonts, Images} from '../constants';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const Button = ({
  title,
  rightBtn = false,
  btnStyle,
  textStyle,
  onPress,
}: any) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={[
        {
          backgroundColor: '#007659',
          paddingVertical: responsiveHeight(1.5),
          marginTop: responsiveHeight(10),
          borderRadius: 10,
          paddingHorizontal: 20,
          justifyContent: 'center',
        },
        btnStyle,
      ]}>
      <Text
        style={[
          {
            color: 'white',
            fontSize: moderateScale(20),
            textAlign: 'center',
            fontFamily: Fonts.POPPINS_SEMI_BOLD,
          },
          textStyle,
        ]}>
        {title}
      </Text>
      {rightBtn && (
        <View
          style={{
            backgroundColor: 'white',
            width: 35,
            height: 35,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 8,
            position: 'absolute',
            right: responsiveWidth(5),
          }}>
          <Image
            source={Images.ARROWRight}
            style={{width: 22, height: 22}}
            resizeMode="contain"
          />
        </View>
      )}
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({});
