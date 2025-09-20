import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import Navbar from "./Navbar";

function Signup() {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };
    await axios
      .post(`${import.meta.env.VITE_API_URL}/user/signup`, userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("Signup Successfully");
          navigate(from, { replace: true });
        }
        localStorage.setItem("Users", JSON.stringify(res.data.user));
      })
      .catch((err) => {
        if (err.response) {
          console.log(err);
          toast.error("Error: " + err.response.data.message);
        }
      });
  };

  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Navbar />
        {/* Full screen container for centering */}
        <div className="flex items-center justify-center min-h-screen bg-white text-black dark:bg-slate-900 dark:text-white">
          {/* Card */}
          <div className="border-[2px] shadow-md p-5 rounded-xl w-full max-w-sm relative">
            <div className="bg-white text-black dark:bg-slate-900 dark:text-white">
              {/* Close Button */}
              <form onSubmit={handleSubmit(onSubmit)}>
                <Link to="/">
                  <button
                    type="button"
                    className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                  >
                    ✕
                  </button>
                </Link>

                {/* Signup Heading */}
                <h3 className="font-bold text-lg text-center">SignUp</h3>

                {/* Name */}
                <div className="mt-3 flex flex-col space-y-2">
                  <span>Name</span>
                  <input
                    type="text"
                    placeholder="Enter Your Name"
                    className="w-full px-3 border rounded-md outline-none py-2"
                    {...register("fullname", { required: true })}
                  />
                  {errors.fullname && (
                    <span className="text-red-500">This field is required</span>
                  )}
                </div>

                {/* Email */}
                <div className="mt-3 flex flex-col space-y-2">
                  <span>Email</span>
                  <input
                    type="text"
                    placeholder="Enter Your Email"
                    className="w-full px-3 border rounded-md outline-none py-2"
                    {...register("email", { required: true })}
                  />
                  {errors.email && (
                    <span className="text-red-500">This field is required</span>
                  )}
                </div>

                {/* Password */}
                <div className="mt-3 flex flex-col space-y-2">
                  <span>Password</span>
                  <input
                    type="password"
                    placeholder="Enter Your Password"
                    className="w-full px-3 border rounded-md outline-none py-2 mb-3"
                    {...register("password", { required: true })}
                  />
                  {errors.password && (
                    <span className="text-red-500">This field is required</span>
                  )}
                </div>

                {/* Buttons */}
                <div className="flex flex-col items-center mt-4 space-y-3">
                  <button className="bg-pink-500 text-white rounded-md px-5 py-2 hover:bg-pink-700 w-full cursor-pointer">
                    SignUp
                  </button>

                  <p>
                    Already have an account?{" "}
                    <button
                      type="button"
                      className="underline text-blue-500 cursor-pointer"
                      onClick={() =>
                        document.getElementById("my_modal_3").showModal()
                      }
                    >
                      Login
                    </button>
                  </p>
                </div>
              </form>
              {/* Move Login outside the form to avoid nested forms */}
              <Login />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
