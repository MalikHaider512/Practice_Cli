import {initializeApp} from 'firebase/app';
// import {getAnalytics} from 'firebase/analytics';
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAhynODXpLwVevbogVgwJJjr9u_fY3TWcw',
  authDomain: 'practicecli-4e919.firebaseapp.com',
  projectId: 'practicecli-4e919',
  storageBucket: 'practicecli-4e919.firebasestorage.app',
  messagingSenderId: '626441452403',
  appId: '1:626441452403:web:cead4eceecbffd71a4e306',
  measurementId: 'G-6NSWWZJTG7',
};

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);
// const analytics = getAnalytics(FIREBASE_APP);
