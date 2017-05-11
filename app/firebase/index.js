import firebase from 'firebase';
try{
    var config = {
    apiKey: "AIzaSyD1Z200SMaHX3Ycg1CIr71v5KrVxYZNjSM",
    authDomain: "blood-bank-app-b692c.firebaseapp.com",
    databaseURL: "https://blood-bank-app-b692c.firebaseio.com",
    projectId: "blood-bank-app-b692c",
    storageBucket: "blood-bank-app-b692c.appspot.com",
    messagingSenderId: "710278088203"
  };
  firebase.initializeApp(config);
}catch(e){

}
export var firebaseRef =firebase.database().ref() ;
export default firebase;