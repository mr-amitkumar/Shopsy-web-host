import Womenimg from "../../assets/women.png";
import Salesimg from "../../assets/sales.png";
import Shoppingimg from "../../assets/shopping.png";
import Slider from "react-slick";

const ImageList = [
  {
    id: 1,
    img: Womenimg,
    title: "Up-to 50% off on women's fashion",
    description:
      "Discover the latest trends on women's fashion with up to 50% off. Shop now and elevate your style with our exclusive collection.",
  },
  {
    id: 2,
    img: Salesimg,
    title: "Exclusive Sales on Top Brands",
    description:
      "Don't miss out on our exclusive sales featuring top brands. Enjoy significant discounts and shop the best deals available only for a limited time.",
  },
  {
    id: 3,
    img: Shoppingimg,
    title: "Shop the Best Deals of the Season",
    description:
      "Explore the best deals of the season with our curated selection. From fashion to electronics, find everything you need at unbeatable prices.",
  },
];

const Hero = () => {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <div className="relative overflow-hidden min-h-[500px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200">
      {/* backgound part */}
      <div className="h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-40 rotate-45 text-center rounded-3xl -z-9"></div>
      {/* hero part */}
      <div className=" container pb-8 sm:pb-0">
        <Slider {...settings}>
          {ImageList.map((data, index) => (
            <div key={data.id || index}>
              <div className="grid grid-cols-1 sm:grid-cols-2">
                {/* text content center  */}
                <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10 ">
                  <h1
                    data-aos="zoom-out"
                    data-aos-duration="500"
                    data-aos-once="true"
                    className="text-3xl sm:text-5xl lg:text-6xl font-bold"
                  >
                    {data.title}
                  </h1>
                  <p
                    data-aos="fade-up"
                    data-aos-delay="100"
                    data-aos-duration="500"
                    data-aos-once="true"
                  >
                    {data.description}
                  </p>
                  <div
                    data-aos="fade-up"
                    data-aos-delay="300"
                    data-aos-duration="500"
                  >
                    <button
                      className="
                  bg-gradient-to-r from-primary to-secondary px-4 duration-200 text-white  py-2 hover:scale-105 rounded-full"
                    >
                      Order Now
                    </button>
                  </div>
                </div>
                {/* Image Section */}
                <div className="order-1 sm:order-2">
                  <div
                    data-aos="zoom-in"
                    data-aos-once="true"
                    className="relative z-10"
                  >
                    <img
                      src={data.img}
                      alt=""
                      className="w-[500px] h-[500px] sm:h-[550px] sm:w-[550px]
                sm:scale-125 object-contain mx-auto  "
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
