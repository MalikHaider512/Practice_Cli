import {View, Text, TextInput} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './styles';
import {ScreenWrapper} from 'react-native-screen-wrapper';

import SimpleButton from '../../../components/simpleButton';
import {
  signInWithEmail,
  signUpWithEmail,
} from '../../../firebase/services/firebaseAuthServices';

export default function Authentication() {
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // useEffect(() => {
  //   GoogleSignin.configure({
  //     webClientId:
  //       '626441452403-30l7i5ep85r7ua58tspqukil1ep5e7o2.apps.googleusercontent.com',
  //     offlineAccess: true,
  //   });
  // }, []);

  const handleLogIn = async () => {
    console.log('Log In....');
    let response = await signInWithEmail(email, password);
    console.log('Login Response....', response);
  };

  const handleSignUp = async () => {
    console.log('Sign Up....');
    let response = await signUpWithEmail(email, password);
    console.log('Sign Up Response...', response);
  };

  const handleGoogleSignIn = async () => {
    console.log('Google Sign In....');
    // let response = await signInWithGoogle();
    // console.log('Google Sign In Response', response);
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

        <SimpleButton title="Login" onPress={handleLogIn} />
        <SimpleButton title="Sign Up" onPress={handleSignUp} />
        <SimpleButton
          title="Continue with Google"
          onPress={handleGoogleSignIn}
        />
      </View>
    </ScreenWrapper>
  );
}
