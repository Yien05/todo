function Item(props) {
  const { text = "No Task", isCompleted } = props;
  if (isCompleted === true) {
    return (
      <li class="list-group-item d-flex justify-content-between align-items-center">
        <div>
          <button class="btn btn-sm btn-success">
            <i class="bi bi-check-square"></i>
          </button>
        <span className="text-decoration-line-through ms-3">{text}</span>
        </div>

        <div>
          <button class="btn btn-sm btn-danger">
            <i class="bi bi-trash"></i>
          </button>
        </div>
      </li>
    );
  } else {
    return (
      <li class="list-group-item d-flex justify-content-between align-items-center">
        <div>
          <button class="btn btn-sm btn-light">
            <i class="bi bi-square"></i>
          </button>
        <span className="ms-3">{text}</span>
        </div>

        <div>
          <button class="btn btn-sm btn-danger">
            <i class="bi bi-trash"></i>
          </button>
        </div>
      </li>
    );
  }
}

export default Item;
