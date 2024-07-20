import {StatusBar, StyleSheet, Text, View, Image, FlatList} from 'react-native';
import React, {useMemo} from 'react';
import {Colors, Fonts} from '../constants';
import {horizontalScale, verticalScale} from '../utils/Dim';
import Layout from '../components/Layout';
import Heading from '../components/Heading';
import {diseases} from '../utils/Constant';

const HomeScreen = () => {
  return (
    <Layout Header={<Heading title={'Conditions We Treat'} />}>
      <FlatList
        data={diseases}
        keyExtractor={item => item.id}
        contentContainerStyle={{
          marginTop: verticalScale(10),
        }}
        renderItem={({item}) => {
          return (
            <View>
              <Text style={styles.diseaseNameStyle}>{item.diseaseName}</Text>
              <FlatList
                data={item.diseaseTypes}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                  paddingLeft: horizontalScale(20),
                }}
                renderItem={({item}) => {
                  return (
                    <View style={styles.boxStyle}>
                      <Image
                        resizeMode="contain"
                        source={item.image}
                        style={{
                          width: horizontalScale(60),
                          height: verticalScale(60),
                          alignSelf: 'center',
                        }}
                      />
                      <Text style={styles.diseaseStyle}>{item.name}</Text>
                    </View>
                  );
                }}
              />
            </View>
          );
        }}
      />
    </Layout>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.DEFAULT_WHITE,
  },
  row: {
    justifyContent: 'space-around',
  },
  boxStyle: {
    backgroundColor: 'white',
    height: verticalScale(130),
    marginVertical: verticalScale(15),
    marginHorizontal: horizontalScale(2),

    borderRadius: 10,
    padding: 20,
    width: horizontalScale(120),
    elevation: 1,
  },
  textStyle: {
    // fontFamily: Fonts.POPPINS_BOLD,
    color: Colors.PRIMARY_COLOR,
    fontSize: verticalScale(25),
    textAlign: 'left',
    marginTop: verticalScale(12),
    fontWeight: '600',
  },
  diseaseStyle: {
    fontSize: verticalScale(15),
    color: '#333333',
    fontFamily: Fonts.POPPINS_SEMI_BOLD,
    textAlign: 'center',
  },
  diseaseNameStyle: {
    fontSize: verticalScale(22),
    fontFamily: Fonts.POPPINS_MEDIUM,
    marginTop: verticalScale(10),
    marginHorizontal: horizontalScale(5),
    color: '#333333',
    marginLeft: horizontalScale(20),
  },
});
