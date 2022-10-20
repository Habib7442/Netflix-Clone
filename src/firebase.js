import firebase from "firebase/compat/app";
import "firebase/compat/auth";
const app = firebase.initializeApp({
  //   apiKey: "AIzaSyCVQSps69iiuaZIltlNX86IbVMOW2S_eXI",
  //   authDomain: "netflix-clone-246f1.firebaseapp.com",
  //   projectId: "netflix-clone-246f1",
  //   storageBucket: "netflix-clone-246f1.appspot.com",
  //   messagingSenderId: "266355140483",
  //   appId: "1:266355140483:web:5d2c1aaf53d41573d638b6",
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
});

export const auth = app.auth();
export default app;
