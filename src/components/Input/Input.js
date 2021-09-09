import React, {Component, useState} from 'react';
import {StyleSheet, View, TextInput, Text} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../../themes/Colors';
import {sizes} from '../../themes/General';

import Button from '../Button/Button';
const Input = ({
  email,
  phone,
  password,
  number,
  secure,
  refField,
  error,
  errorText,
  style,
  label,
  rightLabel,
  rightStyle,
  onRightPress,
  ...props
}) => {
  const [toggleSecure, setToggleSecure] = useState(false);

  const renderLabel = () => {
    return (
      <View>
        {label ? (
          <Text style={{color: '#ffffff', marginHorizontal: 20}}>{label}</Text>
        ) : null}
      </View>
    );
  };

  const renderToggle = () => {
    if (!secure) return null;

    return (
      <Button
        style={styles.toggle}
        onPress={() => setToggleSecure(!toggleSecure)}>
        {rightLabel ? (
          rightLabel
        ) : (
          <Icon
            color={Colors.greyDark}
            size={sizes.font * 1.55}
            name={toggleSecure ? 'md-eye' : 'md-eye-off'}
          />
        )}
      </Button>
    );
  };

  const renderRight = () => {
    if (!rightLabel) return null;

    return (
      <Button
        style={[styles.toggle, rightStyle]}
        onPress={() => onRightPress && onRightPress()}>
        {rightLabel}
      </Button>
    );
  };
  //   getInnerRef = () => this.ref;

  const isSecure = toggleSecure ? false : secure;

  const inputStyles = [
    styles.input,
    error && {borderColor: Colors.blue},
    style,
  ];

  const inputType = email
    ? 'email-address'
    : number
    ? 'numeric'
    : phone
    ? 'phone-pad'
    : 'default';

  return (
    <View style={styles.container}>
      {renderLabel()}
      <TextInput
        // ref={r => (ref = r)}
        style={inputStyles}
        secureTextEntry={isSecure}
        autoComplete="off"
        autoCapitalize="none"
        autoCorrect={false}
        keyboardType={inputType}
        {...props}
      />
      {errorText ? <Text style={styles.error}>{errorText}</Text> : null}
      {renderToggle()}
      {renderRight()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 12,
  },
  input: {
    // borderWidth: StyleSheet.hairlineWidth,
    // borderColor: Colors.greyLight,
    borderBottomColor: Colors.greyLight,
    borderBottomWidth: 1.5,
    fontSize: sizes.font,
    fontWeight: '500',
    color: Colors.white,
    height: sizes.base * 2.6,
    marginHorizontal: 20,
  },
  toggle: {
    position: 'absolute',
    alignItems: 'flex-end',
    width: sizes.base * 2,
    backgroundColor: 'transparent',
    height: sizes.base * 2,
    top: sizes.base * 1.2,
    right: sizes.base * 1.5,
  },
  error: {
    fontSize: sizes.base * 0.8,
    color: Colors.error,
    paddingTop: 5,
    paddingLeft: 20,
  },
});
export default Input;
