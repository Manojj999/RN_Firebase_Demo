import React, {useState, useEffect, useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from './AuthStack';
import AppStack from './AppStack';
import AdminStack from './AdminStack';
import auth from '@react-native-firebase/auth';
import {AuthContext} from './AuthProvider';

import Config from 'react-native-config';

const Routes = () => {
  const {user, setUser} = useContext(AuthContext);
  const [initializing, setInitializing] = useState(true);

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  if (initializing) return null;
  console.log('user=====>', user);
  console.log(
    'Admin Crential===>',
    Config.API_URL,
    Config.ADMIN_UID,
    Config.ADMIN_EMAIL,
    Config.ADMIN_PASSWORD,
  );
  return (
    <NavigationContainer>
      {user &&
      user.uid === Config.ADMIN_UID &&
      user.email === Config.ADMIN_EMAIL ? (
        <AdminStack />
      ) : user ? (
        <AppStack />
      ) : (
        <AuthStack />
      )}
    </NavigationContainer>
  );
};

export default Routes;
