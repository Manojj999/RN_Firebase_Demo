import React from 'react';
import {View, StyleSheet} from 'react-native';
import Colors from '../themes/Colors';
import {sizes} from '../themes/General';
import {hp, wp} from '../themes/Metrics';
const CategoryIconContainer = ({children}) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    height: hp(16),
    borderRadius: sizes.base,
    width: wp(25),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.secondary,
  },
});

export default CategoryIconContainer;
