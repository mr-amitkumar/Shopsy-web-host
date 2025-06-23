const Suscribe = () => {
  return (
    <div>
      <div
        className=" flex items-center gap-4 justify-center flex-col  bg-primary/100 w-[100%] min-h-[150px] mb-5 dark:bg-gray-500 sm:flex-row"
      >
        <h1
          data-aos="fade-left"
          className="font-semibold text-2xl dark:text-white"
        >
          Suscribe to get latest product
        </h1>
        <div className="flex gap-4 align-middle justify-center">
          <input
          data-aos="fade-right"
              data-aos-delay="100"
            type="email"
            placeholder="Enter your email"
            name="email"
            autoComplete="off"
            id="email"
            className="p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-600 dark:bg-gray-900 mt-2"
          />
          <button 
          data-aos="zoom-in"
              data-aos-delay="100" className="bg-blue-500  text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300 mt-2">
            Suscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Suscribe;
