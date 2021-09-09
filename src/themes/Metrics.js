import {Dimensions, Platform} from 'react-native';
import {isIphoneX} from 'react-native-iphone-x-helper';
const {width: viewportWidth, height: viewportHeight} = Dimensions.get('window');

export const isiPAD = viewportHeight / viewportWidth < 1.6;
export const isTablet = viewportHeight / viewportWidth < 1.6;
export const isX = isIphoneX();
const scale = viewportWidth / 375;
export const isIOS = Platform.OS === 'ios';
export const isAndroid = Platform.OS === 'android';
export function wp(percentage) {
  const value = (percentage * viewportWidth) / 100;
  return Math.round(value);
}
export function hp(percentage) {
  const value = (percentage * viewportHeight) / 100;
  return Math.round(value);
}
export function normalize(size) {
  const newSize = size * scale;
  if (Platform.OS === 'ios') {
    if (isiPAD) {
      return Math.round(newSize) - wp(1);
    } else {
      return Math.round(newSize);
    }
  } else {
    if (isTablet) {
      return Math.round(newSize) - wp(1);
    } else {
      return Math.round(newSize);
    }
  }
}

//Old
// export const screenWidth = Dimensions.get('window').width;
// export const screenHeight = Dimensions.get('window').height;
// const scale = screenWidth / 320;

// export const widthPercentageToDP = widthPercent => {
//   const elemWidth = parseFloat(widthPercent);
//   return PixelRatio.roundToNearestPixel((screenWidth * elemWidth) / 100);
// };

// export const heightPercentageToDP = heightPercent => {
//   const elemHeight = parseFloat(heightPercent);
//   return PixelRatio.roundToNearestPixel((screenHeight * elemHeight) / 100);
// };

// export const normalize = size => {
//   const newSize = size * scale;
//   return Math.round(PixelRatio.roundToNearestPixel(newSize));
// };

export default {
  wp,
  hp,
  normalize,
};
