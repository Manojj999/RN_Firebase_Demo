import React, {memo, useContext, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ScrollView,
  Platform,
  Alert,
  Image,
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
import firestore from '@react-native-firebase/firestore';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const Registration = ({navigation}) => {
  const [name, setName] = React.useState({value: 'Manoj', error: ''});
  const [Id, setId] = React.useState();
  const [email, setEmail] = React.useState({
    value: 'jasoliya@m.com',
    error: '',
  });

  const [password, setPassword] = React.useState({value: '123', error: ''});
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState();
  const [isNext, setIsNext] = useState(false);
  const [imageUrl, setImageUrl] = useState('');
  const [imageStatus, setImageStatus] = useState('');

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
    saveUsers();
    navigation.navigate('Home');
    const dataInUsers = firestore().collection('Users').doc(name.value);
    dataInUsers.set({
      Name: name.value,
      Email: email.value,
      ProfileImage: imageUrl,
    });
  };

  //   const chooseFile = () => {
  //     setImageStatus('');
  //     let options = {
  //       title: 'Select Image',
  //       customButtons: [
  //         {name: 'customOptionKey', title: 'Choose Photo from Custom Option'},
  //       ],
  //       storageOptions: {
  //         skipBackup: true, // do not backup to iCloud
  //         path: 'images', // store camera images under Pictures/images for android and Documents/images for iOS
  //       },
  //     };
  //     ImagePicker.showImagePicker(options, response => {
  //       if (response.didCancel) {
  //         console.log('User cancelled image picker', storage());
  //       } else if (response.error) {
  //         console.log('ImagePicker Error: ', response.error);
  //       } else if (response.customButton) {
  //         console.log('User tapped custom button: ', response.customButton);
  //       } else {
  //         let path = getPlatformPath(response).value;
  //         console.log('Image Path: ', path);
  //         let fileName = getFileName(response.fileName, path);
  //         console.log('File Name: ', fileName);
  //         setImagePath(path);
  //         uploadImageToStorage(path, fileName);
  //       }
  //     });
  //   };

  //   const uploadImageToStorage = (path, name) => {
  //     setLoading(true);
  //     let reference = storage().ref(name);
  //     let task = reference.putFile(path);
  //     task
  //       .then(() => {
  //         console.log('Image uploaded to the bucket!');
  //         setLoading(false);
  //         setImageStatus('Image uploaded successfully');
  //       })
  //       .catch(e => {
  //         console.log('uploading image error => ', e);
  //         setLoading(false);
  //         setImageStatus('Something went wrong');
  //       });
  //   };

  //   /**
  //    * Get platform specific value from response
  //    */
  //   const getPlatformPath = ({path, uri}) => {
  //     return Platform.select({
  //       android: {value: path},
  //       ios: {value: uri},
  //     });
  //   };

  //   const getPlatformURI = imagePath => {
  //     let imgSource = imagePath;
  //     console.log('inside getplatformURI Image Source: ', imgSource);
  //     if (isNaN(imagePath)) {
  //       imgSource = {uri: imagePath};
  //       if (Platform.OS == 'android') {
  //         imgSource.uri = 'file:///' + imgSource.uri;
  //       }
  //     }
  //     return imgSource;
  //   };

  //   let imgSource = getPlatformURI(imagePath);
  //   console.log('Above return Image Source: ', imgSource);

  const choice = () => {
    Alert.alert('User Choice', 'Choose between the two to upload image', [
      {
        text: 'Open Camera',
        onPress: () => openCamera(),
      },
      {
        text: 'Gallery',
        onPress: () => openImage(),
      },
    ]);
  };

  const postData = async () => {
    try {
      await firestore().collection('UserImg').add({
        name,
        email,
        image:
          'https://images.unsplash.com/photo-1553179459-4514c0f52f41?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHNhbXN1bmclMjBnYWxheHl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      });
      Alert.alert('image Posted');
    } catch (err) {
      Alert.alert('Something went wrong.Please try later.');
    }
  };

  const openCamera = () => {
    launchCamera({quality: 0.5}, fileobj => {
      console.log('opencamera===>', fileobj);
    });
  };

  const openImage = () => {
    launchImageLibrary(
      {quality: 0.5, selectionLimit: 1, mediaType: 'photo'},
      fileobj => {
        console.log('open Library===>', fileobj);
      },
    );
  };
  const saveUsers = async () => {
    const submit = await submitUser(Id, name.value, email.value);
    return submit;
  };
  const submitUser = async (Id, name, email) => {
    let key;
    Id ? (key = Id) : (key = database().ref().push().key);
    let dataToSave = {
      Id: key,
      Name: name,
      Email: email,
    };
    try {
      const dataRef = await database().ref('users/' + key);
      const update = await dataRef.update(dataToSave);
      return update;
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Background src={require('../../assets/Images/AuthBackground.png')}>
      <ScrollView style={styles.container}>
        <View style={styles.logoContainer}>
          <AppLogoLarge />
        </View>
        {isNext ? (
          <View style={styles.uploadImageContainer}>
            <TouchableOpacity
              style={styles.uploadImage}
              onPress={() => choice()}>
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
  uploadImageSource: {
    width: '80%',
    height: 300,
  },
  uploadImgText: {
    color: Colors.white,
    marginTop: hp('2'),
  },
});

export default memo(Registration);
