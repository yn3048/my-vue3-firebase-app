import { boot } from 'quasar/wrappers';

import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

import { useAuthStore } from 'src/stores/auth';
const firebaseConfig = {
  apiKey: 'AIzaSyD9WMIadnspG-b8v_iDZ8yRnHi8zfNKlL8',
  authDomain: 'yncoding-vue3-firebase-app2.firebaseapp.com',
  projectId: 'yncoding-vue3-firebase-app2',
  storageBucket: 'yncoding-vue3-firebase-app2.appspot.com',
  messagingSenderId: '213501054034',
  appId: '1:213501054034:web:52c424a03228e871d0a38b',
  measurementId: 'G-DQX82KVVX8',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };

export default boot(async (/* { app, router, ... } */) => {
  const authStore = useAuthStore();
  onAuthStateChanged(auth, user => {
    console.log('### user', user);
    authStore.setUser(user);
  });
});
