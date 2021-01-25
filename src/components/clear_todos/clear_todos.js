import React, { useContext } from 'react'
import { TodosContext } from "../../context/todos_context"
import "./clear_todos.css"

function ClearTodos() {
 const { todos, setTodos } = useContext(TodosContext)

 let itemsLeft = todos.filter(el => el.isCheck === false).length

 const clearCompleted = () => {
  let todosAfterRemove = [...todos]
  todosAfterRemove = todosAfterRemove.filter(el => el.isCheck === false)
  setTodos(todosAfterRemove)
 }
 return (
  <div className="clear_todos flex space_between global_margin">
   <p>{`${itemsLeft} items left`}</p>
   <button onClick={clearCompleted}>Clear Completed</button>
  </div>
 )
}

export default ClearTodos
