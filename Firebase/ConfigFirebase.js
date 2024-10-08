
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyAQzW1Jr1YBzJon8hrrTLbPKrlt05A0yzI",
  authDomain: "practicaeliab.firebaseapp.com",
  projectId: "practicaeliab",
  storageBucket: "practicaeliab.appspot.com",
  messagingSenderId: "118153064720",
  appId: "1:118153064720:web:029f6984816365779f7595"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore (app);
export default db;