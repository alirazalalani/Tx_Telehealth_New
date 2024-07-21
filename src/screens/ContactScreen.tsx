import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  Linking,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useMemo, useCallback} from 'react';
import {Colors, Fonts, Images} from '../constants';
// import {Avatar} from '@rneui/themed';

import {horizontalScale, moderateScale, verticalScale} from '../utils/Dim';
import Layout from '../components/Layout';
import Heading from '../components/Heading';
import {profile} from '../utils/Constant';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const ContactScreen = () => {
  return (
    <Layout>
      <Heading title={'Contact Us'} />
      <View
        style={{
          width: responsiveWidth(50),
          height: responsiveWidth(50),
          backgroundColor: 'red',
          borderRadius: 200,
          overflow: 'hidden',
          alignSelf: 'center',
          marginTop: responsiveHeight(2),
        }}>
        <Image
          source={Images.PROFILE}
          style={{width: '100%', height: '100%', overflow: 'hidden'}}
        />
      </View>
      <Text style={styles.name}>Dr. Wesley Pemberton, MD</Text>
      <Text style={styles.taglineStyle}>Family Physician</Text>
      <View style={{paddingHorizontal: 20, marginTop: verticalScale(10)}}>
        {profile.map((item: any, index: any) => {
          return (
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                // console.log(profile[index]);
                Linking.openURL(item.url);
              }}
              style={styles.btns}>
              <Image
                source={item.img}
                style={{
                  width: responsiveWidth(7),
                  height: responsiveWidth(7),
                }}
                resizeMode="contain"
              />
              <Text style={styles.desc}>{item.desc}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </Layout>
  );
};
export default ContactScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.DEFAULT_WHITE,

    // alignItems: 'center',
  },
  name: {
    textAlign: 'center',
    fontSize: responsiveFontSize(2.5),
    color: Colors.PRIMARY_COLOR,
    fontFamily: Fonts.POPPINS_SEMI_BOLD,
  },
  taglineStyle: {
    textAlign: 'center',
    fontSize: verticalScale(15),
    color: Colors.PRIMARY_COLOR,
    fontFamily: Fonts.POPPINS_LIGHT,
  },
  btns: {
    backgroundColor: 'white',
    paddingVertical: responsiveHeight(1.5),
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 1,
    marginVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 15,
  },
  desc: {
    color: '#333333',
    marginLeft: horizontalScale(10),
    fontSize: responsiveFontSize(1.8),
  },
});
