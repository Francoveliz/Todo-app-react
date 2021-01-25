import React, { useContext } from 'react'
import "./filters.css"
import { TodosContext } from "../../context/todos_context"

function Filters() {
 const { allFilter, activeFilter, completedFilter } = useContext(TodosContext)

 return (
  <div className="filters flex global_margin">
   <button onClick={allFilter}>All</button>
   <button onClick={activeFilter}>Active</button>
   <button onClick={completedFilter} >Completed</button>
  </div>
 )
}

export default Filters
