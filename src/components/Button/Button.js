import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '../../themes/Colors';
import {sizes} from '../../themes/General';

const Button = ({
  style,
  opacity,
  gradient,
  color,
  startColor,
  endColor,
  end,
  start,
  locations,
  shadow,
  children,
  ...props
}) => {
  const buttonStyles = [
    styles.button,
    shadow && styles.shadow,
    color && styles[color],
    color && !styles[color] && {backgroundColor: color},
    style,
  ];

  if (gradient) {
    return (
      <TouchableOpacity style={buttonStyles} activeOpacity={opacity} {...props}>
        <LinearGradient
          start={start}
          end={end}
          locations={locations}
          style={buttonStyles}
          colors={[startColor, endColor]}>
          {children}
        </LinearGradient>
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity
      style={buttonStyles}
      activeOpacity={opacity || 0.8}
      {...props}>
      {children}
    </TouchableOpacity>
  );
};

Button.defaultProps = {
  startColor: Colors.darkPrimary,
  endColor: Colors.darkgrey,
  start: {x: 0, y: 0},
  end: {x: 1, y: 1},
  locations: [0.1, 0.9],
  opacity: 0.8,
  color: Colors.white,
};

export default Button;

const styles = StyleSheet.create({
  button: {
    borderRadius: sizes.radius * 3,
    height: sizes.base * 3.2,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: sizes.padding / 3,
  },
  shadow: {
    shadowColor: Colors.black,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    elevation: 2,
    shadowRadius: 10,
  },
  accent: {backgroundColor: Colors.primary},
  primary: {backgroundColor: Colors.primary},
  secondary: {backgroundColor: Colors.primary},

  black: {backgroundColor: Colors.black},
  white: {backgroundColor: Colors.white},
  gray: {backgroundColor: Colors.grey},
});
