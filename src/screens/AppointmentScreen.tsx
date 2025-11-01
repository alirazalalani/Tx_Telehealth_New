import {
  ActivityIndicator,
  FlatList,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {memo, useCallback, useMemo, useState} from 'react';
import {WebView} from 'react-native-webview';
import {Colors, Fonts, Images} from '../constants';
import {horizontalScale, moderateScale, verticalScale} from '../utils/Dim';
import {Image} from 'react-native';
import Button from '../components/Button';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

interface Service {
  title: string;
}
const AppointmentScreen = () => {
  const [showVIew, setShowView] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const insets = useSafeAreaInsets();
  // const colors = [Colors.SECONDRY_COLOR, Colors.PRIMARY_COLOR];
  // const services: Service[] = useMemo(
  //   () => [
  //     {title: 'Same day appointments within minutes of signing up'},
  //     {title: 'The doctor calls you at the time you choose'},
  //     {title: 'Covered by Insurance or low cost for self-pay($49)'},
  //     {
  //       title:
  //         'Talk to a doctor from your house, work, vehicle, or anywhere that is convenient to you',
  //     },
  //     {title: 'We treat all ages'},
  //     {title: 'All of our doctors live in Texas'},
  //   ],
  //   [],
  // );

  const bookNow = useCallback(() => {
    // setIsLoading(true);

    setShowView(prevState => !prevState);
    // setIsLoading(false);
  }, []);

  console.log('hello');
  return (
    <>
      {!showVIew && (
        <View
          style={{
            flex: 1,
            backgroundColor: 'white',
            padding: 10,
            paddingTop: insets.top,
          }}>
          <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />

          <View
            style={{
              height: responsiveHeight(18),
              width: responsiveWidth(70),
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
              flex: 1,
              justifyContent: 'center',
              paddingHorizontal: 10,
            }}>
            <Button title={'Book Now'} onPress={bookNow} />

            <Text
              style={{
                color: Colors.ICON_GRAY,
                fontSize: responsiveFontSize(2),
                marginTop: verticalScale(10),
                textAlign: 'center',
                paddingHorizontal: horizontalScale(25),
                fontFamily: Fonts.POPPINS_MEDIUM,
              }}>
              Online Healthcare{' '}
              <Text style={{color: Colors.PRIMARY_COLOR}}>
                Only a Click Away!
              </Text>
            </Text>
          </View>
        </View>
      )}
      {showVIew && (
        <View
          style={{
            backgroundColor: Colors.DEFAULT_WHITE,
            paddingTop: insets.top,
          }}>
          <TouchableOpacity
            style={styles.DoneButtonStyle}
            onPress={() => {
              bookNow();
            }}>
            <Text style={styles.DoneTextStyle}>Done With The Appointment</Text>
          </TouchableOpacity>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            {isLoading && (
              <ActivityIndicator
                size={50}
                style={{backgroundColor: Colors.PRIMARY_COLOR}}
              />
            )}
          </View>
        </View>
      )}
      {showVIew && (
        <WebView
          source={{
            uri: 'https://app.leaphealth.ai/practice/tx-telehealth-415030',
          }}
          mixedContentMode="always" // allow HTTPS page to load HTTP subresources
          javaScriptEnabled
          domStorageEnabled
          onError={e => console.log('WebView error:', e.nativeEvent)}
          onHttpError={e => console.log('HTTP error:', e.nativeEvent)}
          onNavigationStateChange={event => {
            setIsLoading(event?.loading);
            console.log(event, 'asdsad');
          }}
        />
      )}
    </>
  );
};

export default AppointmentScreen;

const styles = StyleSheet.create({
  pointContainer: {
    backgroundColor: 'red',
    marginVertical: verticalScale(10),
    width: '70%',
    padding: 5,
    borderRadius: 10,
    flex: 1,
  },
  chooseusStyle: {
    textAlign: 'center',
    fontSize: verticalScale(25),
    fontFamily: Fonts.POPPINS_BOLD,
    color: Colors.DEFAULT_BLACK,
  },
  bookNowStyle: {
    color: Colors.DEFAULT_WHITE,
    fontSize: verticalScale(20),
    fontFamily: Fonts.POPPINS_SEMI_BOLD,
    textAlign: 'center',
  },
  DoneButtonStyle: {
    backgroundColor: Colors.SECONDRY_COLOR,
    marginVertical: verticalScale(5),
    padding: 10,
  },
  DoneTextStyle: {
    textAlign: 'center',
    color: Colors.DEFAULT_WHITE,
    fontSize: verticalScale(15),
    fontFamily: Fonts.POPPINS_MEDIUM,
  },
});
