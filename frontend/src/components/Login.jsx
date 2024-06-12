import React, { useState } from "react";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
      };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    if (!formData.email) {
      newErrors.email = "email is required";
      isValid = false;
    }

    if (!formData.password) {
      newErrors.password = "password is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
    const url = "http://127.0.0.1:8000/api/login/";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    };
    fetch(url, options)
      .then((res) => {
        console.log(res);
        if(!res.ok){
          return res.json().then(message=>{
            console.log(message)

          })

        }
        return res.json()
              })
      .then((data) => console.log(data))
      .catch((error) => console.error("not working:", error));
      if (validateForm()) {
        console.log("Form data:", formData);
        setSubmitted(true);
      } else {
      }
    };


  const isFormValid = Object.keys(errors).length === 0;

  return (
    <div className="container mx-auto  flex justify-center my-9">
    
        <form onSubmit={handleSubmit}>

          <div className="container mx-auto ">
            <div className=" container justify-center my-[3em]">
              <h1 className="text-6xl font-normal">Welcome back! </h1>
           
            </div>

            <p>email</p>
            <input
              type="text"
              className="py-3 px-[10em] bg-neutral-100  rounded-full flex-1 shadow-lg"
              name="email"
              onChange={handleInputChange}
            />
            {errors.email && (
              <div className="error text-red-700">{errors.email}</div>
            )}
          </div>

          <div>
            <p>password:</p>
            <input
              className="py-3 px-[10em] bg-neutral-100  rounded-full flex-1 shadow-lg"
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleInputChange}
            />
            {errors.password && (
              <div className="error text-red-700">{errors.password}</div>
            )}
          </div>    
<div className="my-[3em]">
          <button
            type="submit"
            disabled={!isFormValid}
            className="bg-red-600 py-3  px-[15em] rounded-full shadow-lg text-black font-bold"
          >
            Login
          </button>
          </div>
          <div className="justify-center text-center">
            <p>Or</p>
          </div>

          <div className="flex justify-center">
            <img
              className="w-[10vh] outline-1"
              src="src/assets/images/google.jpg"
            />
            <img
              className="w-[10vh]"
              src="src/assets/images/facebook-color-icon-2048x2048-bfly1vxr.png"
            />
            <img
              className="w-[10vh]"
              src="src/assets/images/circle-linkedin-512.webp"
            />
          </div>
          <div className="flex text-center  text-[20px] my-2">
            <p>Dont Have An Account ?</p>
            <a href="/auth" className="text-amber-300">
              Sign Up
            </a>
          </div>
          <div className="flex justify-end absolute top-8 right-10 z-[-1]">
            <img src="src/assets/images/istockphoto-1323623361-612x612.jpg" />
          </div>
        </form>
      {/* )} */}
    </div>
  );
}
export default Login