// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import LightMode from "../assets/LightMode.jpg";
import DarkModebutton from "../assets/DarkModebutton.jpg";
function DarkMode() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const element = document.documentElement;
  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);
  return (
    <div className="relative">
      <img
        src={DarkModebutton}
        alt=""
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className={`h-10 
     cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all
      rounded-full duration-300 absolute right-0 z-0 ${
        theme === "light" ? "opacity-0" : "opacity-100"
      } `}
      />
      <img
        src={LightMode}
        alt=""
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className={`h-10 
     cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all
      rounded-full duration-300 ${
        theme === "dark" ? "opacity-0" : "opacity-100"
      }`}
      />
    </div>
  );
}

export default DarkMode;
