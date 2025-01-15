import TodoItem from "./item";

function TodoList(props) {
  const { todos, onItemUpdate, onItemDelete } = props;
  return (
    <ul className="list-group">
      {todos.map((item) => {
        return (
          <TodoItem
            key={item.id}
            // id={item.id}
            // text={item.text}
            // isCompleted={item.isCompleted}
            {...item}
            onItemUpdate={onItemUpdate}
            onItemDelete={onItemDelete}
          />
        );
      })}
    </ul>
  );
}

export default TodoList;
