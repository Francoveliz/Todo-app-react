import './app.css';
import AddTodo from "../add_todo/add_todo"
import Title from "../title/title"
import DarkModeBtn from "../dark_mode_btn/dark_mode_btn"
import TodoList from "../todo_list/todo_list"
import Header from "../header/header"
import Filters from "../filters/filters"
import { TodosProvider } from "../../context/todos_context"

const App = () => {
  return (
    <TodosProvider>
      <div className="app">
        <Header />
        <div className="flex align_items_center space_between global_margin ">
          <Title />
          <DarkModeBtn />
        </div>
        <AddTodo />
        <TodoList />
        <Filters />

      </div>
    </TodosProvider >
  );
}

export default App;
