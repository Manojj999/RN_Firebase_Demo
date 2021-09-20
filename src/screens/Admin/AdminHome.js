import React, {useContext, useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  FlatList,
  Alert,
  RefreshControl,
  ScrollView,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Colors from '../../themes/Colors';
import {
  SearchIcon,
  Rating,
  AddMovie,
  PlayerIcon,
} from '../../assets/svgIcon/Icons';
import {fonts, sizes} from '../../themes/General';
import Input from '../../components/Input/Input';
import {wp, hp} from '../../themes/Metrics';
import {movieData} from '../../helpers/movieData';
import firestore from '@react-native-firebase/firestore';
import Button from '../../components/Button/Button';
import {AuthContext} from '../../navigation/AuthProvider';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import OneSignal from 'react-native-onesignal';
const AdminHome = ({navigation}) => {
  const [searchMovie, setSearchMovie] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const [showLogout, setShowLogout] = useState(false);
  const [movieList, setMovieList] = useState(null);

  const [filteredMovieList, setFilteredMovieList] = useState(null);
  const [refreshing, setRefreshing] = React.useState(false);
  const movieCollectionRef = firestore().collection('movies');
  const {logout} = useContext(AuthContext);
  useEffect(() => {
    movieCollectionRef.get().then(({docs}) => {
      setMovieList(docs.map(doc => doc.data()));
    });
  }, []);

  useEffect(async () => {
    console.log('inside useefecr');
    OneSignal.setLogLevel(6, 0);
    OneSignal.setAppId('08def7b1-690b-4e6c-9d19-15f22b77d8eb');
    OneSignal.setRequiresUserPrivacyConsent(false);

    /* O N E S I G N A L  H A N D L E R S */

    OneSignal.setNotificationWillShowInForegroundHandler(notifReceivedEvent => {
      console.log(
        'OneSignal: notification will show in foreground:',
        notifReceivedEvent,
      );
      let notif = notifReceivedEvent.getNotification();

      const button1 = {
        text: 'Cancel',
        onPress: () => {
          notifReceivedEvent.complete();
        },
        style: 'cancel',
      };

      const button2 = {
        text: 'Complete',
        onPress: () => {
          notifReceivedEvent.complete(notif);
        },
      };

      Alert.alert('Complete notification?', 'Test', [button1, button2], {
        cancelable: true,
      });
    });
    OneSignal.setNotificationOpenedHandler(notification => {
      alert(notification);
    });
  }, []);

  const onRefresh = () => {
    setRefreshing(true);

    movieCollectionRef.onSnapshot(({docs}) => {
      setMovieList(docs.map(doc => doc.data()));
      setRefreshing(false);
    });
  };

  const sendNotification = data => {
    console.log('sendNotification', data);
    let headers = {
      'Content-Type': 'application/json',
      Authorization: 'Basic ZDI1YjIwNGEtZDYyYS00YzcwLWIyOGItYzI2NTY5MTBiZThj',
    };
    let autherization = {
      Authorization: 'Basic ZDI1YjIwNGEtZDYyYS00YzcwLWIyOGItYzI2NTY5MTBiZThj',
    };

    let endpoint = 'https://onesignal.com/api/v1/notifications';

    let params = {
      method: 'POST',
      headers: headers,

      body: JSON.stringify({
        app_id: '08def7b1-690b-4e6c-9d19-15f22b77d8eb',
        included_segments: ['Subscribed Users'],
        //include_player_ids: 555,
        // data: {foo: 'bar'},
        //priority: 10,
        contents: {en: 'Sampple Push Message'},
        // contents: {en: data},
      }),
    };
    console.log('params', params);
    fetch(endpoint, params).then(res => console.log('ressssssssssssssss', res));
  };
  const handleSearchMovie = searchText => {
    let filteredData = movieList.filter(function (item) {
      if (item.title.toLowerCase().indexOf(searchText.toLowerCase()) !== -1) {
        return true;
      } else {
        return false;
      }
    });

    setFilteredMovieList(filteredData);
  };
  const _renderItem = ({item, index}) => {
    return (
      <View style={styles.movieContainer}>
        <Pressable
          style={{flexDirection: 'row', alignItems: 'center'}}
          onPress={() =>
            navigation.navigate('AdminMovieDetails', {
              movieInfo: item,
            })
          }>
          <View style={styles.movieImageContainer}>
            <Image
              source={{uri: item.posterImageUrl}}
              style={styles.movieImage}
            />
          </View>
          <View style={styles.movieDetailContainer}>
            <Text
              ellipsizeMode="tail"
              numberOfLines={1}
              style={styles.movieTitle}>
              {item.title}
            </Text>
            <Text
              ellipsizeMode="tail"
              numberOfLines={1}
              style={styles.movieGenre}>
              {item.genre}
            </Text>
          </View>
          <View style={styles.ratingContainer}>
            <Rating />
            <Text style={styles.rating}>{item.rating}</Text>
          </View>
        </Pressable>
      </View>
    );
  };
  console.log('rederr');
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Mononton</Text>
        <View style={styles.headerIcon}>
          <Pressable
            style={styles.iconContainer}
            onPress={() =>
              //  setShowSearch(!showSearch)
              sendNotification('Hello World')
            }>
            <SearchIcon />
          </Pressable>
          <Pressable
            style={styles.iconContainer}
            onPress={() => navigation.navigate('AddMovie')}>
            <AddMovie />
          </Pressable>
          <Pressable
            style={styles.exitIconContainer}
            onPress={() => setShowLogout(!showLogout)}>
            <MaterialIcons name="exit-to-app" size={24} color={Colors.white} />
          </Pressable>
        </View>
      </View>
      {showLogout && (
        <View>
          <Button
            style={styles.LogoutBtnStyle}
            onPress={() => {
              logout();
              navigation.navigate('Login');
            }}
            color={Colors.error}>
            <Text style={styles.LogoutBtnText}>Logout</Text>
          </Button>
        </View>
      )}
      {showSearch && (
        <View style={styles.searchInputWrapper}>
          <View style={styles.searchInputContainer}>
            <SearchIcon />
            <Input
              style={styles.searchInput}
              defaultValue={searchMovie}
              placeholder="Search Movie"
              placeholderTextColor={Colors.greyDark}
              onChangeText={text => handleSearchMovie(text)}
            />
          </View>
          <Pressable onPress={() => setShowSearch(false)}>
            <Text style={styles.searchInputText}>cancel</Text>
          </Pressable>
        </View>
      )}
      <View style={styles.movieContent}>
        <FlatList
          data={
            filteredMovieList && filteredMovieList.length > 0
              ? filteredMovieList
              : movieList
          }
          nestedScrollEnabled
          renderItem={_renderItem}
          keyExtractor={(item, index) => item.title.toString()}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
              colors={['#ff0000', '#00ff00', '#0000ff']}
              tintColor="#ffffff"
              progressBackgroundColor="#ffffff"
              style={styles.refreshControl}
            />
          }
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: sizes.padding,
    justifyContent: 'space-between',
    paddingVertical: sizes.base,
  },
  headerText: {
    color: Colors.white,
    fontSize: sizes.h1,
    fontFamily: fonts.Medium.fontFamily,
  },
  headerIcon: {
    flexDirection: 'row',
  },
  iconContainer: {
    marginHorizontal: sizes.radius,
  },
  exitIconContainer: {
    marginLeft: sizes.base,
  },
  searchInputContainer: {
    // borderLeftWidth: 4,
    // borderRightWidth: 4,
    backgroundColor: Colors.secondary,
    borderColor: Colors.transparent,
    borderWidth: 1,
    borderRadius: sizes.logo,
    width: wp(65),
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: sizes.padding,
  },
  searchInput: {
    borderRadius: sizes.radius,
    borderColor: Colors.transparent,
    borderWidth: sizes.borderWidth,
    marginHorizontal: 10,
    width: wp(45),
    fontSize: sizes.base,
    color: Colors.greyDark,
    borderBottomColor: Colors.transparent,
  },
  searchInputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: sizes.padding,
    justifyContent: 'space-between',
  },
  searchInputText: {
    color: Colors.white,
    fontSize: sizes.base - 1,
    fontFamily: fonts.Book.fontFamily,
  },
  movieContent: {
    flex: 1,
    paddingVertical: sizes.padding,
  },
  movieContainer: {
    width: wp(85),
    alignSelf: 'center',
    backgroundColor: Colors.secondary,
    flexDirection: 'row',
    paddingHorizontal: sizes.padding * 0.5,
    paddingVertical: sizes.radius * 1.5,
    borderRadius: sizes.h3,
    alignItems: 'center',
    marginVertical: sizes.radius,
    justifyContent: 'space-between',
  },
  movieImageContainer: {},
  movieImage: {
    width: wp(18),
    height: hp(10),
    borderRadius: sizes.h3,
    marginRight: sizes.base,
  },
  movieDetailContainer: {},
  movieTitle: {
    color: Colors.white,
    fontSize: sizes.base,
    fontFamily: fonts.Medium.fontFamily,
    width: wp(40),
  },
  movieGenre: {
    color: Colors.greyDark,
    fontSize: sizes.caption,
    fontFamily: fonts.Medium.fontFamily,
    width: wp(40),
  },
  ratingContainer: {
    flexDirection: 'row',
    // paddingRight: sizes.padding,
  },
  rating: {
    color: Colors.white,
    fontSize: sizes.base,
    marginLeft: sizes.radius,
    fontFamily: fonts.Medium.fontFamily,
  },
  LogoutBtnStyle: {
    marginVertical: hp(1),
    height: hp(8),
    width: wp(85),
    alignSelf: 'center',
    borderRadius: wp(5),
  },
  LogoutBtnText: {
    color: Colors.white,
    fontSize: sizes.base,
  },
});

export default AdminHome;
