import * as firebase from "firebase";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyD2iPGsCe-kyIj7RvZm1FyluM_kpjvRB8M",
  authDomain: "from-garbage-to-gift.firebaseapp.com",
  databaseURL: "https://from-garbage-to-gift.firebaseio.com",
  projectId: "from-garbage-to-gift",
  storageBucket: "from-garbage-to-gift.appspot.com",
  messagingSenderId: "64119781777",
  appId: "1:64119781777:web:4a67e320e6c7783f650230",
  measurementId: "G-5BRNSZMG41",
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();

export const auth = firebase.auth();
