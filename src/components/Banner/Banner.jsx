import BannerImg from "../../assets/Banner.jpeg";
import { GrSecure } from "react-icons/gr";
import { GiFoodTruck } from "react-icons/gi";
import { MdOutlinePayment } from "react-icons/md";
import { BiSolidOffer } from "react-icons/bi";
const Banner = () => {
  return (
    <div className="min-h-[500px] flex justify-center items-center py-12 sm:py-0">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6  items-center">
          {/* image section  */}
          <div data-aos="zoom-in">
            <img
              src={BannerImg}
              alt=""
              className="max-w-[400px] h-[350px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover"
            />
          </div>
          {/* text details sections */}
          <div className="flex flex-col justify-center gap-6 sm:pt-0">
            <h1 data-aos="fade-left" className="text-3xl sm:text-4xl font-bold">
              Winter Sales Up-to 50% off
            </h1>
            <p
              data-aos="fade-left"
              className="text-sm text-gray-500 tracking-wide leading-5"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis, asperiores. Lorem, ipsum. Lorem ipsum dolor sit amet
              consectetur.
            </p>
            <div>
              <div data-aos="fade-right" className="flex items-center gap-4">
                <GrSecure
                  data-aos="fade-right"
                  className="text-4xl h-12 w-12 mb-2 shadow-sm p-4 rounded-full bg-violet-100 dark:bg-violet-400 "
                />
                <p>Quality Products</p>
              </div>
              <div data-aos="fade-right" className="flex items-center gap-4">
                <GiFoodTruck
                  data-aos="fade-right"
                  className="text-4xl h-12 w-12 mb-2 shadow-sm p-4 rounded-full bg-orange-100 dark:bg-orange-400 "
                />
                <p>Fast Delivery</p>
              </div>
              <div data-aos="fade-right" className="flex items-center gap-4">
                <MdOutlinePayment
                  data-aos="fade-right"
                  className="text-4xl h-12 w-12 mb-2 shadow-sm p-4 rounded-full bg-green-100 dark:bg-green-400 "
                />
                <p>Easy Payment Method</p>
              </div>
              <div data-aos="fade-right" className="flex items-center gap-4">
                <BiSolidOffer
                  data-aos="fade-right"
                  className="text-4xl h-12 w-12  mb-2 shadow-sm p-4 rounded-full bg-yellow-100 dark:bg-yellow-400 "
                />
                <p>Fast Delivery</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
