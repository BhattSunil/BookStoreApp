import Navbar from "../Navbar";
import Banner from "../Banner";
import FreeBook from "../FreeBook";
import Footer from "../Footer";
import ContactUs from "../ContactUs";
function HomePage() {
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Navbar />
        <Banner />
        <FreeBook />
        <Footer />
      </div>
    </>
  );
}

export default HomePage;
