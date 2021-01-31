import React, {
   createContext,
   useState,
   useEffect
} from 'react'

export const TodosContext = createContext()

export const TodosProvider = ({
   children
}) => {
   const [todos, setTodos] = useState([{
      todoContent: "Ir al gymnasio",
      id: 1,
      isCheck: false
   },
   {
      todoContent: "Hacer las compras",
      id: 2,
      isCheck: false
   },
   {
      todoContent: "llamar al electricista",
      id: 3,
      isCheck: true
   },
   {
      todoContent: "Ir al médico",
      id: 4,
      isCheck: false
   },
   {
      todoContent: "Sacar turno para el dentista",
      id: 5,
      isCheck: true
   },
   {
      todoContent: "Hacer el desayuno",
      id: 6,
      isCheck: true
   },
   {
      todoContent: "Llamar a Julia",
      id: 7,
      isCheck: false
   },
   ])

   const [todosDisplay, setTodosDisplay] = useState([])

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

   return (<
      TodosContext.Provider value={
         {
            todos,
            setTodos,
            todosDisplay,
            allFilter,
            activeFilter,
            completedFilter
         }
      } > {
         children
      } <
      /TodosContext.Provider>
   )
}