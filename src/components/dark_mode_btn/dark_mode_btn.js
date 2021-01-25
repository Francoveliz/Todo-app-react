import React, { useState, useEffect } from 'react'
import "./dark_mode_btn.css"
import sunIcon from "../../assets/images/icon-sun.svg"
import moonIcon from "../../assets/images/icon-moon.svg"

const DarkModeBtn = () => {
 const [isDarkMode, setIsDarkMode] = useState(true)

 const clickThemeHandler = () => {
  setIsDarkMode(prevState => !prevState)

 }

 return (

  <img src={isDarkMode ? sunIcon : moonIcon} onClick={clickThemeHandler} alt="dark mode" className="dark-mode-btn rotate-center" />

 )
}

export default DarkModeBtn
