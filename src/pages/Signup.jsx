import React from "react";

const Signup = () => {
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
            Are you ready to join us? Let’s create Account
          </p>

          <form className="mt-6 space-y-4">
            <div>
              <label className="block text-sm text-gray-700 mb-1">
                Full name
              </label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-black focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-700 mb-1">Email</label>
              <input
                type="email"
                placeholder="admin@gmail.com"
                className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-black focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-700 mb-1">
                Date Field
              </label>
              <input
                type="date"
                className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-black focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-700 mb-1">Mobile</label>
              <input
                type="tel"
                placeholder="1234567891"
                className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-black focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                placeholder="********"
                className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-black focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition"
            >
              Create Account
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