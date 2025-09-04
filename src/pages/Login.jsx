import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../hooks/user/Userhook";
import { useAuth } from "../context/AuthContext";
import toast from "react-hot-toast";

const Login = () => {
  const { login, loginError, loading } = useLogin();
  const { user } = useAuth();
  const navigate = useNavigate();

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

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  // Auto-redirect if already logged in
  useEffect(() => {
    if (user) {
      navigate("/"); // or "/products"
    }
  }, [user, navigate]);

  useEffect(() => {
    if (loginError) {
      toast.error(loginError);
    }
  }, [loginError]);

  const onSubmit = async (data) => {
    const result = await login(data.email, data.password);
    if (result.success) {
      toast.success("Login successful, redirecting...");
      navigate("/");
    }
  };

  return (
    <div className="flex max-h-screen">
      {/* Left Side (fixed image) */}
      <div className="hidden md:flex w-1/2 bg-gray-100">
        <img
          src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d"
          alt="login"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Side (scrollable form) */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-6 md:p-10 overflow-y-auto">
        <div className="max-w-md w-full space-y-6 my-8">
          <h2 className="text-2xl font-bold text-gray-900">Welcome Back!!</h2>
          <p className="text-sm text-gray-500">Please login to your account</p>

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
                <p className="text-red-500 text-xs mt-1">
                  {errors.email.message}
                </p>
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
                <p className="text-red-500 text-xs mt-1">
                  {errors.password.message}
                </p>
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
            Don’t have an account?{" "}
            <a
              href="/signup"
              className="text-black font-medium hover:underline"
            >
              Sign-up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
