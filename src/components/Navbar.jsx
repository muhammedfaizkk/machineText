import React, { useState } from "react";
import { ShoppingBag, Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);

  const goToProfile = () => navigate("/profile");
  const navigateToHome = () => navigate("/");

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-3 px-6">

        {/* Logo + Menu */}
        <nav className="flex items-center gap-10">
          <h1
            className="text-2xl font-bold italic text-blue-900 cursor-pointer hover:text-blue-700 transition"
            onClick={navigateToHome}
          >
            FashionHub
          </h1>
          <div className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-blue-600 transition">Category</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition">Brand</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition">Contact</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition">FAQ's</a>
          </div>
        </nav>

        {/* Right Side */}
        <div className="flex items-center space-x-6">
          {/* Cart Icon */}
          <div className="relative cursor-pointer hover:scale-105 transition">
            <ShoppingBag className="w-6 h-6 text-gray-700" />
            <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full px-1.5 py-0.5 shadow">
              2
            </span>
          </div>

          {/* Profile */}
          <div
            onClick={goToProfile}
            className="flex items-center space-x-3 cursor-pointer hover:opacity-90 transition"
          >
            <img
              src={user?.avatar || "https://randomuser.me/api/portraits/lego/1.jpg"}
              alt="profile"
              className="w-10 h-10 rounded-full object-cover border border-gray-200 shadow-sm"
            />
            <div className="hidden sm:block">
              <p className="text-sm font-medium text-gray-800">
                {user?.displayName || "Guest"}
              </p>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>


      {menuOpen && (
        <div className="md:hidden bg-white shadow-md px-6 pb-4 space-y-3 animate-fadeIn">
          <a href="#" className="block text-gray-700 hover:text-blue-600 transition">Category</a>
          <a href="#" className="block text-gray-700 hover:text-blue-600 transition">Brand</a>
          <a href="#" className="block text-gray-700 hover:text-blue-600 transition">Contact</a>
          <a href="#" className="block text-gray-700 hover:text-blue-600 transition">FAQ's</a>
        </div>
      )}
    </header>
  );
}
