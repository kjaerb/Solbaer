import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const apiKey = import.meta.env.VITE_FIREBASE_APIKEY;
const authDomain = import.meta.env.VITE_FIREBASE_AUTHDOMAIN;
const projectId = import.meta.env.VITE_FIREBASE_PROJECTID;
const storageBucket = import.meta.env.VITE_FIREBASE_STORAGEBUCKET;
const messagingSenderId = import.meta.env.VITE_FIREBASE_MESSAGINGSENDERID;
const measurementId = import.meta.env.VITE_FIREBASE_MEASUREMENTID;
const appId = import.meta.env.VITE_FIREBASE_APPID;

//DEFINETLY SHOULDN'T HAPPEN
export const firebaseConfig = {
	apiKey: apiKey,
	authDomain: authDomain,
	projectId: projectId,
	storageBucket: storageBucket,
	messagingSenderId: messagingSenderId,
	appId: appId,
	measurementId: measurementId
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore();

export default app;
