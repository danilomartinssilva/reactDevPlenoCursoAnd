import * as firebase from 'firebase';
const  firebaseApp = firebase.initializeApp( {
    apiKey: "AIzaSyC1Ia4Npfj1Edc0tdPhz7WPqvw1-4Ufh1I",
    authDomain: "expensesreact.firebaseapp.com",
    databaseURL: "https://expensesreact.firebaseio.com",
    projectId: "expensesreact",
    storageBucket: "expensesreact.appspot.com",
    messagingSenderId: "320633261422"
  });
  
  const db = firebase.database(firebaseApp).ref("comments");
  export default db;
  