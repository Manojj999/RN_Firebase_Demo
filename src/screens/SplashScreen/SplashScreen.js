import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {AppLogoLarge} from '../../assets/svgIcon/Icons';
import Background from '../../components/Background';
import {Colors} from '../../themes';
import {fonts, sizes} from '../../themes/General';

const SplashScreen = ({navigation}) => {
  return (
    <Background src={require('../../assets/Images/SplashBg.png')}>
      <View style={styles.container}>
        <AppLogoLarge />
        <Text style={styles.text}>Watch and find movies that</Text>
        <Text style={styles.text}>bring your mood back</Text>
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  text: {
    fontSize: sizes.base,
    fontFamily: fonts.Medium.fontFamily,
    color: '#ffffff',
  },
});

export default SplashScreen;
