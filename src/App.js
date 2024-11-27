import { nanoid } from "nanoid";

import AddNewTodo from "./components/addnew";
import TodosList from "./components/list";

function App() {
  /*
    1. [x] load the data from the local storage
  */
  const stringItems = localStorage.getItem("items");
  // convert the string version of posts into array
  let list = JSON.parse(stringItems);

  // if list is not found in the localstorage, set empty array
  if (!list) {
    list = [];
  }

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
            onItemDelete={
            (item_id) => {
                // 1. remove the selected post from posts based on the post_id
                let filteredItems = list.filter((item) => item.id !== item_id);
                // 2. update the data back to the local storage using thelocalStorage.setItem()
                let convertedItems = JSON.stringify(filteredItems);

                localStorage.setItem("items", convertedItems);
              }
            }
            onItemTick={(id) => {
              const newList = list.map((item) =>
                item.id === id
                  ? { ...item, isCompleted: !item.isCompleted }
                  : item
              );

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

            }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
