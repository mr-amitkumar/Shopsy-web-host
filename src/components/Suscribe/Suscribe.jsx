import { useState } from "react";

const Suscribe = () => {
  const [email, setEmail] = useState("");

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
    <div>
      <div className="container py-12 bg-primary/100 mb-2 dark:bg-gray-500">
        <h1 className="text-center text-white text-2xl sm:text-3xl sm:text-left mb-4">
          Stay tuned with us for latest products..
        </h1>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
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
            className="rounded-md bg-blue-600 py-2 px-4 font-medium text-white"
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Suscribe;

