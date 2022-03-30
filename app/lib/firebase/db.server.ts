import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import FirestoreService from "./firestore.service";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "casamento-gustavo.firebaseapp.com",
  projectId: "casamento-gustavo",
  storageBucket: "casamento-gustavo.appspot.com",
  messagingSenderId: "388143158433",
  appId: "1:388143158433:web:9b5f41ce85df18d11a0ce0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

const firestoreService = new FirestoreService(db);

export { firestoreService };
