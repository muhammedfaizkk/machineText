// src/pages/Login.jsx
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const Login = () => {
  const [loginError, setLoginError] = useState("");
  const [loading, setLoading] = useState(false);

  // Yup validation schema
  const schema = yup.object().shape({
    email: yup
      .string()
      .email("Please enter a valid email")
      .required("Email is required"),
    password: yup
      .string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
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
    setLoginError("");
    
    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);
      // User successfully logged in
      console.log("User logged in successfully");
      // You can redirect or update state here
    } catch (error) {
      setLoginError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side */}
      <div className="hidden md:flex w-1/2 bg-gray-100">
        <img
          src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d"
          alt="login"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Side */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-10">
        <div className="max-w-md w-full space-y-6">
          {/* Welcome Section */}
          <h2 className="text-2xl font-bold text-gray-900">Welcome Back!!</h2>
          <p className="text-sm text-gray-500">Please Login your Account</p>

          {/* Form */}
          <form className="mt-6 space-y-4" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label className="block text-sm text-gray-700 mb-1">Email</label>
              <input
                type="email"
                placeholder="admin@gmail.com"
                className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-black"
                {...register("email")}
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm text-gray-700 mb-1">Password</label>
              <input
                type="password"
                placeholder="********"
                className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-black"
                {...register("password")}
              />
              {errors.password && (
                <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>
              )}
              <div className="flex justify-end mt-1">
                <a
                  href="/forgot-password"
                  className="text-sm text-gray-500 hover:underline"
                >
                  Forgot Password
                </a>
              </div>
            </div>

            {loginError && (
              <p className="text-red-500 text-sm">{loginError}</p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition disabled:opacity-50"
            >
              {loading ? "Signing in..." : "Sign in"}
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center my-4">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="mx-2 text-sm text-gray-400">or</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          {/* Sign-up */}
          <p className="text-center text-sm text-gray-600">
            Didn't have an account?{" "}
            <a href="/signup" className="text-black font-medium hover:underline">
              Sign-up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;