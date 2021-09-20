import React, {memo, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ScrollView,
  Alert,
  Image,
  Platform,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Camera} from '../../assets/svgIcon/Icons';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import Colors from '../../themes/Colors';
import {fonts, sizes} from '../../themes/General';
import {hp, wp} from '../../themes/Metrics';
import storage from '@react-native-firebase/storage';
import database from '@react-native-firebase/database';
import firestore from '@react-native-firebase/firestore';

import ImagePicker, {
  launchCamera,
  launchImageLibrary,
} from 'react-native-image-picker';
const AddNewMovie = ({navigation}) => {
  const [movie, setMovie] = React.useState({
    title: '',
    year: '',
    posterURL: '',
    rating: '',
    genre: '',
    cast: '',
  });

  const [movieIdName, setMovieIdName] = React.useState('');
  const [imagePath, setImagePath] = React.useState(
    require('../../assets/Images/SplashBg.png'),
  );
  const [imageStatus, setImageStatus] = React.useState('');
  const [imageUrl, setImageUrl] = React.useState('');
  const [firebaseImageUrl, setFirebaseImageUrl] = React.useState('');
  const [isImageVisible, setIsImageVisible] = React.useState(false);
  const [imageName, setImageName] = React.useState('');

  const choice = () => {
    Alert.alert(
      'User Choice',
      'Choose between the two to upload image',
      [
        {
          text: 'Open Camera',
          onPress: () => openCamera(),
        },
        {
          text: 'Gallery',
          onPress: () => openImage(),
        },
      ],
      {cancelable: true},
    );
  };

  const getFileName = (name, path) => {
    if (name != null) {
      return name;
    }

    if (Platform.OS === 'ios') {
      path = '~' + path.substring(path.indexOf('/Documents'));
    }
    return path.split('/').pop();
  };

  const openCamera = () => {
    launchCamera({quality: 0.5}, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker', storage());
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        let path = response.assets[0].uri;
        setImageUrl(path);
        setIsImageVisible(true);
        console.log('Image Path: ', path);
        let fileName = getFileName(response.assets[0].fileName, path);
        console.log('File Name: ', fileName);
        setImageName(fileName);
      }

      console.log('opencamera===>', response);
    });
  };

  const openImage = () => {
    launchImageLibrary(
      {quality: 0.5, selectionLimit: 1, mediaType: 'photo'},
      response => {
        if (response.didCancel) {
          console.log('User cancelled image picker', storage());
        } else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
        } else if (response.customButton) {
          console.log('User tapped custom button: ', response.customButton);
        } else {
          let path = response.assets[0].uri;
          setImageUrl(path);
          setIsImageVisible(true);
          console.log('Image Path: ', path);
          let fileName = getFileName(response.assets[0].fileName, path);
          console.log('File Name: ', fileName);
          setImageName(fileName);
        }

        console.log('open Library===>', response);
      },
    );
  };
  const storeImgInFireStore = () => {
    console.log('storeImgInFireStore= urlllllllllll==>', imageUrl);
    console.log('Moviiiiii ID=====>', movieIdName);

    imageUrl && imageName
      ? uploadImageToStorage(imageUrl, imageName)
      : firestore()
          .collection('movies')
          .doc(`${movieIdName}`)
          .update({
            title: movie.title,
            genre: movie.genre,
            year: movie.year,
            rating: movie.rating,
            //posterImageUrl: imageUrl,
            movieId: movieIdName,
          })
          .then(() => {
            navigation.navigate('AdminHome');
          })
          .catch(error => {
            console.log('storeImgInFireStore===>', error);
          });
  };

  const uploadImageToStorage = (path, name) => {
    console.log('uploadImageToStorage===>', path, name);
    //setLoading(true);
    let reference = storage().ref(name);
    let task = reference.putFile(path);
    task
      .then(snap => {
        console.log('Image uploaded to the bucket!');
        storage()
          .ref(snap.metadata.fullPath)
          .getDownloadURL()
          .then(url => {
            console.log('Image URL: ', url);
            //setImageUrl(url);
            setFirebaseImageUrl(url);
            setImageUrl('');
            setIsImageVisible(true);
            //setImagePath(url);
            setImageStatus('Image Uploaded');
            console.log('firebse==', firebaseImageUrl);
            firestore()
              .collection('movies')
              .doc(`${movieIdName}`)
              .set({
                title: movie.title,
                genre: movie.genre,
                year: movie.year,
                rating: movie.rating,
                posterImageUrl: url,
                movieId: movieIdName,
              })
              .then(() => {
                setImageUrl('');
                console.log('Image uuuuupppppp!');
                navigation.navigate('AdminHome');
              })
              .catch(error => {
                console.log('storeImgInFireStore===>', error);
              });
          })
          .catch(err => {
            console.log('Error: ', err);
          });

        console.log('snap===>', snap);
        //setLoading(false);
        setImageStatus('Image uploaded successfully');
      })
      .catch(e => {
        console.log('uploading image error => ', e);
        // setLoading(false);
        setImageStatus('Something went wrong');
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.label}>Movie Thumbnail</Text>

        {isImageVisible ? (
          <View style={styles.uploadImageContainer}>
            <Pressable style={styles.uploadImage} onPress={() => choice()}>
              {console.log(
                'Uriiiiiiiii',
                imageUrl,
                'firebase url',
                firebaseImageUrl,
              )}
              <Image
                style={styles.uploadImage}
                source={{
                  uri: isImageVisible && imageUrl ? imageUrl : firebaseImageUrl,
                }}
              />
            </Pressable>
          </View>
        ) : (
          <View style={styles.uploadImageContainer}>
            <Pressable style={styles.uploadImage} onPress={() => choice()}>
              <Camera />
              <Text style={styles.uploadImgText}>Upload Photo</Text>
            </Pressable>
          </View>
        )}

        <Text style={styles.label}>Title</Text>
        <View style={styles.InputContainer}>
          <Input
            style={styles.Input}
            defaultValue={movie.title}
            placeholder="Movie Name"
            placeholderTextColor={Colors.greyDark}
            onChangeText={text => {
              setMovie({...movie, title: text});
              setMovieIdName(text);
            }}
            keyboardShouldPersistTaps
          />
        </View>
        <Text style={styles.label}>Genre</Text>
        <View style={styles.InputContainer}>
          <Input
            style={styles.Input}
            defaultValue={movie.genre}
            placeholder="Movie Genre"
            placeholderTextColor={Colors.greyDark}
            onChangeText={text => setMovie({...movie, genre: text})}
            keyboardShouldPersistTaps
          />
        </View>
        <Text style={styles.label}>Year</Text>
        <View style={styles.InputContainer}>
          <Input
            style={styles.Input}
            defaultValue={movie.year}
            maxLength={4}
            placeholder="Movie Year"
            placeholderTextColor={Colors.greyDark}
            onChangeText={text => setMovie({...movie, year: text})}
            keyboardShouldPersistTaps
            keyboardType="numeric"
          />
        </View>
        <Text style={styles.label}>Rating</Text>
        <View style={styles.InputContainer}>
          <Input
            style={styles.Input}
            defaultValue={movie.rating}
            maxLength={3}
            placeholder="Movie Rating"
            placeholderTextColor={Colors.greyDark}
            onChangeText={text => setMovie({...movie, rating: text})}
            keyboardShouldPersistTaps
            keyboardType="numeric"
          />
        </View>
        <View>
          <Button
            style={styles.AddBtnStyle}
            onPress={storeImgInFireStore}
            color={Colors.blue}>
            <Text style={styles.btnText}>Add Movie</Text>
          </Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
    paddingTop: hp(10),
    paddingHorizontal: wp(5),
  },
  label: {
    fontFamily: fonts.Medium.fontFamily,
    color: Colors.white,
    fontSize: sizes.base,
    paddingLeft: wp(3),
    marginVertical: hp(2),
  },
  uploadImageContainer: {},
  uploadImage: {
    width: wp(90),
    alignSelf: 'center',
    borderRadius: wp(10),
    height: hp(30),
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
  InputContainer: {
    // borderLeftWidth: 4,
    // borderRightWidth: 4,
    backgroundColor: Colors.secondary,
    borderColor: Colors.transparent,
    borderWidth: 1,
    paddingVertical: 0,
    // borderRadius: sizes.logo,
    width: wp(90),
    borderRadius: wp(7.5),
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: sizes.padding,
  },
  Input: {
    borderRadius: sizes.radius,
    borderColor: Colors.transparent,
    borderWidth: sizes.borderWidth,
    marginHorizontal: 10,
    width: wp(45),
    paddingVertical: 0,
    fontSize: sizes.base,
    color: Colors.greyDark,
    borderBottomColor: Colors.transparent,
  },
  AddBtnStyle: {
    marginVertical: hp(3),
    height: hp(10),
    borderRadius: wp(6),
  },
  btnText: {
    fontFamily: fonts.Medium.fontFamily,
    color: Colors.white,
    fontSize: sizes.base,
    paddingLeft: wp(3),
    marginVertical: hp(2),
  },
});

export default memo(AddNewMovie);
