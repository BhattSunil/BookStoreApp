import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-hot-toast"; // ✅ correct import

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/user/login`,
        userInfo
      );
      console.log(res.data);

      if (res.data) {
        toast.success("Logged in Successfully 🎉");
        document.getElementById("my_modal_3").close();

        // Save user & refresh
        setTimeout(() => {
          localStorage.setItem("Users", JSON.stringify(res.data.user));
          window.location.reload();
        }, 1000);
      }
    } catch (err) {
      if (err.response) {
        console.log(err.response.data);
        toast.error("Error: " + err.response.data.message);
      } else {
        toast.error("Something went wrong, please try again.");
      }
    }
  };

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box bg-white text-black dark:bg-slate-900 dark:text-white">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* Close button */}
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => document.getElementById("my_modal_3").close()}
            >
              ✕
            </Link>

            <h3 className="font-bold text-lg">Login</h3>

            {/* Email */}
            <div className="mt-3 flex flex-col space-y-2">
              <span>Email</span>
              <input
                type="email"
                placeholder="Enter Your Email"
                className="w-70 px-3 border rounded-md outline-none py-2"
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
                className="w-70 px-3 border rounded-md outline-none py-2 mb-3"
                {...register("password", { required: true })}
              />
              {errors.password && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>

            {/* Button & Link */}
            <div className="flex justify-around mt-4">
              <button
                type="submit"
                className="bg-pink-500 text-white rounded-md px-5 py-2 hover:bg-pink-700 w-30 mr-5"
              >
                Login
              </button>

              <p>
                Not registered?{" "}
                <Link
                  to="/signup"
                  className="underline text-blue-500 cursor-pointer"
                >
                  SignUp Here
                </Link>
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
