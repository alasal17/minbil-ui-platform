// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export const signUp = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    return userCredential;
  } catch (error) {
    throw error;
  }
};

export const login = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential;
  } catch (error) {
    throw error;
  }
};

// Firestore functions for handling services
export const addService = async (serviceData) => {
  try {
    // Ensure that the title is unique for the user
    const servicesRef = collection(db, "services");
    const q = query(servicesRef, where("uid", "==", serviceData.uid), where("title", "==", serviceData.title));
    const existingServices = await getDocs(q);

    if (!existingServices.empty) {
      throw new Error("Tjenesten med denne tittelen eksisterer allerede.");
    }

    // Add new service to Firestore
    const docRef = await addDoc(servicesRef, serviceData);
    return docRef.id;
  } catch (error) {
    throw error;
  }
};

export const updateService = async (serviceId, updatedData) => {
  try {
    const serviceRef = doc(db, "services", serviceId);
    await updateDoc(serviceRef, updatedData);
  } catch (error) {
    throw error;
  }
};

export const deleteService = async (serviceId) => {
  try {
    const serviceRef = doc(db, "services", serviceId);
    await deleteDoc(serviceRef);
  } catch (error) {
    throw error;
  }
};

export const getServicesByUser = async (uid) => {
  try {
    const servicesRef = collection(db, "services");
    const q = query(servicesRef, where("uid", "==", uid));
    const querySnapshot = await getDocs(q);
    const services = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    return services;
  } catch (error) {
    throw error;
  }
};