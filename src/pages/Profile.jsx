// src/components/Profile.js
import React from "react";
import { useUserData } from "../hooks/user/Userhook"; // Import useUserData
import { useAuth } from "../context/AuthContext";

const Profile = () => {
  const { logout } = useAuth();
  const { userData, loading, error } = useUserData(); // Use useUserData hook

  const handleLogout = () => {
    logout();
    localStorage.removeItem("user"); // Clear localStorage on logout
    window.location.href = "/login"; // Redirect to login
  };


  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-600">
        <p>Error: {error}</p>
      </div>
    );
  }

  // Handle no user data
  if (!userData) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600">
        <p>No user found. Please login.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">
      <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          My Profile
        </h2>

        {/* Profile Info */}
        <div className="space-y-4">
          <div>
            <p className="text-sm text-gray-500">Name</p>
            <p className="text-lg font-medium text-gray-800">
              {userData.fullName || "N/A"}
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Email</p>
            <p className="text-lg font-medium text-gray-800">
              {userData.email || "N/A"}
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Mobile</p>
            <p className="text-lg font-medium text-gray-800">
              {userData.mobile || "+91 --- --- ----"}
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Date of Birth</p>
            <p className="text-lg font-medium text-gray-800">
              {userData.dateOfBirth
                ? typeof userData.dateOfBirth === "string"
                  ? userData.dateOfBirth
                  : userData.dateOfBirth.toDate().toLocaleDateString() // Convert Timestamp to string
                : "N/A"}
            </p>
          </div>
        </div>

        {/* Logout Button */}
        <div className="mt-6 text-center">
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg shadow"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;