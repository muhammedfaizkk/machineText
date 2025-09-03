import React from "react";
import { useAuth } from "../context/AuthContext"; // ✅ import your context

const Profile = () => {
    const { user, logout } = useAuth();

    const currentUser = user || JSON.parse(localStorage.getItem("user"));


    const handleLogout = () => {
        logout(); // ✅ firebase logout
        localStorage.removeItem("user");
        window.location.href = "/login"; // redirect
    };

    if (!currentUser) {
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
                            {currentUser.displayName || "N/A"}
                        </p>
                    </div>

                    <div>
                        <p className="text-sm text-gray-500">Email</p>
                        <p className="text-lg font-medium text-gray-800">
                            {currentUser.email}
                        </p>
                    </div>

                    <div>
                        <p className="text-sm text-gray-500">Mobile</p>
                        <p className="text-lg font-medium text-gray-800">
                            {currentUser.phoneNumber || "+91 --- --- ----"}
                        </p>
                    </div>

                    <div>
                        <p className="text-sm text-gray-500">UID</p>
                        <p className="text-lg font-medium text-gray-800">
                            {currentUser.uid}
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
