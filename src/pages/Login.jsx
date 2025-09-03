import React from "react";

const Login = () => {
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
          {/* Top Label */}
          <p className="text-sm text-gray-600">Email</p>

          {/* Welcome Section */}
          <h2 className="text-2xl font-bold text-gray-900">Welcome Back!!</h2>
          <p className="text-sm text-gray-500">Please Login your Account</p>

          {/* Form */}
          <form className="mt-6 space-y-4">
            <div>
              <label className="block text-sm text-gray-700 mb-1">Email</label>
              <input
                type="email"
                placeholder="admin@gmail.com"
                className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-black"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-700 mb-1">Password</label>
              <input
                type="password"
                placeholder="********"
                className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-black"
              />
              <div className="flex justify-end mt-1">
                <a
                  href="/forgot-password"
                  className="text-sm text-gray-500 hover:underline"
                >
                  Forgot Password
                </a>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition"
            >
              Sign in
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
            Didn’t have an account?{" "}
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
