import React, { useEffect, useState } from "react";
import "./Darktheme.css";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

function Darktheme() {
  const [darkMode, setDarkMode] = useState(false);
  
  const ActiveMode = () => {
    setDarkMode(!darkMode);
    if (darkMode === true) {
      document.body.classList.add("light");
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
    if (darkMode === false) {
      document.body.classList.add("dark");
      document.body.classList.remove("light");
      localStorage.setItem("theme", "dark");
    }
  };

  useEffect(() => {
    if (localStorage.getItem("theme") === "light") {
      document.body.classList.add("light");
    } else if (localStorage.getItem("theme") === "dark") {
      document.body.classList.add("dark");
      setDarkMode(!darkMode);
    }
  },[]);

  return (
    <>
      <div className="dark_toggle">
        <button className='theme_toggle'>
          {localStorage.getItem("theme") === "dark" ? (<DarkModeIcon onClick={ActiveMode} />) : (<LightModeIcon onClick={ActiveMode} />)}
        </button>
      </div>
    </>
  );
}

export default Darktheme;
