
import About from "./Components/About";
import ContactUs from "./Components/ContactUs";
import HomePage from "./Components/Home/HomePage";
import Signup from "./Components/Signup";
import Courses from "./courses/Courses";
import { Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./Components/context/AuthProvider";
function App() {
  
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/course"
            element={authUser ? <Courses /> : <Navigate to="/signup" />}
          />
          <Route path="/signup" element={<Signup />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
}

export default App;
