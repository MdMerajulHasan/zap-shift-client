import React from "react";
import { AuthContext } from "./AuthContext";
import { auth } from "../../firebase/firebase.init";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const AuthProvider = ({ children }) => {
  // function to register user with email and password
  const registerUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //   function to login a user
  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // function to logout user
  const logoutUser = () => {
    return signOut(auth);
  };

  const authInfo = { registerUser, signInUser, logoutUser };
  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
