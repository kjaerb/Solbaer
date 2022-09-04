import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

//DEFINETLY SHOULDN'T HAPPEN

export const app = initializeApp(firebaseConfig);

export const db = getFirestore();
