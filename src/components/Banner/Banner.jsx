import BannerImg from "../../assets/Banner.jpeg";
import { GrSecure } from "react-icons/gr";
import { GiFoodTruck } from "react-icons/gi";
import { MdOutlinePayment } from "react-icons/md";
import { BiSolidOffer } from "react-icons/bi";

const Banner = () => {
  return (
    <div className="min-h-[500px] flex justify-center items-center py-12 sm:py-0 overflow-x-hidden">
      <div className="container px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
          {/* Image Section */}
          <div data-aos="zoom-in">
            <img
              src={BannerImg}
              alt="Banner"
              className="max-w-[400px] sm:max-w[300px] sm:w-[250px] sm:h-[200px] md:w-[300px] md:h-[200px] mx-auto shadow-xl object-cover rounded-lg"
            />
          </div>

          {/* Text Section */}
          <div className="flex flex-col justify-center gap-6 sm:pt-0">
            <h1 data-aos="fade-left" className="text-3xl sm:text-4xl font-bold">
              Winter Sales Up-to 50% Off
            </h1>
            <p
              data-aos="fade-left"
              className="text-sm text-gray-500 tracking-wide leading-6"
            >
              Discover our premium range of winter products with unbeatable prices. 
              Hurry up! Offers valid for a limited time only.
            </p>

            {/* Features */}
            <div className="space-y-3">
              <div className="flex items-center gap-4" data-aos="fade-right">
                <GrSecure className="text-3xl h-12 w-12 p-3 rounded-full bg-violet-100 dark:bg-violet-400 shadow-sm" />
                <p className="text-base font-medium">Quality Products</p>
              </div>
              <div className="flex items-center gap-4" data-aos="fade-right">
                <GiFoodTruck className="text-3xl h-12 w-12 p-3 rounded-full bg-orange-100 dark:bg-orange-400 shadow-sm" />
                <p className="text-base font-medium">Fast Delivery</p>
              </div>
              <div className="flex items-center gap-4" data-aos="fade-right">
                <MdOutlinePayment className="text-3xl h-12 w-12 p-3 rounded-full bg-green-100 dark:bg-green-400 shadow-sm" />
                <p className="text-base font-medium">Easy Payment Methods</p>
              </div>
              <div className="flex items-center gap-4" data-aos="fade-right">
                <BiSolidOffer className="text-3xl h-12 w-12 p-3 rounded-full bg-yellow-100 dark:bg-yellow-400 shadow-sm" />
                <p className="text-base font-medium">Special Offers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
