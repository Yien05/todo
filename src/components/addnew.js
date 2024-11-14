import { useState } from "react";

function AddNewTodo(props) {
  const { onNewNameAdded } = props;
  const [itemName, setItemName] = useState("");
  return (
    <div>
      <form>
        <div className="d-flex justify-content-between align-items-center">
          <input
            type="text"
            className="form-control"
            placeholder="Add new item..."
            value={itemName}
            required
            onChange={(event)=>{
              setItemName(event.target.value);
            }}
          />
          <button className="btn btn-primary btn-sm rounded ms-2"
          onClick={(event)=>{
            event.preventDefault();
            if (itemName === "") {
              alert("Please enter the task");
            }else {
              onNewNameAdded(itemName);
              setItemName("");
            }
          }} 
          >
            Add</button>
        </div>
      </form>
    </div>
  );
}

export default AddNewTodo;
