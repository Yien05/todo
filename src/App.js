import AddNewTodo from "./components/addnew";
import TodosList from "./components/list";

function App() {
  const list = [
    {
      id: 1,
      text: "Task 1",
      isCompleted: true
    },
    {
      id: 2,
      text: "Task 2",
      isCompleted: false
    },
    {
      id: 3,
      text: "Task 3",
      isCompleted: false
    }
  ];
  return (
    <div className="container">
      <div
        className="card rounded shadow-sm mx-auto my-5 "
        style={{
          maxWidth: "500px"
        }}
      >
        <div className="card-body">
          <h3>My Todo List</h3>
          <TodosList list={list} />
          <AddNewTodo />
        </div>
      </div>
    </div>
  );
}

export default App;
