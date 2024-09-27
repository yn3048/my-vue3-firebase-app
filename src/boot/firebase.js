import { boot } from 'quasar/wrappers';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

import { useAuthStore } from 'src/stores/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAUVQmLDwizMc1OXMD8gchJBsLc3Rlav3s',
  authDomain: 'yncoding-vue3-firebase-app.firebaseapp.com',
  projectId: 'yncoding-vue3-firebase-app',
  storageBucket: 'yncoding-vue3-firebase-app.appspot.com',
  messagingSenderId: '640052055807',
  appId: '1:640052055807:web:ecac0bfddabc0604d906ca',
  measurementId: 'G-8HS4HBF6W6',
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
    console.log('### user: ', user);
    authStore.setUser(user);
  });
});
