import React, { useState, useContext } from 'react'
import { TodosContext } from "../../context/todos_context"
import iconCheck from "../../assets/images/icon-check.svg"
import nextId from "react-id-generator";
import "./add_todo.css"


//todoContent
const AddTodo = () => {
 const [todoText, setTodoText] = useState("")
 const { setTodos } = useContext(TodosContext)

 const todoTextHandler = e => {
  setTodoText(e.target.value)
 }

 const addTodo = () => {
  todoText !== "" && setTodos(prevTodos => [...prevTodos, { todoContent: todoText, id: nextId(), isCheck: false }])
  setTodoText("")
 }

 const submitHandler = e => {
  e.preventDefault()
  addTodo()
 }

 return (
  <div className="add_todo global_margin">
   {
    todoText !== "" ? <img src={iconCheck} className="icon_check" onClick={addTodo} /> : <div className="icon_uncheck" />
   }
   <form onSubmit={submitHandler}>
    <input type="text" value={todoText} onChange={todoTextHandler} placeholder="Create a new todo" className="input_text" />
    <input type="submit" className="hidden" />
   </form>
  </div>
 )
}

export default AddTodo
