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

interface Service {
  title: string;
}
const AppointmentScreen = () => {
  const [showVIew, setShowView] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const colors = [Colors.SECONDRY_COLOR, Colors.PRIMARY_COLOR];
  const services: Service[] = useMemo(
    () => [
      {title: 'Same day appointments within minutes of signing up'},
      {title: 'The doctor calls you at the time you choose'},
      {title: 'Covered by Insurance or low cost for self-pay($49)'},
      {
        title:
          'Talk to a doctor from your house, work, vehicle, or anywhere that is convenient to you',
      },
      {title: 'We treat all ages'},
      {title: 'All of our doctors live in Texas'},
    ],
    [],
  );
  const bookNow = useCallback(() => {
    // setIsLoading(true);

    setShowView(prevState => !prevState);
    // setIsLoading(false);
  }, []);

  console.log('hello');
  return (
    <>
      {!showVIew && (
        <View style={{flex: 1, backgroundColor: 'white', padding: 10}}>
          <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />

          <View
            style={{
              height: 150,
              width: 250,
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
                fontSize: moderateScale(18),
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
          {/* <FlatList
            data={services}
            keyExtractor={item => item.title}
            renderItem={({item, index}) => {
              const colorIndex = index % colors.length; // get the color index based on the current map index
              const backgroundColor = colors[colorIndex];
              const isLeftAligned = index % 2 === 0;
              const alignSelf = isLeftAligned ? 'flex-start' : 'flex-end';
              return (
                <View
                  style={[styles.pointContainer, {backgroundColor, alignSelf}]}>
                  <Text
                    style={{
                      fontSize: verticalScale(20),
                      color: Colors.DEFAULT_WHITE,
                    }}>
                    {item.title}
                  </Text>
                </View>
              );
            }}
          /> */}
        </View>
      )}
      {showVIew && (
        <View style={{backgroundColor: Colors.DEFAULT_WHITE}}>
          <TouchableOpacity
            style={styles.DoneButtonStyle}
            onPress={() => {
              bookNow();
            }}>
            <Text style={styles.DoneTextStyle}>Done With The Appointment</Text>
          </TouchableOpacity>
          {isLoading && (
            <ActivityIndicator
              size={50}
              style={{backgroundColor: Colors.DEFAULT_WHITE}}
            />
          )}
        </View>
      )}
      {showVIew && (
        <WebView
          androidHardwareAccelerationDisabled={false}
          source={{uri: 'https://novelhealth.ai/practice/tx-telehealth-415030'}}
          style={{flex: 1, backgroundColor: Colors.DEFAULT_WHITE}}
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
