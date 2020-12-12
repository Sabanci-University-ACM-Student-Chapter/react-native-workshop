import React, {useState} from 'react';
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  Alert,
  TouchableOpacity,
} from 'react-native';
import fb from './fb.config';

const auth = fb.auth();

const Login = ({navigation}) => {
  const [userInfo, setUserInfo] = useState({user: '', pass: ''});

  const logIn = () => {
    auth
      .signInWithEmailAndPassword(userInfo.user, userInfo.pass)
      .then((user) => {
        navigation.navigate('Main');
      })
      .catch((error) => Alert.alert(error.message));
  };

  const signUp = () => {
    navigation.navigate('SignUp');
  };

  return (
    <View style={styles.loginContainer}>
      <Text style={styles.appTitle}>SUReview</Text>
      <TextInput
        style={styles.credInput}
        placeholder="Username"
        placeholderTextColor="rgba(255,255,255,0.5)"
        value={userInfo.user}
        onChangeText={(value) => setUserInfo({...userInfo, user: value})}
      />
      <TextInput
        style={styles.credInput}
        placeholder="Password"
        placeholderTextColor="rgba(255,255,255,0.5)"
        value={userInfo.pass}
        secureTextEntry={true}
        onChangeText={(value) => setUserInfo({...userInfo, pass: value})}
      />
      <TouchableOpacity
        style={[styles.button, {backgroundColor: 'white'}]}
        activeOpacity={1}
        onPress={logIn}>
        <Text style={[styles.buttonText, {color: 'blue'}]}>Log In</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, {backgroundColor: 'blue', marginBottom: 0}]}
        activeOpacity={1}
        onPress={signUp}>
        <Text style={[styles.buttonText, {color: 'white'}]}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 255, 0.7)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  appTitle: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  credInput: {
    width: '80%',
    height: 40,
    color: '#fff',
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 5,
    marginBottom: 20,
    paddingLeft: 10,
  },
  button: {
    width: '40%',
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 15,
  },
});

export default Login;
