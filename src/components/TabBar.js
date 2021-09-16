import React from 'react';

import {View, Pressable, Dimensions, Text, StyleSheet} from 'react-native';
import {
  ActiveHome,
  HomeIcon,
  Explore,
  ActiveExplore,
  SaveIcon,
  ActiveSaveIcon,
  ProfileIcon,
  ActiveProfileIcon,
} from '../assets/svgIcon/Icons';
import Colors from '../themes/Colors';

const {width} = Dimensions.get('window');

const TabBar = ({state, descriptors, navigation}) => {
  return (
    <View style={styles.mainContainer}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <View
            key={index}
            style={[
              styles.mainItemContainer,
              {borderRightWidth: label == 'notes' ? 3 : 0},
            ]}>
            <Pressable onPress={onPress}>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  flex: 1,
                  padding: 8,
                }}>
                {label === 'Home' && isFocused ? (
                  <ActiveHome />
                ) : label === 'Home' ? (
                  <HomeIcon />
                ) : null}
                {label === 'Explore' && isFocused ? (
                  <ActiveExplore />
                ) : label === 'Explore' ? (
                  <Explore />
                ) : null}
                {label === 'Save' && isFocused ? (
                  <ActiveSaveIcon />
                ) : label === 'Save' ? (
                  <SaveIcon />
                ) : null}
                {label === 'Profile' && isFocused ? (
                  <ActiveProfileIcon />
                ) : label === 'Profile' ? (
                  <ProfileIcon />
                ) : null}
              </View>
            </Pressable>
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,

    backgroundColor: Colors.primary,
  },
  mainItemContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default TabBar;
