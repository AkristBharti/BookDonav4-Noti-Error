import * as firebase from 'firebase';
require('@firebase/firestore')
var firebaseConfig = {
  apiKey: "AIzaSyAeRAikx6eVh5CsiolVw8pYOwPVVHvYdqk",
  authDomain: "bookdonav5.firebaseapp.com",
  databaseURL: "https://bookdonav5.firebaseio.com",
  projectId: "bookdonav5",
  storageBucket: "bookdonav5.appspot.com",
  messagingSenderId: "193335202237",
  appId: "1:193335202237:web:28ad573db2735f81e282d4",
  measurementId: "G-87V2570KVC"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase.firestore();