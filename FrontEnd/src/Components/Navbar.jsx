import { useEffect, useState } from "react";
import Login from "./Login";
import { useAuth } from "./context/AuthProvider";
import Logout from "./Logout";
const Navbar = () => {

    const [authUser,setAuthUser]=useAuth()
    console.log(authUser)

  // Theme State
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const element = document.documentElement;

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  // Sticky Navbar
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = (
    <>
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="/course">Course</a>
      </li>
      <li>
        <a href="/contact">Contact</a>
      </li>
      <li>
        <a href="/about">About</a>
      </li>
    </>
  );

  return (
    <div
      className={`md:max-w-screen-2xl container mx-auto md:px-15 px-4 fixed top-0 left-0 right-0 z-50
      bg-white text-black dark:bg-slate-900 dark:text-white
       ${sticky ? "sticky-navbar shadow-md transition-all ease-in-out" : ""}`}
    >
      <div className="navbar">
        {/* Left Section */}
        <div className="navbar-start">
          {/* Dropdown for Mobile */}
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu flex dropdown-content justify-center items-center text-2xl bg-white dark:bg-slate-950 dark:text-white rounded-box z-1 mt-3 w-50 h-60 p-2 shadow"
            >
              {navItems}
            </ul>
          </div>
          <a className="btn btn-ghost md:text-3xl text-2xl">BookStore</a>
        </div>

        {/* Right Section */}
        <div className="navbar-end md:w-auto w-50 overflow-x-hidden space-x-2">
          {/* Desktop Nav */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal text-lg px-1">{navItems}</ul>
          </div>

          {/* Searchbar */}
          <div className="hidden md:flex">
            <label className="rounded-xl input bg-white shadow-md drop-shadow-sm dark:bg-slate-800">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </g>
              </svg>
              <input
                type="search"
                className="grow bg-transparent placeholder-gray-400 px-2 outline-none"
                placeholder="Search Here"
              />
            </label>
          </div>

          {/* Theme Toggle Button */}
          <div>
            <button
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="bg-black rounded-xl p-2 text-white flex items-center justify-center"
            >
              {theme === "light" ? (
                // Sun icon
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="h-6 w-6"
                >
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2"
                    fill="none"
                    stroke="currentColor"
                  >
                    <circle cx="12" cy="12" r="4"></circle>
                    <path d="M12 2v2"></path>
                    <path d="M12 20v2"></path>
                    <path d="m4.93 4.93 1.41 1.41"></path>
                    <path d="m17.66 17.66 1.41 1.41"></path>
                    <path d="M2 12h2"></path>
                    <path d="M20 12h2"></path>
                    <path d="m6.34 17.66-1.41 1.41"></path>
                    <path d="m19.07 4.93-1.41 1.41"></path>
                  </g>
                </svg>
              ) : (
                // Moon icon
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="h-6 w-6"
                >
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                  </g>
                </svg>
              )}
            </button>
          </div>
          {authUser ? (
            <Logout />
          ) : (
            <div className="">
              <a
                className="bg-blue-500 text-white px-3 py-2 rounded-md  duration-300 cursor-pointer hover:bg-blue-700"
                onClick={() =>
                  document.getElementById("my_modal_3").showModal()
                }
              >
                Login
              </a>
              <Login />
            </div>
          )}
          <Login />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
