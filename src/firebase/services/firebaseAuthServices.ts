import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithCredential,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import {Alert} from 'react-native';
import {FIREBASE_AUTH} from '..';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

const auth = FIREBASE_AUTH;

export const signInWithEmail = async (email: string, password: string) => {
  try {
    const response = await signInWithEmailAndPassword(auth, email, password);
    console.log('Login Response', response);
    Alert.alert('Login Successfully');
  } catch (error) {
    Alert.alert('Login Error');
  }
};

export const signUpWithEmail = async (email: string, password: string) => {
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

// export const signInWithGoogle = async () => {

//   try {
//     const hasPlayService = await GoogleSignin.hasPlayServices();
//     console.log('Has Play Service', hasPlayService);

//     if (hasPlayService) {
//       console.log('Getting Token Id....');

//       const {idToken}: any = await GoogleSignin.signIn();
//       console.log('User token', idToken);
//       const googleCredential = GoogleAuthProvider.credential(idToken);
//       const userCredential = await signInWithCredential(auth, googleCredential);
//       console.log('Google User Credentials', userCredential);

//       if (userCredential) {
//         console.log('Google Sign In Susseccful', userCredential);
//       } else {
//         console.log('Error in Google Sign In');
//       }
//       return userCredential;
//     }
//   } catch (error) {
//     console.log('Google Sign In Error', error);
//   }
// };

export const signInWithGoogle = async () => {
  try {
    await GoogleSignin.hasPlayServices();
    const signInResult = await GoogleSignin.signIn();
    const idToken = signInResult.data?.idToken;
    const googleCredential = GoogleAuthProvider.credential(idToken);
    const response = await signInWithCredential(auth, googleCredential);
    console.log('Logged In response', response);
  } catch (error) {
    console.error('Google Sign In Error', error);
  }
};
