import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-analytics.js";
import {getAuth,createUserWithEmailAndPassword,} from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCK7DXJxZ4ixr3NM2oz57ogtvWUA3T837E",
  authDomain: "bolchaal-trial.firebaseapp.com",
  projectId: "bolchaal-trial",
  storageBucket: "bolchaal-trial.appspot.com",
  messagingSenderId: "515930618810",
  appId: "1:515930618810:web:fa58b01d97d9a17ff2bb83",
  measurementId: "G-GKMD9Y4E90",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

//submit button
//submit button
const signup = document.getElementById("signup");
signup.addEventListener("click", function (event) {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const username = document.getElementById("username").value;

  createUserWithEmailAndPassword(auth, email, password, username)
    .then((userCredential) => {
      const user = userCredential.user;
      // console.log("User created:", user);
      alert("Account Created");
      // Redirect to dashboard.html
      window.location.href = "/website/dashboard.html"; // Corrected the path
      // You can also store user information or perform other actions here
    })
    .catch((error) => {
      // Handle any errors that occurred during user creation
      const errorCode = error.code;
      const errorMessage = error.message;
      // console.error("Error creating user:", errorCode, errorMessage);
      alert(errorMessage); // Modified to alert the error message
    });
});
