import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [formError, setFormError] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validate(); 
    const url = 'http://127.0.0.1:8000/api/registration/';
    const options = {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    };
    fetch(url, options)
      .then(res => {
        console.log(res);
        if (!res.ok) {
          return res.json().then(message => {
            setFormError(message.email[""]);
          });
        }
        return res.json();
      })
      .then(data => {
        console.log(data);
        if (data !== undefined) {
          navigate('/Login');
        }
      })
      .catch(error => console.error('error registering user:', error));
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.firstname) {
      newErrors.firstname = "First name is required";
    }
    if (!formData.lastname) {
      newErrors.lastname = "Last name is required";
    }
    if (!formData.email) {
      newErrors.email = "Email is required";
    }
    if (!formData.password) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);
  };

  return (
      <div className="container mx-auto  flex justify-center my-9 ">
        <h1 className="text-6xl font-normal ">Sign up here</h1>
      
        <div className="container  my-8 ">
           
            {formError && <p className="text-red-700">{formError}</p>}
            <form onSubmit={handleSubmit}>
             
                <div className="my-[3em]">
                <p>firstname</p>
                  <input
                    className="border py-3 px-[10em] bg-white  rounded-full flex-1 shadow-lg"
                    type="text"
                    name="firstname"
                    placeholder="Enter your first name"
                    onChange={handleInputChange}
                  />
                  {errors.firstname && <p className="text-red-700">{errors.firstname}</p>}
                </div>

                <div className="my-[3em]">
                <p>lastname</p>
                  <input
                    className="border py-3 px-[10em] bg-white  rounded-full flex-1 shadow-lg"
                    type="text"
                    name="lastname"
                    placeholder="Enter your last name"
                    onChange={handleInputChange}
                  />
                  {errors.lastname && <p className="text-red-700">{errors.lastname}</p>}
                </div>
             
            
                <div className="my-[3em]">
                <p>email</p>
                  <input
                    className="border py-3 px-[10em] bg-white  rounded-full flex-1 shadow-lg "
                    type="text"
                    name="email"
                    placeholder="Enter your email"
                    onChange={handleInputChange}
                  />
                  {errors.email && <p className="text-red-700">{errors.email}</p>}
                </div>

           
                <div className="my-[3em]">
                <div>
                  <p>password</p>
                  <input
                    className="border py-3 px-[10em] bg-white  rounded-full flex-1 shadow-lg"
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={handleInputChange}
                  />
                  {errors.password && <p className="text-red-700">{errors.password}</p>}
                </div>

              </div>
              <button
                className="bg-red-600 py-3  px-[15em] rounded-full shadow-lg text-black font-bold"
                type="submit"
              >
               sign up
              </button>

              <div className="align-middle">
                <p>Or</p>
                </div>

                <button
                className="bg-red-600 py-3  px-[12em] rounded-full shadow-lg text-black font-bold"
                  onClick={(e) => handleLogin(e)}

                >
                 sign up with google
                </button>

                <div className="flex   text-[20px] my-2">
                <p>Have An Account ?</p>
                <a href="/login" className="text-amber-300">
                  Login  
                </a>
              </div>

              <div className="flex justify-end absolute top-8 right-10 z-[-1]">
                    <img src="src/assets/images/online-form-application-filling-on-600nw-2265375031.webp"/>
                </div>

            </form>
            </div>
          </div>
    )
}
export default Signup