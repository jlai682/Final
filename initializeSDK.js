import "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    apiKey: "AIzaSyCDyis4q4Iv60mvMr2-SQNfGNdEznCx4-E",
    authDomain: "bcplosaltoshacks2githubio.firebaseapp.com",
    databaseURL: "https://bcplosaltoshacks2githubio-default-rtdb.firebaseio.com",
    projectId: "bcplosaltoshacks2githubio",
    storageBucket: "bcplosaltoshacks2githubio.appspot.com",
    messagingSenderId: "216069276874",
    appId: "1:216069276874:web:b7ed381bf1feacc6222033",
    measurementId: "G-3DSY98RMP2"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
const auth = firebase.auth();