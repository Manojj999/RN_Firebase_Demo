import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import Home from '../screens/Home/Home';
import Login from '../screens/Login/Login';
import Registration from '../screens/Registration/Registration';
import {AuthProvider} from './AuthProvider';

const Stack = createStackNavigator();
// const Tab = createBottomTabNavigator();

//todo: change Appstack to  FeedStack
const AppStack = ({navigation}) => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={Home} options={{header: () => null}} />
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

//future work
// const AppStack = () => {
//   return (
//     <Tab.Navigator
//       screenOptions={{
//         headerShown: false,
//         activeTintColor: '#2e64e5',
//       }}>
//       <Tab.Screen
//         name="Home"
//         component={FeedStack}
//         options={({route}) => ({
//           tabBarIcon: ({color, size}) => (
//             <MaterialCommunityIcons
//               name="home-outline"
//               color={color}
//               size={size}
//             />
//           ),
//         })}
//       />
//       <Tab.Screen
//         name="Messages"
//         component={ChatScreen}
//         options={({route}) => ({
//           tabBarIcon: ({color, size}) => (
//             <Ionicons
//               name="chatbox-ellipses-outline"
//               color={color}
//               size={size}
//             />
//           ),
//         })}
//       />
//       <Tab.Screen
//         name="Profile"
//         component={ProfileScreen}
//         options={{
//           tabBarIcon: ({color, size}) => (
//             <Ionicons name="person-outline" color={color} size={size} />
//           ),
//         }}
//       />
//     </Tab.Navigator>
//   );
// };

export default AppStack;
