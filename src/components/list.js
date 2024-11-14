import Item from "./item";

function TodosList(props) {
  const { list, onItemDelete, onItemTick} = props;
  
  return (
    <div className="card" style={{ margin: "15px" }}>
      <ul className="list-group">
        {list.map((item) => {
          return (
            <Item
              key={item.id}
              {...item}
              onItemDelete={(id) => {
                onItemDelete(id);
              }}
              onItemTick = {onItemTick}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default TodosList;
