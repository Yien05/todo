function Item(props) {
  const {
    id,
    text = "No Task",
    isCompleted,
    onItemDelete,
    onItemTick,
  } = props;

 

    return (
      <li className="list-group-item d-flex justify-content-between align-items-center">
        <div>
          <button
            className={`btn btn-sm ${isCompleted ? "btn-success" : "btn-light"}`}
            onClick={() => {
              onItemTick(id)

            }}
          >
            <i className={isCompleted ? "bi bi-check-square" : "bi bi-square"}></i>
            
          </button>
          <span className={isCompleted?"text-decoration-through ms-3" :"text-decoration-through ms-3"}>{text}</span>
        </div>

        <div>
          <button
            className="btn btn-sm btn-danger"
            onClick={() => {
              const confirm = window.confirm(
                "Are you sure you want to delete this task?"
              );
              if (confirm) {
                onItemDelete(id);
              }
            }}
          >
            <i className="bi bi-trash"></i>
          </button>
        </div>
      </li>
    );
  

  }
export default Item;
