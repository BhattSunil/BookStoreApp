function Cards({item}) {
  console.log(item)
  return (
    <>
      <div>
        <div className="dark:bg-slate-900 dark:text-white card bg-white font-bold text-lg mt-3 p-4  w-96 shadow-sm hover:scale-105 duration-200">
          <figure>
            <img src={item.image} alt="Shoes" />
          </figure>
          <div className="card-body text-lg">
            {item.name}
            <h2 className="card-title">
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>{item.title}</p>

            <div className="card-actions  justify-between">
              <div className="badge badge-outline">${item.price}</div>
              <div className="cursor-pointer px-5 py-4 text-lg  rounded-2xl  badge badge-outline hover:bg-pink-500 hover:text-white space-x-14 ">
                Buy Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards
