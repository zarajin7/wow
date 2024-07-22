import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate(); 
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.email) tempErrors.email = "Email Address is required";
    if (!formData.password) tempErrors.password = "Password is required";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      const url = "http://127.0.0.1:8000/api/login/";
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      };

      try {
        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error("Failed to authenticate");
        }
        const user = await response.json();
        console.log("Login successful. User:", user);
        navigate("/don");
      } catch (error) {
        console.error("Error logging in:", error);
        setErrorMessage("Invalid email or password. Please try again.");
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-purple-600 p-6 rounded-lg shadow-lg text-center">
        <h2 className="text-white text-2xl mb-4">Sign In</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            className="w-full p-2 mb-4 rounded-lg"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="text-red-500 mt-1">{errors.email}</p>}
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full p-2 mb-4 rounded-lg"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && (
            <p className="text-red-500 mt-1">{errors.password}</p>
          )}
          {errorMessage && <p className="text-red-500 mt-1">{errorMessage}</p>}
          <button
            type="submit"
            className="bg-gray-800 text-white px-8 py-2 rounded-lg"
          >
            Login
          </button>
        </form>
        <p className="text-white mt-4">
          Don’t have an account?{" "}
          <Link to="/signup" className="underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;