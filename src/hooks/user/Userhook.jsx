// src/hooks/authHooks.js
import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../../firebase";
import { useAuth } from "../../context/AuthContext";

// ---------------- Signup Hook ----------------
export const useSignup = () => {
  const [signupError, setSignupError] = useState("");
  const [loading, setLoading] = useState(false);
  const { setUser } = useAuth();   // ✅ FIXED

  const signup = async (data) => {
    setLoading(true);
    setSignupError("");

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );

      await updateProfile(userCredential.user, {
        displayName: data.fullName,
      });

      await setDoc(doc(db, "users", userCredential.user.uid), {
        fullName: data.fullName,
        email: data.email,
        dateOfBirth: data.dateOfBirth,
        mobile: data.mobile,
        createdAt: new Date(),
      });

      const user = {
        email: userCredential.user.email,
        displayName: data.fullName,
        dateOfBirth: data.dateOfBirth,
        mobile: data.mobile,
        createdAt: new Date(),
      };

      setUser(user); // ✅ update context state
      return { success: true, user };
    } catch (error) {
      setSignupError(error.message);
      return { success: false, error: error.message };
    } finally {
      setLoading(false);
    }
  };

  return { signup, signupError, loading };
};

// ---------------- Login Hook ----------------
export const useLogin = () => {
  const [loginError, setLoginError] = useState("");
  const [loading, setLoading] = useState(false);
  const { setUser } = useAuth();   // ✅ FIXED

  const login = async (email, password) => {
    setLoading(true);
    setLoginError("");

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = {
        uid: userCredential.user.uid,
        email: userCredential.user.email,
        displayName: userCredential.user.displayName,
      };

      setUser(user); // ✅ update context state
      return { success: true, user };
    } catch (error) {
      setLoginError(error.message);
      return { success: false, error: error.message };
    } finally {
      setLoading(false);
    }
  };

  return { login, loginError, loading };
};
