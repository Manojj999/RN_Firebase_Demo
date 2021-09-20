import React, {useContext, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  FlatList,
  Alert,
  ScrollView,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import Colors from '../../themes/Colors';

import {AuthContext} from '../../navigation/AuthProvider';
import {fonts, sizes} from '../../themes/General';
import {
  GenreIcon,
  NotificationIcon,
  ActiveNotificationIcon,
  PlayerIcon,
  PremiumPrice,
  SearchIcon,
  TvShows,
  Rating,
} from '../../assets/svgIcon/Icons';
import CategoryIconContainer from '../../components/CategoryIconContainer';
import {movieData} from '../../helpers/movieData';
import {hp, wp} from '../../themes/Metrics';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import firestore from '@react-native-firebase/firestore';
import OneSignal from 'react-native-onesignal';
import Config from 'react-native-config';

const Home = ({navigation}) => {
  const {user, logout} = useContext(AuthContext);
  const [index, setIndex] = React.useState(0);
  const isCarousel = React.useRef(null);
  const [movieList, setMovieList] = React.useState(null);
  const movieCollectionRef = firestore().collection('movies');

  useEffect(() => {
    movieCollectionRef.get().then(({docs}) => {
      setMovieList(docs.map(doc => doc.data()));
    });
  }, []);

  console.log('<====== Movie List =======>', movieList);

  useEffect(async () => {
    console.log('inside useefecr');
    OneSignal.setLogLevel(6, 0);
    OneSignal.setAppId('08def7b1-690b-4e6c-9d19-15f22b77d8eb');
    OneSignal.setRequiresUserPrivacyConsent(false);

    // /* O N E S I G N A L  H A N D L E R S */

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
  const CarouselCardItem = ({item, index}) => {
    return (
      <View style={styles.carouselCardContainer}>
        <Image
          source={{uri: item.posterImageUrl}}
          style={styles.carouselImage}
        />
        <View style={styles.cardContainer}>
          <View style={styles.cardWrapper}>
            <View style={styles.cardContent}>
              <Text
                ellipsizeMode="tail"
                numberOfLines={1}
                style={styles.cardTitle}>
                {item.title}
              </Text>
              <Text
                style={
                  styles.cardGenre
                }>{`${item.year} | ${item.genres} `}</Text>
            </View>
            <View style={styles.ratingContainer}>
              <Rating />
              <Text style={styles.rating}>{item.rating}</Text>
            </View>
          </View>
        </View>
      </View>
    );
  };

  const _renderItem = ({item, index}) => {
    return (
      <View style={styles.movieContainer}>
        <Pressable style={styles.movieImageContainer}>
          <Image
            source={{uri: item.posterImageUrl}}
            style={styles.movieImage}
          />
        </Pressable>
        <Pressable style={styles.movieDetailContainer}>
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
        </Pressable>
        <View style={styles.playerIconContainer}>
          <PlayerIcon />
        </View>
      </View>
    );
  };
  console.log('ApI Url========>', Config.API_URL);

  const HomeContent = () => {
    return (
      <View>
        <View style={{height: hp(28)}}>
          <Carousel
            layout="default"
            layoutCardOffset={9}
            ref={isCarousel}
            data={movieList}
            renderItem={CarouselCardItem}
            sliderWidth={wp(100)}
            itemWidth={wp(80)}
            inactiveSlideShift={0}
            onSnapToItem={index => setIndex(index)}
            loop
            useScrollView={true}
          />
        </View>

        <Pagination
          dotsLength={movieList.length}
          activeDotIndex={index}
          carouselRef={isCarousel}
          dotStyle={{
            width: 10,
            height: 10,
            borderRadius: 5,
            marginHorizontal: 0,
            marginVertical: 0,
            paddingVertical: 0,
            backgroundColor: Colors.red,

            //backgroundColor: 'rgba(0, 0, 0, 0.92)',
          }}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
          tappableDots={true}
        />

        <View style={styles.categoryContainer}>
          <CategoryIconContainer>
            <GenreIcon />
            <Text style={styles.categoryText}>Genre</Text>
          </CategoryIconContainer>
          <CategoryIconContainer>
            <TvShows />
            <Text style={styles.categoryText}>Tv shows</Text>
          </CategoryIconContainer>
          <CategoryIconContainer>
            <PremiumPrice />
            <Text style={styles.categoryText}>Go pro</Text>
          </CategoryIconContainer>
        </View>

        <View style={styles.continueWatch}>
          <Text style={styles.continueWatchText}>Continue watching</Text>
          <Pressable>
            <Text style={styles.seeAllText}>See all</Text>
          </Pressable>
        </View>
      </View>
    );
  };

  const _logOutHandler = () => {
    logout();
    navigation.navigate('Login');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Mononton</Text>
        <View style={styles.headerIcon}>
          <Pressable
            style={styles.iconContainer}
            onPress={() => console.log('Search')}>
            <SearchIcon />
          </Pressable>
          <Pressable style={styles.iconContainer} onPress={_logOutHandler}>
            <ActiveNotificationIcon />
          </Pressable>
        </View>
      </View>

      <View style={styles.continueWatchList}>
        <FlatList
          data={movieList}
          nestedScrollEnabled
          ListHeaderComponent={() => <HomeContent />}
          renderItem={_renderItem}
          keyExtractor={(item, index) => item.title.toString()}
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
  cardContainer: {
    position: 'absolute',

    bottom: sizes.radius,
  },
  cardWrapper: {
    flexDirection: 'row',
    width: wp(85),
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: sizes.padding,
  },
  cardContent: {
    flexDirection: 'column',
  },
  ratingContainer: {
    flexDirection: 'row',
  },
  rating: {
    color: Colors.white,
    fontSize: sizes.base,
    marginHorizontal: sizes.radius,
    fontFamily: fonts.Medium.fontFamily,
  },
  carouselCardContainer: {
    backgroundColor: 'white',
    borderRadius: 16,

    shadowColor: Colors.secondary,
    shadowOffset: {
      width: 0,
      height: 3,
    },

    elevation: 7,

    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
    overflow: 'hidden',
  },
  carouselImage: {
    width: wp(85),

    opacity: 0.9,

    height: hp(28),
  },
  cardImage: {
    flex: 1,
    width: '100%',
  },
  cardTitle: {
    fontSize: sizes.h3,
    fontFamily: fonts.Medium.fontFamily,
    color: Colors.white,
    width: wp(40),
  },
  cardGenre: {
    fontSize: sizes.font,
    fontFamily: fonts.Book.fontFamily,
    color: Colors.greyDark,
  },
  categoryContainer: {
    flexDirection: 'row',
    paddingHorizontal: sizes.padding,
    justifyContent: 'space-between',
    marginVertical: sizes.radius,
  },
  categoryText: {
    color: Colors.white,
    fontSize: sizes.body,
    marginVertical: sizes.radius,
    marginTop: sizes.radius,
    fontFamily: fonts.Medium.fontFamily,
  },
  continueWatch: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: sizes.padding,
    alignItems: 'center',
    paddingVertical: sizes.radius,
  },
  continueWatchText: {
    color: Colors.white,
    fontSize: sizes.h3,
    fontFamily: fonts.Medium.fontFamily,
  },
  continueWatchList: {
    flex: 1,
    paddingBottom: sizes.padding * 3,
  },
  seeAllText: {
    color: Colors.greyDark,
    fontSize: sizes.body,
    fontFamily: fonts.Book.fontFamily,
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
});

export default Home;
