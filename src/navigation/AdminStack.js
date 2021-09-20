import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AdminHome from '../screens/Admin/AdminHome';

import SplashScreen from '../screens/SplashScreen/SplashScreen';

import Login from '../screens/Login/Login';

import AddNewMovie from '../screens/Admin/AddNewMovie';
import Colors from '../themes/Colors';
import {BackButton} from '../assets/svgIcon/Icons';
import {Pressable} from 'react-native';
import {fonts, sizes} from '../themes/General';
import AdminMovieDetails from '../screens/Admin/AdminMovieDetails';

const Stack = createStackNavigator();

const AdminStack = () => {
  return (
    <Stack.Navigator initialRouteName="AdminHome">
      <Stack.Screen
        name="AddMovie"
        component={AddNewMovie}
        options={({navigation}) => ({
          headerTitle: 'Add Movie Details',
          headerTitleStyle: {
            fontFamily: fonts.Medium.fontFamily,
            fontSize: sizes.h2,
            color: Colors.white,
          },
          headerTransparent: true,
          headerTitleAlign: 'center',
          headerLeft: () => (
            <Pressable onPress={() => navigation.goBack()}>
              <BackButton />
            </Pressable>
          ),
          headerLeftContainerStyle: {padding: 15},
          headerRightContainerStyle: {padding: 15},
        })}
      />

      <Stack.Screen
        name="AdminHome"
        component={AdminHome}
        options={{header: () => null}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{header: () => null}}
      />
      <Stack.Screen
        name="AdminMovieDetails"
        component={AdminMovieDetails}
        options={({navigation}) => ({
          headerTitle: 'Movie Details',
          headerTitleStyle: {
            fontFamily: fonts.Medium.fontFamily,
            fontSize: sizes.h2,
            color: Colors.white,
          },
          headerTransparent: true,
          headerTitleAlign: 'center',
          headerLeft: () => (
            <Pressable onPress={() => navigation.pop()}>
              <BackButton />
            </Pressable>
          ),
          headerLeftContainerStyle: {padding: 15},
          headerRightContainerStyle: {padding: 15},
        })}
      />
    </Stack.Navigator>
  );
};

export default AdminStack;
