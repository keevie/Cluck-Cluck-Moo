import * as firebase from "firebase";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyD2RwowYvXzfPGLN7AAJWp3YZwCsDMQcOk",
  authDomain: "cluck-cluck-moo.firebaseapp.com",
  databaseURL: "https://cluck-cluck-moo.firebaseio.com",
  storageBucket: "cluck-cluck-moo.appspot.com",
  messagingSenderId: "953288174598"
};

firebase.initializeApp(config);

const database = firebase.database();

export const updateScore = (score) => {
  firebase.database().ref().set({ highestScore: score});
};

export const getScore = () => {
   return firebase.database().ref().once('value').then((res) => {
    const highestScore = res.val().highestScore;
    return highestScore;
  });
};

