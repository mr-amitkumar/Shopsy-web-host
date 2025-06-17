import img1 from "../../assets/women/ethnic.jpeg";
import img2 from "../../assets/women/western.jpg";
import img3 from "../../assets/women/googles.jpg";
import img4 from "../../assets/women/t-shirt.jpg";
import { FaStar } from "react-icons/fa6";

const ProductsData = [
  {
    id: 1,
    img: img1,
    title: "Women Ethnic",
    ratting: 5.1,
    author: "white",
    aosDelay: "0",
  },
  {
    id: 2,
    img: img2,
    title: "Women Westerns",
    ratting: 4.3,
    author: "red",
    aosDelay: "0",
  },
  {
    id: 3,
    img: img3,
    title: "Googles",
    ratting: 4.7,
    author: "brown",
    aosDelay: "400",
  },
  {
    id: 4,
    img: img4,
    title: "Printed T-shirts",
    ratting: 4.5,
    author: "pink",
    aosDelay: "800",
  },
  {
    id: 5,
    img: img4,
    title: "Oversized T-shirts",
    ratting: 4.59,
    author: "blue",
    aosDelay: "800",
  },
];

const Product = () => {
  return (
    <div className="mt-14 mb-12">
      <div className="container">
        {/* header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            Top Selling Products For You
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold ">
            Products
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error,
            tempore!
          </p>
        </div>
        {/* body section */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
            {/* Card Section */}
            {ProductsData.map((data) => (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                key={data.id}
                className="space-y-3 "
              >
                <img
                  src={data.img}
                  alt=""
                  className="h-[220px] w-[150px] object-cover rounded-md"
                />
                <div>
                  <h3 className="font-semibold">{data.title}</h3>
                  <p className="text-sm text-gray-600">{data.author}</p>
                  <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-400" />
                    <span>{data.ratting}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div
          data-aos="fade-up"
          data-aos-delay="100"
          className="flex items-center justify-center mt-10">
            <button className="bg-primary py-1 px-4 rounded-full text-white hover:text-black duration-300">
              see all Product
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
