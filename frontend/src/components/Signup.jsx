import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate(); 
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.first_name) tempErrors.first_name = "First Name is required";
    if (!formData.last_name) tempErrors.last_name = "Last Name is required";
    if (!formData.email) tempErrors.email = "Email Address is required";
    if (!formData.password) tempErrors.password = "Password is required";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (validate()) {
      const url = "http://127.0.0.1:8000/api/registration/";
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      };

      fetch(url, options)
        .then((res) => {
          if (!res.ok) {
            throw new Error("Failed to register user.");
          }
          return res.json();
        })
        .then((data) => {
          console.log(data);
          if (
            data.error &&
            data.error === "user with this email already exists."
          ) {
            setErrors({ email: data.error });
          } else {
            setErrors({});
            navigate("/login");
          }
        })
        .catch((error) => console.error("Error registering user:", error));
    } else {
      console.log("Form validation failed.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-amber-300 p-6 rounded-lg shadow-lg text-center">
        <h2 className="text-black text-2xl mb-4">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="first_name"
            placeholder="First Name"
            className="w-full p-2 mb-4 rounded-lg"
            value={formData.first_name}
            onChange={handleInputChange}
          />
          {errors.first_name && (
            <p className="text-red-700 mt-1">{errors.first_name}</p>
          )}
          <input
            type="text"
            name="last_name"
            placeholder="Last Name"
            className="w-full p-2 mb-4 rounded-lg"
            value={formData.last_name}
            onChange={handleInputChange}
          />
          {errors.last_name && (
            <p className="text-red-700 mt-1">{errors.last_name}</p>
          )}
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            className="w-full p-2 mb-4 rounded-lg"
            value={formData.email}
            onChange={handleInputChange}
          />
          {errors.email && <p className="text-red-700 mt-1">{errors.email}</p>}
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full p-2 mb-4 rounded-lg"
            value={formData.password}
            onChange={handleInputChange}
          />
          {errors.password && (
            <p className="text-red-700 mt-1">{errors.password}</p>
          )}
          <button
            type="submit"
            className="bg-red-700 text-black px-4 py-2 rounded-lg"
          >
            {" "}
            Register{" "}
          </button>
        </form>
        <p className="text-black mt-4">
          Already have an account?{" "}
          <Link to="/login" className="underline">
            {" "}
            Login{" "}
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
