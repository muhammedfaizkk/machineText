import React from "react";
import { ShoppingBag } from "lucide-react";

export default function Navbar() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto flex justify-between items-center py-3 px-6">
        {/* Logo */}
        <h1 className="text-2xl font-bold italic text-blue-900">FashionHub</h1>

        {/* Menu */}
        <nav className="hidden md:flex space-x-8">
          <a href="#" className="text-gray-700 hover:text-blue-600">Category</a>
          <a href="#" className="text-gray-700 hover:text-blue-600">Brand</a>
          <a href="#" className="text-gray-700 hover:text-blue-600">Contact</a>
          <a href="#" className="text-gray-700 hover:text-blue-600">FAQ's</a>
        </nav>

        {/* Right Side */}
        <div className="flex items-center space-x-6">
          {/* Cart Icon with Badge */}
          <div className="relative">
            <ShoppingBag className="w-6 h-6 text-gray-700" />
            <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full px-1">
              2
            </span>
          </div>

          {/* Profile */}
          <div className="flex items-center space-x-3">
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="profile"
              className="w-10 h-10 rounded-full object-cover"
            />
            <div className="hidden sm:block">
              <p className="text-xs text-gray-500">Good Morning!</p>
              <p className="text-sm font-medium text-gray-800">Scarlet Johnson</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
