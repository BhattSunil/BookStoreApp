import Cards from "./Cards";
import axios from "axios";
import { useState,useEffect } from "react";
function FreeBook() {

 const [book, setBook] = useState([]);
 useEffect(() => {
   const getBook = async () => {
     try {
       const res = await axios.get(`${import.meta.env.VITE_API_URL}/book`);
;
      const data = res.data.filter((data) => data.category === "free");
       setBook(data);
     } 
     catch(error) {
       console.log(error);
     }
   };
   getBook();
 }, []);



  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white max-w-screen-2xl px-3 container text-black mt-10 mx-auto md:px-20">
        <div className="mb-6">
          <h1 className="font-semibold text-xl md:text-2xl pb-2">
            Free Offered Courses
          </h1>
          <p className="text-sm md:text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusantium veritatis alias pariatur ad dolor repudiandae eligendi
            corporis nulla non suscipit, iure neque earum?
          </p>
        </div>

        {/* ✅ Simple grid instead of slider */}
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {book.map((item) => (
            <Cards item={item} key={item.id} />
          ))}
        </div>
      </div>
    </>
  );
}

export default FreeBook;
