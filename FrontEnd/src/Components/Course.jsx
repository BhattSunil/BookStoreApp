import { useState } from 'react';
import Cards from './Cards';
import {Link} from 'react-router-dom'
import { useEffect } from 'react';
import axios from 'axios'
function Course() {

  const [book,setBook]=useState([])
  useEffect(()=>{
      const getBook =async ()=>{
        try{
         const res = await axios.get("http://localhost:4001/book");
         console.log(res.data)
         setBook(res.data)
        }catch(error){
          console.log(error)

        }
      } 
      getBook();
  },[])
  return (
    <>
      <div className="md:max-w-screen-2xl text-black dark:bg-slate-900 dark:text-white  pt-20  bg-white container mx-auto md:px-15 px-4">
        <div className="mt-15 items-center justify-center text-center">
          {" "}
          <h1 className="text-4xl">
            We're delighted to have you{" "}
            <span className="text-pink-500"> here!</span>{" "}
          </h1>
          <p className="mt-10 text-lg">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum
            tempora sequi minus dicta quis aperiam animi adipisci illum officia
            reprehenderit fugit, ad delectus sint ipsum. Eum at cupiditate,
            molestias debitis numquam nisi ratione, excepturi hic, molestiae est
            reiciendis. Cum, inventore?
          </p>
          <Link to="/">
            <button className="bg-pink-500 text-white px-4 py-2  rounded-md hover:bg-pink-700 mt-6">
              Back
            </button>
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {book.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course
