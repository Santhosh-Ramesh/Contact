import { initializeApp } from 'firebase/app';
import {getDatabase} from 'firebase/database';


const firebaseConfig = {
  apiKey: 'AIzaSyAnRhnbdA3Eh0Zr4fc1V_Vokr4E_Dv5S8A',
  authDomain: 'contact-firebase-de467.firebaseapp.com',
  projectId: 'contact-firebase-de467',
  storageBucket: 'contact-firebase-de467.appspot.com',
  messagingSenderId: '614685628933',
  appId: '1:614685628933:web:57f7bb40101a1d015c1a6c',
};

const app = initializeApp(firebaseConfig);

export const database = getDatabase(app);

