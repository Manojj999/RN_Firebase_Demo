import * as React from 'react';

import firebase from '@react-native-firebase/app';
import Auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
// import OneSignal from 'react-native-onesignal';
import functions from '@react-native-firebase/functions';
import messaging from '@react-native-firebase/messaging';
import dynamicLinks from '@react-native-firebase/dynamic-links';
import analytics from '@react-native-firebase/analytics';

import {GoogleSignin} from '@react-native-google-signin/google-signin';

GoogleSignin.configure({
  webClientId:
    '980964573068-ov16t9hjtk4a9pabn4gitt3r03b6oj7g.apps.googleusercontent.com',
});
const firebaseConfig = {
  apiKey: 'AIzaSyBk5C-OgyYs1cb5Pq2iEJty6AnarKVAIOc',
  authDomain: 'react-native-firebase-de-6e460.firebaseapp.com',
  databaseURL:
    'https://react-native-firebase-de-6e460-default-rtdb.firebaseio.com',
  projectId: 'react-native-firebase-de-6e460',
  storageBucket: 'react-native-firebase-de-6e460.appspot.com',
  messagingSenderId: '980964573068',
  appId: '1:980964573068:web:c8489e50ec89bbf45e20a9',
  //   measurementId: 'G-0B2NDJEHCJ',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
export {
  firebase,
  Auth,
  database,
  firestore,
  storage,
  functions,
  messaging,
  dynamicLinks,
  analytics,
};

// export function logoutUser() {
//   firebase.auth().signOut();
// }
