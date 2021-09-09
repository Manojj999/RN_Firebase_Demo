import React, {memo, useContext, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import {AppLogoLarge, Camera} from '../../assets/svgIcon/Icons';
import Background from '../../components/Background';
import Input from '../../components/Input/Input';

import Colors from '../../themes/Colors';
import {hp, wp} from '../../themes/Metrics';
import Button from '../../components/Button/Button';
import {sizes} from '../../themes/General';

import {emailValidator} from '../../helpers/emailValidator';
import {passwordValidator} from '../../helpers/passwordValidator';
import {nameValidator} from '../../helpers/nameValidator';
import {AuthContext} from '../../navigation/AuthProvider';

const Registration = ({navigation}) => {
  const [name, setName] = React.useState({value: 'Manoj', error: ''});
  const [email, setEmail] = React.useState({
    value: 'jasoliya@m.com',
    error: '',
  });
  const [password, setPassword] = React.useState({value: '123', error: ''});
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState();
  const [isNext, setIsNext] = useState(false);
  const {register} = useContext(AuthContext);

  const onNextPressed = () => {
    const nameError = nameValidator(name.value);
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);
    if (emailError || passwordError || nameError) {
      setName({...name, error: nameError});
      setEmail({...email, error: emailError});
      setPassword({...password, error: passwordError});
      return;
    } else {
      setIsNext(true);
    }
  };
  const onRegistrationPressed = async () => {
    register(name.value, email.value, password.value);
    navigation.navigate('Home');
  };

  return (
    <Background src={require('../../assets/Images/AuthBackground.png')}>
      <ScrollView style={styles.container}>
        <View style={styles.logoContainer}>
          <AppLogoLarge />
        </View>
        {isNext ? (
          <View style={styles.uploadImageContainer}>
            <TouchableOpacity style={styles.uploadImage}>
              <Camera />
              <Text style={styles.uploadImgText}>Upload Photo</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.loginContainer}>
            <Input
              name
              defaultValue={name.value}
              onChangeText={text => setName({value: text, error: ''})}
              style={[styles.input]}
              label={<Text>Name</Text>}
              returnKeyType="next"
              blurOnSubmit={false}
              error={!!name.error}
              errorText={name.error}
              keyboardShouldPersistTaps
            />
            <Input
              email
              defaultValue={email.value}
              onChangeText={text => setEmail({value: text, error: ''})}
              style={[styles.input]}
              label={<Text>Email</Text>}
              error={!!email.error}
              errorText={email.error}
              autoCapitalize="none"
              autoCompleteType="email"
              returnKeyType="next"
              blurOnSubmit={false}
              textContentType="emailAddress"
              keyboardShouldPersistTaps
            />
            <Input
              password
              secure
              defaultValue={password.value}
              onChangeText={text => setPassword({value: text, error: ''})}
              style={[styles.input]}
              returnKeyType="next"
              label={<Text>Password</Text>}
              error={!!password.error}
              errorText={password.error}
              onSubmitEditing={() => console.warn('submit')}
              keyboardShouldPersistTaps
            />
          </View>
        )}
        <View
          style={[styles.dotContainer, isNext ? {marginTop: hp('5')} : null]}>
          <View
            style={[styles.dotStyle, isNext ? null : styles.activeDot]}></View>
          <View
            style={[styles.dotStyle, isNext ? styles.activeDot : null]}></View>
        </View>
        <Button
          onPress={() => {
            if (isNext) {
              onRegistrationPressed();
            } else {
              onNextPressed();
              setIsNext(true);
            }
          }}
          style={styles.loginBtnStyle}
          color={Colors.red}>
          <Text style={styles.loginText}>
            {isNext ? 'Registration' : 'Next'}
          </Text>
        </Button>
        <View style={styles.registrationText}>
          <Text style={styles.disabledtext}>Have an account?</Text>
          <Pressable onPress={() => navigation.navigate('Login')}>
            <Text style={styles.text}> Login</Text>
          </Pressable>
        </View>
      </ScrollView>
    </Background>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logoContainer: {
    top: hp(5),
    marginHorizontal: wp(25),
  },

  loginContainer: {
    marginTop: hp(10),
  },

  disabledtext: {
    color: Colors.greyDark,
  },

  text: {
    color: Colors.white,
  },

  loginText: {
    color: Colors.white,
    fontSize: sizes.h3,
  },
  loginBtnStyle: {
    width: '80%',
    alignSelf: 'center',
    marginTop: 20,
  },

  registrationText: {
    display: 'flex',
    alignSelf: 'center',
    marginVertical: 10,
    flexDirection: 'row',
  },
  dotContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: hp('2'),
  },
  dotStyle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 2,
    backgroundColor: Colors.red,
    opacity: 0.3,
  },
  activeDot: {
    opacity: 1,
  },
  uploadImageContainer: {
    marginTop: hp('10'),
  },
  uploadImage: {
    width: wp('90'),
    alignSelf: 'center',
    borderRadius: wp('10'),
    height: hp('30'),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.secondary,
  },
  uploadImgText: {
    color: Colors.white,
    marginTop: hp('2'),
  },
});

export default memo(Registration);
