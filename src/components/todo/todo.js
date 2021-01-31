import React, {
 useState,
 useContext
} from 'react'
import iconCheck from "../../assets/images/icon-check.svg"
import iconCross from "../../assets/images/icon-cross.svg"
import {
 TodosContext
} from "../../context/todos_context"
import "./todo.css"


const Todo = ({
 text,
 id,
 isCheck
}) => {
 const {
  todos,
  setTodos
 } = useContext(TodosContext)


 const checkHandler = () => {
  let newTodos = [...todos]
  newTodos = newTodos.map(el => {
   if (el.id === id) {
    el.isCheck = !el.isCheck
   }
   return el
  })
  setTodos(newTodos)
 }

 const deleteTodo = () => {
  setTodos(prevTodos => prevTodos.filter(el => el.id !== id))
 }

 return ( <
  div className = "todo global_margin" > {
   isCheck ? < img src = {
    iconCheck
   }
   className = "icon_check"
   onClick = {
    checkHandler
   }
   /> : <div className="icon_uncheck" onClick={checkHandler} / >
  } <
  p className = {
   `todo_text ${isCheck && "crossed_text"}`
  } > {
   text
  } < /p> <
  img src = {
   iconCross
  }
  className = "icon_cross"
  onClick = {
   deleteTodo
  }
  /> < /
  div >
 )
}

export default Todo