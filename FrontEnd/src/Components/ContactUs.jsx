import React from "react";
import { useForm } from "react-hook-form";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    alert("✅ Message sent successfully!");
    reset();
  };

  return (
    <div className="md:max-w-screen-2xl text-black dark:bg-slate-900 dark:text-white  pt-20  bg-white container mx-auto md:px-15 px-4">
      <Navbar />
      <div className="w-fullh-screen dark:bg-slate-900 dark:text-white bg-white text-black flex flex-col items-center justify-center overflow-hidden px-6">
        <div className="max-w-screen-md w-full">
          {/* Heading */}
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-4 dark:text-white">
            Contact Us
          </h1>

          {/* Subtext */}
          <p className="text-center text-gray-600 dark:text-gray-300 mb-8">
          We'd love to hear from you! Fill out the form and we will get back to
            you soon.
          </p>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-gray-100 dark:bg-slate-800 p-6 rounded-2xl shadow-lg space-y-4"
          >
            {/* Name */}
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                placeholder="Your name"
                {...register("name", {
                  required: "Name is required",
                  minLength: {
                    value: 3,
                    message: "Name must be at least 3 characters",
                  },
                })}
                className="w-full p-3 rounded-lg border dark:border-slate-700 border-gray-300 
                         focus:outline-none focus:ring-2 focus:ring-blue-500 
                         dark:bg-slate-700 dark:text-white"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                placeholder="Your email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Invalid email address",
                  },
                })}
                className="w-full p-3 rounded-lg border dark:border-slate-700 border-gray-300 
                         focus:outline-none focus:ring-2 focus:ring-blue-500 
                         dark:bg-slate-700 dark:text-white"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium mb-1">Message</label>
              <textarea
                placeholder="Your message"
                rows="4"
                {...register("message", {
                  required: "Message is required",
                  minLength: {
                    value: 10,
                    message: "Message must be at least 10 characters",
                  },
                })}
                className="w-full p-3 rounded-lg border dark:border-slate-700 border-gray-300 
                         focus:outline-none focus:ring-2 focus:ring-blue-500 
                         dark:bg-slate-700 dark:text-white"
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.message.message}
                </p>
              )}
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium 
                       py-3 rounded-lg transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Contact;
