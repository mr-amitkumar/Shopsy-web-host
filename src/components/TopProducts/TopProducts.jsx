import img1 from "../../assets/Shirts/tshirt.png";
import img2 from "../../assets/Shirts/tshirt-1.png";
import img3 from "../../assets/Shirts/tshirt-2.png";
import { FaStar } from "react-icons/fa6";
const ProductData = [
  {
    id: 1,
    img: img1,
    title: "White T-shirt",
    description:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    rating: 4.8,
  },

  {
    id: 2,
    title: "Polo T-shirt",
    img: img2,
    description:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    rating: 4.5,
  },

  {
    id: 3,
    img: img3,
    title: "Printed T-shirt",
    description:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    rating: 4.7,
  },
];

const TopProducts = () => {
  return (
    <div>
      <div className="container">
        {/* header section */}
        <div className="text-left mb-24">
          <p data-aos="fade-up" className="text-sm text-primary">
            Top Rated Products For You
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold ">
            Best Products
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error,
            tempore!
          </p>
        </div>
        {/* Body section */}
        <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-[4.5rem] place-items-center">
          {ProductData.map((data) => (
            <div
              key={data.id}
              data-aos="zoom-in"
              className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary
               hover:text-white relative shadow-xl duration-400 group max-w-[300px]  mt-10 "
            >
              {/* image section */}

              <div className="h-[100px]">
                <img
                  src={data.img}
                  alt=""
                  className="max-w-[140px ] block mx-auto trasnform -translate-y-20 group-hover:scale-105 duration-400 drop-shadow-md"
                />
              </div>
              {/* details sections */}
              <div className="p-4 text-center">
                <div className="w-full flex items-center justify-center gap-1">
                  <FaStar className="text-yellow-400" />
                  <FaStar className="text-yellow-400" />
                  <FaStar className="text-yellow-400" />
                  <FaStar className="text-yellow-400" />
                  <FaStar className="text-yellow-400" />
                </div>
                <h1 className="text-xl font-bold">{data.title}</h1>
                <p className="text-gray-600 group-hover:text-white duration-300 text-sm line-clamp-2   ">
                  {data.description}
                </p>
                <button
                  className="bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:text-black hover:bg-white"
                  // ocClick={handleOrderPopup}
                >
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopProducts;
