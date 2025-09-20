import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

function About() {
  return (
    <div className="md:max-w-screen-2xl text-black dark:bg-slate-900 dark:text-white  pt-20  bg-white container mx-auto md:px-15 px-4">
<Navbar />
      <div className="dark:bg-slate-900 dark:text-white min-h-screen flex flex-col justify-between">
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16">
          <h1 className="text-3xl font-bold mb-6 text-center">About Us</h1>

          <div className="space-y-6 text-lg leading-relaxed">
            <p>
              Welcome to <span className="font-semibold">BookStore</span> 📚 —
              your one-stop destination for books that inspire, educate, and
              entertain. Our mission is to create a place where every reader can
              find their next favorite book.
            </p>

            <p>
              We believe reading is not just a habit, but a journey of{" "}
              <span className="italic">happy learning and happy living</span>.
              Whether you are a student, a professional, or simply a curious
              reader, we bring books from every corner to your fingertips.
            </p>

            <p>
              At BookStore, we are passionate about spreading knowledge and
              positivity. Our motto is simple:{" "}
              <span className="font-semibold">
                “Happy Reading, Happy Growing.”
              </span>
            </p>

            <p>
              Thank you for being part of our reading family ❤️ Keep exploring,
              keep learning, and most importantly — keep smiling with every page
              you turn.
            </p>
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}

export default About;
