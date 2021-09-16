import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home/Home';

import SplashScreen from '../screens/SplashScreen/SplashScreen';

import TabBar from '../components/TabBar';

const Tab = createBottomTabNavigator();

const AppStack = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBar={props => <TabBar {...props} />}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          header: () => null,
        }}
      />
      <Tab.Screen name="Explore" component={SplashScreen} />
      <Tab.Screen name="Save" component={SplashScreen} />
      <Tab.Screen name="Profile" component={SplashScreen} />
    </Tab.Navigator>
  );
};

export default AppStack;
