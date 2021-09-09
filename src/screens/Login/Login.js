import React, {useContext, useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  TouchableOpacity,
} from 'react-native';

import CheckBox from '@react-native-community/checkbox';
import {
  AppLogoLarge,
  Facebook,
  Google,
  Twitter,
} from '../../assets/svgIcon/Icons';
import Background from '../../components/Background';
import Input from '../../components/Input/Input';

import {emailValidator} from '../../helpers/emailValidator';
import {passwordValidator} from '../../helpers/passwordValidator';

import Colors from '../../themes/Colors';
import {hp, wp} from '../../themes/Metrics';
import Button from '../../components/Button/Button';
import {sizes} from '../../themes/General';

import {AuthContext} from '../../navigation/AuthProvider';

const Login = ({navigation}) => {
  const [email, setEmail] = useState({value: 'jasoliya@m12.com', error: ''});
  const [password, setPassword] = useState({value: '12345678', error: ''});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState([]);
  const [isSelected, setSelection] = useState(false);
  const {user, emailLogin, googlelogin, fblogin} = useContext(AuthContext);

  const onLoginPressed = async () => {
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);

    if (emailError || passwordError) {
      setEmail({...email, error: emailError});
      setPassword({...password, error: passwordError});
      return;
    } else {
      emailLogin(email.value, password.value);
      navigation.navigate('Home');
    }
  };

  return (
    <Background src={require('../../assets/Images/AuthBackground.png')}>
      <ScrollView style={styles.container}>
        <View style={styles.logoContainer}>
          <AppLogoLarge />
        </View>
        <View style={styles.loginContainer}>
          <Input
            email
            defaultValue={email.value}
            onChangeText={text => setEmail({value: text, error: ''})}
            style={[styles.input]}
            error={!!email.error}
            errorText={email.error}
            label={<Text>Email</Text>}
            autoCapitalize="none"
            returnKeyType="next"
            blurOnSubmit={false}
            keyboardShouldPersistTaps
          />
          <Input
            password
            secure
            defaultValue={password.value}
            onChangeText={text => setPassword({value: text, error: ''})}
            style={[styles.input]}
            returnKeyType="done"
            label={<Text>Password</Text>}
            onSubmitEditing={() => console.warn('submit')}
            keyboardShouldPersistTaps
          />
          <View style={styles.dataOpration}>
            <View style={styles.rememberMe}>
              <CheckBox
                value={isSelected}
                onValueChange={setSelection}
                tintColors={{true: Colors.white, false: Colors.greyDark}}
                style={styles.checkbox}
              />

              <Text style={isSelected ? styles.text : styles.disabledtext}>
                Remember me
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => console.log('clicked on Forgot pass')}>
              <Text style={styles.forgotText}>Forgot Password</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Button
          style={styles.loginBtnStyle}
          onPress={onLoginPressed}
          color={Colors.red}>
          <Text style={styles.loginText}>Log in</Text>
        </Button>
        <View style={styles.SocialLoginContainer}>
          <Text style={styles.text}>or log in with</Text>
          <View style={styles.socialBtnContainer}>
            <Pressable
              onPress={() => {
                fblogin();
                setTimeout(() => {
                  navigation.navigate('Home');
                }, 1000);
              }}
              style={styles.socialBtn}>
              <Facebook />
            </Pressable>
            <Pressable
              onPress={() => {
                googlelogin();
              }}
              style={styles.socialBtn}>
              <Google />
            </Pressable>
            <Pressable style={styles.socialBtn}>
              <Twitter />
            </Pressable>
          </View>
        </View>
        <View style={styles.registrationText}>
          <Text style={styles.disabledtext}>Don’t have an account?</Text>
          <Pressable onPress={() => navigation.navigate('Registration')}>
            <Text style={styles.text}> Register</Text>
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
  rememberMe: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: wp(4),
  },
  disabledtext: {
    color: Colors.greyDark,
  },
  forgotText: {
    color: Colors.white,
    paddingStart: wp(14),
  },
  text: {
    color: Colors.white,
  },
  checkbox: {
    borderColor: Colors.white,
  },
  dataOpration: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  loginText: {
    color: Colors.white,
    fontSize: sizes.h3,
  },
  loginBtnStyle: {
    width: '80%',
    alignSelf: 'center',
    marginTop: hp(6),
  },
  SocialLoginContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  socialBtnContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  socialBtn: {
    marginHorizontal: 8,
    marginTop: 10,
  },
  registrationText: {
    display: 'flex',
    alignSelf: 'center',
    marginVertical: 10,
    flexDirection: 'row',
  },
});

export default Login;
