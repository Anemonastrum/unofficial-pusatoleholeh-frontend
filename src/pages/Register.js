import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../api/auth";
import { toast } from "react-toastify";

function Register() {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await registerUser(formData);
      toast.success(response.message);
      navigate("/login");
    } catch (err) {
      toast.error(err.message);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-base-200">
      <div className="flex flex-col-reverse md:flex-row w-full max-w-4xl bg-white rounded-lg shadow-md overflow-hidden dark:bg-gray-800 h-screen md:h-auto">
        <div className="w-full md:w-1/2 p-8 flex flex-col">
          <div className="mb-10">
            <img src="/Hydro.svg" alt="Logo" className="h-10" />
          </div>

          <h1 className="text-3xl font-bold text-gray-700 dark:text-gray-200">Register</h1>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Create your account to explore endless opportunities in our marketplace!
          </p>
          <form onSubmit={handleSubmit} className="mt-6">
            <div className="mb-4">
              <label className="block text-sm text-gray-600 dark:text-gray-400">Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full input input-bordered"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm text-gray-600 dark:text-gray-400">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full input input-bordered"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm text-gray-600 dark:text-gray-400">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full input input-bordered"
              />
            </div>
            <button type="submit" className="w-full btn btn-primary mt-2" disabled={loading}>
              {loading ? "Registering..." : "Register"}
            </button>
          </form>

          <div className="flex items-center my-6">
            <div className="flex-grow border-t border-gray-300 dark:border-gray-600"></div>
            <span className="mx-4 text-sm text-gray-500 dark:text-gray-400">OR</span>
            <div className="flex-grow border-t border-gray-300 dark:border-gray-600"></div>
          </div>

          <button className="w-full btn btn-outline btn-secondary">Continue with Google</button>

          <p className="mt-4 text-sm text-center text-gray-600 dark:text-gray-400">
            Already have an account?{" "}
            <Link to="/login" className="text-primary">
              Login
            </Link>
          </p>
        </div>

        <div
          className="md:block md:w-1/2 bg-cover bg-center"
          style={{ backgroundImage: "url('https://placehold.co/600x800')" }}
        ></div>
      </div>
    </div>
  );
}

export default Register;
