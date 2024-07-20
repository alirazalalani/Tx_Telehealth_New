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

const ContactScreen = () => {
  const recipient = useMemo(() => 'info@txtelehealth.com', []);
  const subject = useMemo(() => 'Enter Subject', []);
  const body = useMemo(() => 'This is an example email', []);

  const handleEmailPress = useCallback(() => {
    Linking.openURL(`mailto:${recipient}?subject=${subject}&body=${body}`);
  }, [recipient, subject, body]);

  const handlePhonePress = useCallback(() => {
    const phoneNumber = '903-213-5515';
    Linking.openURL(`tel:${phoneNumber}`);
  }, []);

  const handleFacebookPress = useCallback(() => {
    Linking.openURL('https://www.facebook.com/TXTelehealth/');
  }, []);

  return (
    <Layout>
      <Heading title={'Contact Us'} />
      <View
        style={{
          width: 250,
          height: 250,
          backgroundColor: 'red',
          borderRadius: 200,
          overflow: 'hidden',
          alignSelf: 'center',
          marginTop: verticalScale(30),
        }}>
        <Image
          source={Images.PROFILE}
          style={{width: '100%', height: '100%', overflow: 'hidden'}}
        />
      </View>
      <Text style={styles.name}>Dr Wesley Pemberton, MD</Text>
      <Text style={styles.taglineStyle}>Family Physician</Text>
      <View style={{paddingHorizontal: 20, marginTop: verticalScale(10)}}>
        {profile.map((item: any, index: any) => {
          return (
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                Linking.openURL(`https://${item.desc}`);
              }}
              style={styles.btns}>
              <Image
                source={item.img}
                style={{width: 30, height: 30}}
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
    fontSize: verticalScale(25),
    color: Colors.PRIMARY_COLOR,
    fontFamily: Fonts.POPPINS_BOLD,
  },
  taglineStyle: {
    textAlign: 'center',
    fontSize: verticalScale(15),
    color: Colors.PRIMARY_COLOR,
    fontFamily: Fonts.POPPINS_LIGHT,
  },
  btns: {
    backgroundColor: 'white',
    paddingVertical: verticalScale(13),
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
    fontSize: moderateScale(18),
  },
});
