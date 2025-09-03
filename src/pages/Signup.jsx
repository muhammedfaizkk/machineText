// src/pages/Signup.jsx
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { 
  createUserWithEmailAndPassword, 
  updateProfile 
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../firebase";

const Signup = () => {
  const [signupError, setSignupError] = useState("");
  const [loading, setLoading] = useState(false);

  // Yup validation schema
  const schema = yup.object().shape({
    fullName: yup
      .string()
      .required("Full name is required")
      .min(2, "Full name must be at least 2 characters"),
    email: yup
      .string()
      .email("Please enter a valid email")
      .required("Email is required"),
    dateOfBirth: yup
      .date()
      .required("Date of birth is required")
      .max(new Date(), "Date of birth cannot be in the future"),
    mobile: yup
      .string()
      .matches(/^[0-9]{10}$/, "Mobile number must be 10 digits")
      .required("Mobile number is required"),
    password: yup
      .string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match")
      .required("Please confirm your password"),
  });

  // React Hook Form setup
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  // Form submission handler
  const onSubmit = async (data) => {
    setLoading(true);
    setSignupError("");
    
    try {
      // Create user with email and password
      const userCredential = await createUserWithEmailAndPassword(
        auth, 
        data.email, 
        data.password
      );
      
      // Update user profile with full name
      await updateProfile(userCredential.user, {
        displayName: data.fullName,
      });
      
      // Save additional user data to Firestore
      await setDoc(doc(db, "users", userCredential.user.uid), {
        fullName: data.fullName,
        email: data.email,
        dateOfBirth: data.dateOfBirth,
        mobile: data.mobile,
        createdAt: new Date(),
      });
      
      // User successfully created
      console.log("User created successfully");
    } catch (error) {
      setSignupError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* Left Side */}
      <div className="hidden md:flex w-1/2 relative">
        <img
          src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6"
          alt="signup"
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-6 left-6 bg-black bg-opacity-50 text-white p-4 rounded-lg max-w-xs">
          <p className="text-sm leading-relaxed">
            Figma Ipsum component variant main layer. Create flatten create
            effect move strikethrough. Union export plugin bullet effect hand
            arrange align. Project project boolean arrow scale. Rectangle device
            clip hand Figma content frame underline content.
          </p>
          <div className="mt-3 text-xs opacity-80">
            <p>Pam Hand</p>
            <p>pam.hand@gmail.com</p>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-4 md:p-10">
        <div className="max-w-md w-full space-y-6 my-8">
          <h2 className="text-2xl font-bold text-gray-900">
            Create an Account
          </h2>
          <p className="text-sm text-gray-500">
            Are you ready to join us? Let's create Account
          </p>

          <form className="mt-6 space-y-4" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label className="block text-sm text-gray-700 mb-1">
                Full name
              </label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-black focus:outline-none"
                {...register("fullName")}
              />
              {errors.fullName && (
                <p className="text-red-500 text-xs mt-1">{errors.fullName.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm text-gray-700 mb-1">Email</label>
              <input
                type="email"
                placeholder="admin@gmail.com"
                className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-black focus:outline-none"
                {...register("email")}
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm text-gray-700 mb-1">
                Date of Birth
              </label>
              <input
                type="date"
                className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-black focus:outline-none"
                {...register("dateOfBirth")}
              />
              {errors.dateOfBirth && (
                <p className="text-red-500 text-xs mt-1">{errors.dateOfBirth.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm text-gray-700 mb-1">Mobile</label>
              <input
                type="tel"
                placeholder="1234567891"
                className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-black focus:outline-none"
                {...register("mobile")}
              />
              {errors.mobile && (
                <p className="text-red-500 text-xs mt-1">{errors.mobile.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                placeholder="********"
                className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-black focus:outline-none"
                {...register("password")}
              />
              {errors.password && (
                <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm text-gray-700 mb-1">
                Confirm Password
              </label>
              <input
                type="password"
                placeholder="********"
                className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-black focus:outline-none"
                {...register("confirmPassword")}
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-xs mt-1">{errors.confirmPassword.message}</p>
              )}
            </div>

            {signupError && (
              <p className="text-red-500 text-sm">{signupError}</p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition disabled:opacity-50"
            >
              {loading ? "Creating Account..." : "Create Account"}
            </button>
          </form>

          <p className="text-center text-sm text-gray-600">
            Already have an account?{" "}
            <a
              href="/login"
              className="text-black font-medium hover:underline"
            >
              Sign-in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;