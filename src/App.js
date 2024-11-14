import { useState } from "react";
import { nanoid } from "nanoid";

import AddNewTodo from "./components/addnew";
import TodosList from "./components/list";

function App() {
  const [list, setList] = useState([]);


  return (
    <div className="container">
      <div
        className="card rounded shadow-sm mx-auto my-5 "
        style={{
          maxWidth: "500px",
        }}
      >
        <div className="card-body">
          <h3>My Todo List</h3>

          <TodosList
            list={list}
            onItemDelete={(id) => {
              const newList = list.filter((s) => s.id !== id);
              setList(newList);
            }}
            onItemTick={(id) => {
              const newList = list.map((item) =>
                item.id === id
                  ? { ...item, isCompleted: !item.isCompleted }
                  : item
              );
              setList(newList);
            }}
          />

          <AddNewTodo
            onNewNameAdded={(itemName) => {
              const newList = [...list];
              newList.push({
                id: nanoid(),
                text: itemName,
                isCompleted: false,
              });
              setList(newList);
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
