import React, {useState, useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import AsyncStorage from '@react-native-async-storage/async-storage';

import {GoogleSignin} from '@react-native-google-signin/google-signin';
import Login from '../screens/Login/Login';
import Registration from '../screens/Registration/Registration';
import Home from '../screens/Home/Home';

const Stack = createStackNavigator();

const AuthStack = () => {
  const [isFirstLaunch, setIsFirstLaunch] = useState(null);
  let routeName;

  useEffect(() => {
    AsyncStorage.getItem('AlreadyLaunch').then(value => {
      if (value == null) {
        AsyncStorage.setItem('AlreadyLaunch', 'true');
        setIsFirstLaunch(true);
      } else {
        setIsFirstLaunch(false);
      }
    });

    GoogleSignin.configure({
      webClientId:
        '980964573068-ov16t9hjtk4a9pabn4gitt3r03b6oj7g.apps.googleusercontent.com',
    });
  }, []);

  if (isFirstLaunch === null) {
    return null;
  } else if (isFirstLaunch === true) {
    routeName = 'Home';
  } else {
    routeName = 'Login';
  }

  return (
    <Stack.Navigator initialRouteName={routeName}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{header: () => null}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{header: () => null}}
      />
      <Stack.Screen
        name="Registration"
        component={Registration}
        options={{header: () => null}}
      />
    </Stack.Navigator>
  );
};
export default AuthStack;
