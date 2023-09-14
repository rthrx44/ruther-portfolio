import React, { useEffect, useState } from "react";
import "./Darktheme.css";
import DarkModeTwoToneIcon from '@mui/icons-material/DarkModeTwoTone';
import LightModeTwoToneIcon from '@mui/icons-material/LightModeTwoTone';

function Darktheme() {
  const [darkMode, setDarkMode] = useState(false);
  
  const switchTheme = () => {
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
          {localStorage.getItem("theme") === "dark" ? (<DarkModeTwoToneIcon onClick={switchTheme} titleAccess="Toggle Darkmode" />) : (<LightModeTwoToneIcon onClick={switchTheme} titleAccess="Toggle Lightmode" />)}
        </button>
      </div>
    </>
  );
}

export default Darktheme;
