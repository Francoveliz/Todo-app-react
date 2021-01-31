import React, { useContext } from 'react'
import Todo from "../todo/todo"
import ClearTodos from "../clear_todos/clear_todos"
import { TodosContext } from "../../context/todos_context"

import "./todo_list.css"

function TodoList() {
 const { todosDisplay } = useContext(TodosContext)
 return (
  <div
   className="todo_list"
   id="todo-list"
  >
   {todosDisplay.map(el => <Todo text={el.todoContent} id={el.id} isCheck={el.isCheck} />)}
   <ClearTodos />
  </div>
 )
}

export default TodoList
