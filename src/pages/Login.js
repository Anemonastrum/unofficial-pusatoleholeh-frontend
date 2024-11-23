import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../api/auth";
import { toast } from "react-toastify";

function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await loginUser(formData);
      toast.success(response.message);
      localStorage.setItem("token", response.token);
      navigate("/");
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center h-dvh bg-base-200">
      <div className="flex flex-col-reverse md:flex-row w-full max-w-4xl bg-white rounded-lg shadow-md overflow-hidden dark:bg-gray-800 h-dvh md:h-auto">
        <div className="w-full md:w-1/2 p-8 flex flex-col">
          <div className="mb-10">
            <img src="/Hydro.svg" alt="Logo" className="h-10" />
          </div>

          <h1 className="text-3xl font-bold text-gray-700 dark:text-gray-200">Login</h1>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Welcome back! Please login to your account to continue.
          </p>
          <form onSubmit={handleSubmit} className="mt-6">
            <div className="mb-4">
              <label className="block text-sm text-gray-600 dark:text-gray-400">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                className="w-full input input-bordered"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm text-gray-600 dark:text-gray-400">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                className="w-full input input-bordered"
              />
            </div>
            <button
              type="submit"
              className={`w-full btn btn-primary mt-2 ${loading ? "loading" : ""}`}
              disabled={loading}
            >
              Login
            </button>
          </form>

          <div className="flex items-center my-6">
            <div className="flex-grow border-t border-gray-300 dark:border-gray-600"></div>
            <span className="mx-4 text-sm text-gray-500 dark:text-gray-400">OR</span>
            <div className="flex-grow border-t border-gray-300 dark:border-gray-600"></div>
          </div>

          <button className="w-full btn btn-outline btn-secondary">
            Continue with Google
          </button>

          <p className="mt-4 text-sm text-center text-gray-600 dark:text-gray-400">
            Don't have an account?{" "}
            <Link to="/register" className="text-primary">
              Register
            </Link>
          </p>
        </div>

        <div
          className="md:block md:w-1/2 bg-cover bg-center"
          style={{ backgroundImage: "url('https://placehold.co/600x800')" }}
        >
        </div>
      </div>
    </div>
  );
}

export default Login;
