import React from 'react'
import "./dark_mode_btn.css"
import sunIcon from "../../assets/images/icon-sun.svg"
import moonIcon from "../../assets/images/icon-moon.svg"

const DarkModeBtn = ({ isLight, setIsLight }) => {


 const clickThemeHandler = () => {
  setIsLight(prevState => !prevState)

 }

 return (

  <img src={isLight ? moonIcon : sunIcon} onClick={clickThemeHandler} alt="dark mode" className="dark-mode-btn" />

 )
}

export default DarkModeBtn
