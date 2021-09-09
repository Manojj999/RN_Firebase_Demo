import React from 'react';
import {StyleSheet, ImageBackground} from 'react-native';
import {hp, wp} from '../themes/Metrics';

export default function Background({src, children}) {
  return (
    <ImageBackground
      style={styles.imgBackground}
      resizeMode="cover"
      source={src}>
      {children}
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  imgBackground: {
    width: '100%',
    height: '100%',

    // flex: 1,
  },
});
