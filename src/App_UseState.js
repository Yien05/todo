import { useState } from "react";
import { nanoid } from "nanoid";
import AddNewForm from "./components/addnew";
import TodoList from "./components/list";
function App() {
  // load the data from the local storage
  let todolist = localStorage.getItem("todolist");
  todolist = JSON.parse(todolist);
  // if todolist is null, set it as empty array
  if (!todolist) {
    todolist = [];
  }
  // set the data into the state as default state
  const [todos, setTodos] = useState(todolist);
  const updateLocalStorage = (newTodos) => {
    const convertedTodos = JSON.stringify(newTodos);
    localStorage.setItem("todolist", convertedTodos);
  };
  return (
    <div className="App">
      <div
        className="card rounded shadow-sm"
        style={{
          maxWidth: "500px",
          margin: "60px auto",
        }}
      >
        <div className="card-body">
          <h3 className="card-title mb-3">My Todo List</h3>
          <TodoList
            todos={todos}
            onItemUpdate={(id, newIsCompleted) => {
              // method #1: use .map
              const newTodos = todos.map((item) => {
                // modify the isCompleted if ID is match
                if (item.id === id) {
                  item.isCompleted = newIsCompleted;
                }
                return item; // always return the item in .map
              });
              // method #2: use .find
              // clone the existing todos
              // const newTodos = [...todos];
              // const item = newTodos.find((t) => t.id === id);
              // // modify the isCompleted
              // if (item) {
              //   // only update if item exists
              //   item.isCompleted = newIsCompleted;
              // }
              setTodos(newTodos);
              // save the newTodos into local storage
              updateLocalStorage(newTodos);
            }}
            onItemDelete={(id) => {
              // filter out the item with the selected id
              const newTodos = todos.filter((t) => t.id !== id);
              // update the existing state
              setTodos(newTodos);
              // save the newTodos into local storage
              updateLocalStorage(newTodos);
            }}
          />
          <AddNewForm
            onNewItemAdded={(newItem) => {
              // clone the exisiting todos
              const newTodos = [...todos];
              newTodos.push({
                id: nanoid(),
                text: newItem,
                isCompleted: false,
              });
              // update the todos state
              setTodos(newTodos);
              // save the newTodos into local storage
              updateLocalStorage(newTodos);
            }}
          />
        </div>
      </div>
    </div>
  );
}
export default App;