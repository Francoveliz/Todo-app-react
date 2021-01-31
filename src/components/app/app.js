import React, {
  useEffect,
  useState
} from 'react'

import './app.css';
import AddTodo from "../add_todo/add_todo"
import Title from "../title/title"
import DarkModeBtn from "../dark_mode_btn/dark_mode_btn"
import TodoList from "../todo_list/todo_list"
import Header from "../header/header"
import Filters from "../filters/filters"
import {
  TodosProvider
} from "../../context/todos_context"
import "../../assets/scss/color-themes.css"

const App = () => {
  const [isLight, setIsLight] = useState(false)



  useEffect(() => {
    if (isLight) {
      //bg-app
      document.documentElement.style.setProperty("--bg-app", "hsl(0, 0%, 93%)")
      //bg-todo
      document.documentElement.style.setProperty("--bg-todo", "#fff")
      //uncheck-icon-border
      document.documentElement.style.setProperty("--uncheck-icon-border", "hsl(291, 20%, 75%)")
      //header-img-desktop
      document.documentElement.style.setProperty("--header-img-desktop", "url(\"/images/bg-desktop-light.jpg\")")
      //header-img-mobile
      document.documentElement.style.setProperty("--header-img-mobile", "url(\"/images/bg-mobile-light.jpg\")")
      //muted
      document.documentElement.style.setProperty("--muted", "hsl(236, 9%, 61%)")
      //font-color
      document.documentElement.style.setProperty("--font-color", "hsl(235, 19%, 35%)")
      //font-color
      document.documentElement.style.setProperty("--hover", "hsl(204, 70%, 53%)")

    } else {
      //bg-app
      document.documentElement.style.setProperty("--bg-app", "hsl(235, 21%, 11%)")
      //bg-todo
      document.documentElement.style.setProperty("--bg-todo", "hsl(235, 24%, 19%)")
      //uncheck-icon-border
      document.documentElement.style.setProperty("--uncheck-icon-border", "hsl(234, 11%, 52%)")
      //header-img-desktop
      document.documentElement.style.setProperty("--header-img-desktop", "url(\"/images/bg-desktop-dark.jpg\")")
      //header-img-mobile
      document.documentElement.style.setProperty("--header-img-mobile", "url(\"/images/bg-mobile-dark.jpg\")")
      //muted
      document.documentElement.style.setProperty("--muted", "hsl(233, 14%, 35%)")
      //font-color
      document.documentElement.style.setProperty("--font-color", "hsl(234, 39%, 85%)")
      //font-color
      document.documentElement.style.setProperty("--hover", "hsl(204, 70%, 53%)")

    }
  }, [isLight]);

  return ( <
    TodosProvider >
    <
    div className = "app" >
    <
    Header / >
    <
    div className = "flex align_items_center space_between global_margin " >
    <
    Title / >
    <
    DarkModeBtn setIsLight = {
      setIsLight
    }
    isLight = {
      isLight
    }
    /> < /
    div > <
    AddTodo / >
    <
    TodoList / >


    <
    /div> < /
    TodosProvider >
  );
}

export default App;