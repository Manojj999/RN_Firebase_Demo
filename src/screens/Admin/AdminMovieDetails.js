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
import firestore from '@react-native-firebase/firestore';

import ImagePicker, {
  launchCamera,
  launchImageLibrary,
} from 'react-native-image-picker';
const AdminMovieDetails = ({route, navigation}) => {
  const [imageStatus, setImageStatus] = React.useState('');
  const [imageUrl, setImageUrl] = React.useState('');
  const [isImageVisible, setIsImageVisible] = React.useState(false);
  const [imageName, setImageName] = React.useState('');
  const [firebaseImageUrl, setFirebaseImageUrl] = React.useState('');
  const [isEditMode, setIsEditMode] = React.useState(false);
  const {movieInfo} = route.params;
  console.log('movieeee Info', movieInfo);
  const [movie, setMovie] = React.useState({
    title: movieInfo.title,
    year: movieInfo.year,
    posterURL: movieInfo.posterImageUrl,
    rating: movieInfo.rating,
    genre: movieInfo.genre,
  });

  const movieCollectionRef = firestore().collection('movies');
  const onDelete = id => {
    movieCollectionRef
      .doc(id)
      .delete()
      .then(() => {
        navigation.navigate('AdminHome');
      })
      .catch(err => {
        console.log(err);
      });
  };

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
        setIsImageVisible(false);
        setImageUrl(path);
        console.log('Image Path: ', path);
        let fileName = getFileName(response.assets[0].fileName, path);
        console.log('File Name: ', fileName);
        setImageName(fileName);
        //uploadImageToStorage(path, fileName);
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

          setIsImageVisible(false);
          setImageUrl(path);
          console.log('Image Path: ', path);
          let fileName = getFileName(response.assets[0].fileName, path);
          console.log('File Name: ', fileName);
          setImageName(fileName);
        }

        console.log('open Library===>', response);
      },
    );
  };
  const storeImgInFireStore = id => {
    // store on Firestore
    imageUrl && imageName
      ? uploadImageToStorage(imageUrl, imageName, id)
      : movieCollectionRef
          .doc(id)
          .update({
            title: movie.title,
            genre: movie.genre,
            year: movie.year,
            rating: movie.rating,
            //posterImageUrl: movieInfo.posterImageUrl,
          })
          .then(() => {
            console.log('Image uuuuupppppp!');
            navigation.navigate('AdminHome');
            //navigation.navigate('AdminHome');
          })
          .catch(error => {
            console.log('storeImgInFireStore===>', error);
          });
  };

  const uploadImageToStorage = (path, name, id) => {
    let reference = storage().ref(name);
    let task = reference.putFile(path);
    console.log('ye loooo id ===>', id);

    console.log('Firebasr url', firebaseImageUrl);
    task
      .then(snap => {
        console.log('Image uploaded to the bucket!');
        storage()
          .ref(snap.metadata.fullPath)
          .getDownloadURL()
          .then(url => {
            console.log('Image URL: ', url);

            setFirebaseImageUrl(url);
            setIsImageVisible(true);
            setImageStatus('Image Uploaded');
            movieCollectionRef
              .doc(id)
              .update({
                title: movie.title,
                genre: movie.genre,
                year: movie.year,
                rating: movie.rating,
                posterImageUrl: imageUrl ? url : movieInfo.posterImageUrl,
              })
              .then(() => {
                setImageUrl('');
                console.log('Image uuuuupppppp!');
                navigation.navigate('AdminHome');
                //navigation.navigate('AdminHome');
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
      })
      .catch(e => {
        console.log('uploading image error => ', e);
        // setLoading(false);
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.label}>Movie Thumbnail</Text>

        <View style={styles.uploadImageContainer}>
          <Pressable onPress={() => (isEditMode ? choice() : null)}>
            {console.log('Uriiiiiiiii', imageUrl)}
            <Image
              resizeMode="cover"
              resizeMethod="scale"
              style={styles.uploadImage}
              // style={{width: 200, height: 200}}
              source={{
                uri: isImageVisible
                  ? firebaseImageUrl
                  : imageUrl && imageUrl !== null
                  ? imageUrl
                  : movieInfo.posterImageUrl,
              }}
            />
          </Pressable>
        </View>

        <Text style={styles.label}>Name</Text>
        <View style={styles.InputContainer}>
          <Input
            style={styles.Input}
            defaultValue={movieInfo.title}
            placeholderTextColor={Colors.greyDark}
            onChangeText={text => setMovie({...movie, title: text})}
            keyboardShouldPersistTaps
            editable={isEditMode ? true : false}
          />
        </View>
        <Text style={styles.label}>Genre</Text>
        <View style={styles.InputContainer}>
          <Input
            style={styles.Input}
            defaultValue={movieInfo.genre}
            placeholderTextColor={Colors.greyDark}
            onChangeText={text => setMovie({...movie, genre: text})}
            keyboardShouldPersistTaps
            editable={isEditMode ? true : false}
          />
        </View>
        <Text style={styles.label}>Year</Text>
        <View style={styles.InputContainer}>
          <Input
            style={styles.Input}
            defaultValue={movieInfo.year}
            maxLength={4}
            placeholderTextColor={Colors.greyDark}
            onChangeText={text => setMovie({...movie, year: text})}
            keyboardShouldPersistTaps
            keyboardType="numeric"
            editable={isEditMode ? true : false}
          />
        </View>
        <Text style={styles.label}>Rating</Text>
        <View style={styles.InputContainer}>
          <Input
            style={styles.Input}
            defaultValue={movieInfo.rating}
            maxLength={3}
            placeholderTextColor={Colors.greyDark}
            onChangeText={text => setMovie({...movie, rating: text})}
            keyboardShouldPersistTaps
            keyboardType="numeric"
            editable={isEditMode ? true : false}
          />
        </View>
        <View>
          <Button
            style={styles.AddBtnStyle}
            onPress={() => {
              if (isEditMode === false) {
                setIsEditMode(true);
                console.log('edit');
                navigation.setOptions({
                  headerTitle: 'Update Details',
                });
              } else {
                navigation.setOptions({
                  headerTitle: 'Movie Details',
                });
                storeImgInFireStore(movieInfo.movieId);

                // setIsEditMode(false);
              }
            }}
            color={Colors.blue}>
            <Text style={styles.btnText}>
              {isEditMode ? 'Update Data' : 'Edit Data'}
            </Text>
          </Button>
          {isEditMode === false ? (
            <Button
              style={styles.AddBtnStyle}
              onPress={() => onDelete(movieInfo.movieId)}
              color={Colors.red}>
              <Text style={styles.btnText}>Delete Data</Text>
            </Button>
          ) : null}
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
    marginTop: hp(3),
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

export default memo(AdminMovieDetails);
