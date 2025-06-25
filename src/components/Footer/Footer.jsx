const Footer = () => {
  return (
    <footer className="bg-gray-800 py-20">
      <div className="flex items-center justify-center flex-col gap-4 px-4">
        
        <h1 data-aos="zoom-in" data-aos-delay="0" className="text-white text-2xl font-semibold">
          Shop Web
        </h1>

        <p data-aos="fade-left" data-aos-delay="100" className="text-gray-400 text-sm">
          © 2023 Shop Web. All rights reserved.
        </p>

        <div data-aos="fade-left" data-aos-delay="200" className="flex gap-4">
          <a href="#" className="text-gray-400 hover:text-white">Facebook</a>
          <a href="#" className="text-gray-400 hover:text-white">Twitter</a>
          <a href="#" className="text-gray-400 hover:text-white">Instagram</a>
        </div>

        <div data-aos="fade-left" data-aos-delay="300" className="text-gray-400 text-sm flex gap-6 cursor-pointer">
          <p className="hover:text-white">Privacy Policy</p>
          <p className="hover:text-white">Terms of Service</p>
          <p className="hover:text-white">Contact Us</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
