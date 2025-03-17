import {View, Text, TextInput, Button, Alert} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {ScreenWrapper} from 'react-native-screen-wrapper';
import {FIREBASE_AUTH} from '../../../firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';

export default function Authentication() {
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const auth = FIREBASE_AUTH;

  const handleLogIn = async () => {
    console.log('Log In....');

    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      console.log('Login Response', response);
      Alert.alert('Login Successfully');
    } catch (error) {
      Alert.alert('Login Error');
    }
  };

  const handleSignUp = async () => {
    console.log('Sign Up....');
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      console.log('Sign Up Response', response);
      Alert.alert('Sign Up Successfully');
    } catch (error) {
      Alert.alert('Sign Up Error');
    }
  };

  return (
    <ScreenWrapper>
      <View style={styles.parentView}>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          style={styles.inputStyle}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          style={styles.inputStyle}
        />

        <Button title="Login" onPress={handleLogIn} />
        <Button title="Sign Up" onPress={handleSignUp} />
      </View>
    </ScreenWrapper>
  );
}
