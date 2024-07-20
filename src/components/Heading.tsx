import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Colors, Fonts} from '../constants';
import {horizontalScale, moderateScale, verticalScale} from '../utils/Dim';

interface Prop {
  title: string;
}

const Heading = ({title}: Prop) => {
  return (
    <Text
      style={{
        color: Colors.PRIMARY_COLOR,
        fontSize: moderateScale(25),
        paddingHorizontal: horizontalScale(20),
        marginTop: verticalScale(20),
        fontFamily: Fonts.POPPINS_SEMI_BOLD,
      }}>
      {title}
    </Text>
  );
};

export default Heading;

const styles = StyleSheet.create({});
