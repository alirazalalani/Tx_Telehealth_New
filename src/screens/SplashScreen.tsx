import {StatusBar, StyleSheet, View, ImageBackground} from 'react-native';
import React, {memo, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Colors} from '../constants';

const SplashScreen = () => {
  const navigation: any = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Bottom');
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={Colors.PRIMARY_COLOR}
        barStyle={'light-content'}
      />
      <ImageBackground
        source={require('../assets/images/check1.png')}
        style={styles.backgroundImage}></ImageBackground>
    </View>
  );
};

export default memo(SplashScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoImage: {
    width: '80%',
    height: 200,
  },
});
