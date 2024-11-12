import Item from "./item";

function TodosList(props) {
  const { list } = props;
  return (
    <div className="card" style={{ margin: "15px" }}>
      <ul className="list-group">
        {list.map((item) => {
          return <Item {...item} />;
        })}
      </ul>
    </div>
  );
}

export default TodosList;
