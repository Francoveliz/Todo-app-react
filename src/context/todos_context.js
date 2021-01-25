import React,{createContext,useState,useEffect} from 'react'

export const TodosContext = createContext()

export const TodosProvider = ({ children }) => {
 const [todos, setTodos] = useState([])
 const [todosDisplay,setTodosDisplay] = useState([])

 const allFilter = () => {
  setTodosDisplay([...todos])
 }

 const activeFilter = () => {
  setTodosDisplay(todos.filter(el => el.isCheck === false))
 }

 const completedFilter = () => {
    setTodosDisplay(todos.filter(el => el.isCheck === true))
 }
 
 useEffect(() => {
  setTodosDisplay([...todos])
 }, [todos])

 return (
  <TodosContext.Provider value={{todos,setTodos,todosDisplay,allFilter,activeFilter,completedFilter}}>
   {children}
  </TodosContext.Provider>
 )}
