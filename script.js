function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>