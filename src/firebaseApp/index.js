//on importe firebase
import app from "firebase/app";
import "firebase/auth";

// on configure firebase
var firebaseConfig = {
  apiKey: "AIzaSyDHaLcp7qnPMci3J4V1sqfFOBKkremgBk0",
  authDomain: "todo-react-7181e.firebaseapp.com",
  databaseURL: "https://todo-react-7181e-default-rtdb.firebaseio.com",
  projectId: "todo-react-7181e",
  storageBucket: "todo-react-7181e.appspot.com",
  messagingSenderId: "933609514047",
  appId: "1:933609514047:web:12e9be89285c2a51efc48a",
};
// on intialise firebase
app.initializeApp(firebaseConfig);

// On crée la fonction "firebase" qui nous permettra par la suite d'accéder facilement à des fonctions de firebase
const firebase = () => {
  const auth = app.auth();
  const register = (email, password) =>
    auth.createUserWithEmailAndPassword(email, password);
  const login = (email, password) =>
    auth.signInWithEmailAndPassword(email, password);
  const logout = () => auth.signOut();

  return {
    auth,
    register,
    login,
    logout,
  };
};

// on exporte cette fonction
export default firebase;
