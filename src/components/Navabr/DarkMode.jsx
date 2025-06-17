import LightButton from "../../assets/Website/light-switch.png";
import DarkButton from "../../assets/Website/dark-switch.png";
import { useState, useEffect } from "react";

const DarkMode = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("Theme") ? localStorage.getItem("Theme") : "light"
  );

  useEffect(() => {
    const element = document.documentElement;
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("Theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("Theme", "light");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="relative">
      {/* Show one icon based on current theme */}
      {theme === "light" ? (
        <img
          src={LightButton}
          alt="Light Mode"
          onClick={toggleTheme}
          className="w-20 cursor-pointer drop-shadow transition-all duration-300 px-1 py-1"
        />
      ) : (
        <img
          src={DarkButton}
          alt="Dark Mode"
          onClick={toggleTheme}
          className="w-20 cursor-pointer drop-shadow transition-all duration-300 px-1 py-1"
        />
      )}
    </div>
  );
};

export default DarkMode;
