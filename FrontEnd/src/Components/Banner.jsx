import pic from '/Banner.png'

function Banner() {
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white text-black max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row mt-13 md:w-auto w-auto ">
        <div className="order-2 md:order-1 w-full md:w-1/2  space-y-12">
          <div>
            {" "}
            <h1 className="text-6xl mt-12 font-semibold">
              Hello, welcome here to learn something{" "}
              <span className="text-pink-500">new everyday!!!</span>
            </h1>
            <p className="font-medium font-serif mt-12 text-lg">
              Welcome to our bookstore! A place where every page opens a new
              world and every book helps you learn something new. Explore,
              discover, and enjoy the joy of reading.
            </p>
          </div>
          <div>
            {" "}
            <label className="bg-white  rounded-2xl shadow-md text-black  border-black  input validator">
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
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </g>
              </svg>
              <input type="email" placeholder="mail@site.com" required />
            </label>
            <div className="validator-hint hidden">
              Enter valid email address
            </div>
            <div>
              <button className="btn btn-secondary mt-3 ml-3 text-xl">Subscribe</button>
            </div>
          </div>
        </div>

        <div className=" order-1 w-full md:w-1/2">
          <img className="w-120 h-110 dark:bg-slate-900" src={pic} alt="" />
        </div>
      </div>
    </>
  );
}

export default Banner;
