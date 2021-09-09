import React, {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Button from '../../components/Button/Button';
import {AuthContext} from '../../navigation/AuthProvider';

const Home = props => {
  const {user, logout} = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <Text>===Home Page=====</Text>
      <Button style={{backgroundColor: 'red'}} onPress={() => logout()}>
        <Text>Logout</Text>
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',

    backgroundColor: 'lightgreen',
  },
});

export default Home;
