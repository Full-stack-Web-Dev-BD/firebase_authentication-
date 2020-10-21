import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyCTIluUxQ0UPLoborK-2fNhZRlPKOHxue4",
    authDomain: "project00-267215.firebaseapp.com",
    databaseURL: "https://project00-267215.firebaseio.com",
    projectId: "project00-267215",
    storageBucket: "project00-267215.appspot.com",
    messagingSenderId: "638784868600",
    appId: "1:638784868600:web:6552ec4c5dba36c88d6b0d"
  };
  
 const firebaseApp  = firebase.initializeApp(config);

export default firebaseApp;
