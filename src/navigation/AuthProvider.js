import React, {createContext, useState} from 'react';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {LoginManager, AccessToken} from 'react-native-fbsdk-next';
//import {useNavigation} from '@react-navigation/native';
export const AuthContext = createContext();

export const AuthProvider = ({children, navigation}) => {
  const [user, setUser] = useState(null);
  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        emailLogin: async (email, password) => {
          try {
            const x = await auth().signInWithEmailAndPassword(email, password);
            console.log('google data===>', x);
          } catch (e) {
            console.log(e);
          }
        },
        googlelogin: async () => {
          try {
            // Get the users ID token
            const {idToken} = await GoogleSignin.signIn();

            // Create a Google credential with the token
            const googleCredential =
              auth.GoogleAuthProvider.credential(idToken);

            // Sign-in the user with the credential
            await auth().signInWithCredential(googleCredential);
          } catch (e) {
            console.log('Google Login: ' + e);
          }
        },
        fblogin: async () => {
          try {
            // Attempt login with permissions
            const result = await LoginManager.logInWithPermissions([
              'public_profile',
              'email',
            ]);

            if (result.isCancelled) {
              throw 'User cancelled the login process';
            }

            // Once signed in, get the users AccesToken
            const data = await AccessToken.getCurrentAccessToken();

            if (!data) {
              throw 'Something went wrong obtaining access token';
            }

            // Create a Firebase credential with the AccessToken
            const facebookCredential = auth.FacebookAuthProvider.credential(
              data.accessToken,
            );

            // Sign-in the user with the credential
            const facebookdata = await auth().signInWithCredential(
              facebookCredential,
            );
            console.log('fb=======>', facebookdata);
            return facebookdata;
          } catch (error) {
            console.log('FB Login: ' + error);
          }
        },
        register: async (name, email, password) => {
          console.log(name, email, password);
          try {
            const user = await auth().createUserWithEmailAndPassword(
              email,
              password,
            );

            console.log('user data ==>', user);
            return user;
          } catch (e) {
            console.log('Registration Error:', e);
          }
        },
        logout: async () => {
          try {
            await auth().signOut();
          } catch (e) {
            console.log(e);
          }
        },
      }}>
      {children}
    </AuthContext.Provider>
  );
};
