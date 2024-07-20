import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Layout from '../components/Layout';
import Heading from '../components/Heading';
import {horizontalScale, moderateScale, verticalScale} from '../utils/Dim';
import {Colors, Fonts, Images} from '../constants';
import {highlights} from '../utils/Constant';

const UpdateProfile = () => {
  return (
    <Layout Header={<Heading title={'Why Choose Us?'} />}>
      <View
        style={{
          paddingHorizontal: horizontalScale(20),
        }}>
        <Text
          style={{
            color: '#666666',
            fontSize: moderateScale(18),
            fontFamily: Fonts.POPPINS_REGULAR,
          }}>
          Choose TX Telehealth for exceptional service and personalized care.
          Our commitment to your well-being and trust makes us the leading
          choice for online healthcare solutions.
        </Text>
        <Text
          style={{
            color: Colors.PRIMARY_COLOR,
            fontSize: moderateScale(18),
            marginTop: verticalScale(15),
            fontFamily: Fonts.POPPINS_SEMI_BOLD,
          }}>
          Highlights
        </Text>

        {highlights.map(item => {
          return (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: verticalScale(10),
              }}>
              <Image
                source={Images.TICK}
                resizeMode="contain"
                style={{width: 25, height: 25}}
              />
              <Text
                style={{
                  color: '#333333',
                  fontFamily: Fonts.POPPINS_MEDIUM,
                  fontSize: moderateScale(15),
                  marginLeft: horizontalScale(5),
                  width: '98%',
                }}>
                {item}
              </Text>
            </View>
          );
        })}
      </View>
    </Layout>
  );
};

export default UpdateProfile;

const styles = StyleSheet.create({});
