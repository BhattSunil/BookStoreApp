import Course from "../Components/Course"
import Footer from "../Components/Footer"
import Navbar from "../Components/Navbar"

function Courses() {

  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Navbar />
        <div className="min-h-screen">
          {" "}
          <Course />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Courses
