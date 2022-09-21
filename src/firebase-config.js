import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBP-IbcohzXGrCON121vBxrmpG-ZPPoSXo',
  authDomain: 'odin-fwitter.firebaseapp.com',
  projectId: 'odin-fwitter',
  storageBucket: 'odin-fwitter.appspot.com',
  messagingSenderId: '883084824973',
  appId: '1:883084824973:web:54545aeb6805315b1b2dc4',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
