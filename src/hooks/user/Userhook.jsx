// src/hooks/authHooks.js
import { useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { auth, db } from "../../firebase"; // Adjusted path if firebase.js is in src
import { useAuth } from "../../context/AuthContext";

// ---------------- Signup Hook ----------------
export const useSignup = () => {
  const [signupError, setSignupError] = useState("");
  const [loading, setLoading] = useState(false);
  const { setUser } = useAuth();

  const signup = async (data) => {
    setLoading(true);
    setSignupError("");

    try {
      // Step 1: Create user in Firebase Auth
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      console.log("✅ User created with UID:", userCredential.user.uid);

      // Step 2: Update Firebase Auth profile
      await updateProfile(userCredential.user, {
        displayName: data.fullName,
      });

      // Step 3: Create Firestore document
      const userDocData = {
        fullName: data.fullName,
        email: data.email,
        dateOfBirth: data.dateOfBirth || "",
        mobile: data.mobile || "",
        createdAt: new Date(),
      };

      try {
        await setDoc(doc(db, "users", userCredential.user.uid), userDocData);
        console.log("✅ Firestore document created:", userDocData);
      } catch (firestoreError) {
        // Rollback: Delete Firebase Auth user if Firestore fails
        await userCredential.user.delete();
        throw new Error("Failed to create user profile in Firestore");
      }

      // Step 4: Prepare user object for context
      const user = {
        uid: userCredential.user.uid,
        email: userCredential.user.email,
        displayName: data.fullName,
        dateOfBirth: data.dateOfBirth || "",
        mobile: data.mobile || "",
        createdAt: new Date(),
      };

      // Step 5: Update AuthContext
      setUser(user);
      return { success: true, user };
    } catch (error) {
      console.error("❌ Signup error:", error);
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
  const { setUser } = useAuth();

  const login = async (email, password) => {
    setLoading(true);
    setLoginError("");

    try {
      // Step 1: Firebase Auth login
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const uid = userCredential.user.uid;
      console.log("✅ User logged in with UID:", uid);

      // Step 2: Fetch Firestore data
      const userDoc = await getDoc(doc(db, "users", uid));
      let extraData = {};
      if (userDoc.exists()) {
        extraData = userDoc.data();
        console.log("✅ Firestore data retrieved:", extraData);
      } else {
        // Create default document if it doesn't exist
        extraData = {
          fullName: userCredential.user.displayName || "",
          email: userCredential.user.email,
          dateOfBirth: "",
          mobile: "",
          createdAt: new Date(),
        };
        await setDoc(doc(db, "users", uid), extraData);
        console.log("✅ Created default Firestore document:", extraData);
      }

      // Step 3: Merge Auth and Firestore data
      const user = {
        uid,
        email: userCredential.user.email,
        displayName: userCredential.user.displayName || extraData.fullName,
        ...extraData,
      };

      // Step 4: Update AuthContext (no localStorage)
      setUser(user);
      console.log("✅ User data set in context:", user);
      return { success: true, user };
    } catch (error) {
      console.error("❌ Login error:", error);
      setLoginError(error.message);
      return { success: false, error: error.message };
    } finally {
      setLoading(false);
    }
  };

  return { login, loginError, loading };
};

// ---------------- User Data Hook ----------------
export const useUserData = () => {
  const { user, loading: authLoading } = useAuth();
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      if (authLoading) {
        console.log("⏳ Auth still loading...");
        return;
      }

      if (!user || !user.uid) {
        console.log("❌ No user or UID found:", user);
        setLoading(false);
        return;
      }

      console.log("👤 Fetching data for UID:", user.uid);

      try {
        const userDoc = await getDoc(doc(db, "users", user.uid));
        if (userDoc.exists()) {
          console.log("✅ Firestore data retrieved:", userDoc.data());
          setUserData(userDoc.data());
        } else {
          // Create default document
          const defaultData = {
            fullName: user.displayName || "",
            email: user.email || "",
            mobile: "",
            dateOfBirth: "",
            createdAt: new Date(),
          };
          await setDoc(doc(db, "users", user.uid), defaultData);
          console.log("✅ Created default Firestore document:", defaultData);
          setUserData(defaultData);
        }
      } catch (err) {
        console.error("❌ Error fetching user data:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [user, authLoading]);

  return { userData, loading, error };
};