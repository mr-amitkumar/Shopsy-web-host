import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Suscribe = () => {
  const [email, setEmail] = useState("");

  useEffect(() => {
    AOS.init({
      duration: 800,  // Smooth animation
      once: true,     // Only animate once
      offset: 100     // Trigger slightly before in view
    });
  }, []);

  const handleReset = () => {
    setEmail("");
  };

  const handleSubmit = () => {
    if (email.trim() !== "") {
      alert("You have successfully subscribed with " + email);
      handleReset();
    } else {
      alert("Please enter a valid email.");
    }
  };

  return (
    <div className="w-full">
      <div className="container py-12 bg-primary/100 mb-2 dark:bg-gray-500 rounded-md">
        <h1
          className="text-center text-white text-2xl sm:text-3xl sm:text-left mb-4"
          data-aos="fade-up"
        >
          Stay tuned with us for latest products..
        </h1>

        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          data-aos="fade-up"
        >
          <input
            type="text"
            name="email"
            id="email"
            autoComplete="off"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full sm:w-[400px] md:w-[500px] lg:w-[600px] py-2 px-4 text-black dark:text-white dark:bg-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-primary placeholder:text-gray-500"
          />
          <button
            onClick={handleSubmit}
            data-aos="fade-up"
            data-aos-delay="200"
            className="rounded-md bg-blue-600 py-2 px-4 font-medium text-white mt-2 sm:mt-0"
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Suscribe;
