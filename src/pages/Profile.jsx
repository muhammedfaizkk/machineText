import React from "react";
import { useUserData } from "../hooks/user/Userhook";
import { useAuth } from "../context/AuthContext";

const Profile = () => {
  const { logout } = useAuth();
  const { userData, loading, error } = useUserData();

  const handleLogout = () => {
    logout();
    localStorage.removeItem("user");
    window.location.href = "/login";
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen text-gray-600 p-4">
        <p>Loading ...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen text-red-600 p-4">
        <p>Error: {error}</p>
      </div>
    );
  }

  if (!userData) {
    return (
      <div className="flex justify-center items-center min-h-screen text-gray-600 p-4">
        <p>No user found. Please login.</p>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-start sm:items-center min-vh-100 bg-gray-100 p-2 sm:p-4 overflow-y-auto">
      <div className="bg-white shadow-lg rounded-2xl w-full max-w-md mx-2 sm:mx-0 p-4 sm:p-6">
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 sm:mb-6 text-center">
          My Profile
        </h2>

        {/* Profile Info */}
        <div className="space-y-3 sm:space-y-4">
          <div>
            <p className="text-sm text-gray-500">Name</p>
            <p className="text-base sm:text-lg font-medium text-gray-800">
              {userData.fullName || "N/A"}
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Email</p>
            <p className="text-base sm:text-lg font-medium text-gray-800">
              {userData.email || "N/A"}
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Mobile</p>
            <p className="text-base sm:text-lg font-medium text-gray-800">
              {userData.mobile || "+91 --- --- ----"}
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Date of Birth</p>
            <p className="text-base sm:text-lg font-medium text-gray-800">
              {userData.dateOfBirth
                ? typeof userData.dateOfBirth === "string"
                  ? userData.dateOfBirth
                  : userData.dateOfBirth.toDate().toLocaleDateString()
                : "N/A"}
            </p>
          </div>
        </div>

        {/* Logout Button */}
        <div className="mt-4 sm:mt-6 text-center">
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 sm:px-6 sm:py-2 rounded-lg shadow text-sm sm:text-base"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
