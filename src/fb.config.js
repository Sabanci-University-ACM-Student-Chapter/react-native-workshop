// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import Firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyC50ZqgL7dfyHjF4217275wb5sjv9Q6x4o',
  authDomain: 'workshop2-1bacc.firebaseapp.com',
  projectId: 'workshop2-1bacc',
  storageBucket: 'workshop2-1bacc.appspot.com',
  messagingSenderId: '772454290234',
  appId: '1:772454290234:web:f7e2d67523edccbdd73603',
};

const fb = Firebase.initializeApp(firebaseConfig);

export default fb;
