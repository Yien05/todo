import { useState } from "react";
import { nanoid } from "nanoid";


function AddNewTodo(props) {
  const { onNewNameAdded } = props;
  const [itemName, setItemName] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // get the existing items from the local storage
    const stringItems = localStorage.getItem("items");
    let items = JSON.parse(stringItems);

    // if items is not found, set it as empty array
    if (!items) {
      items = [];
    }

    // // push new item into the items array
    items.push({
      id: nanoid(),
      text:itemName,
    });

    // convert the items array into string format (JSON string)
    let convertedPosts = JSON.stringify(items);

    // save the updated items into local storage
    localStorage.setItem("items", convertedPosts);
    
    if (itemName === "") {
      alert("Please enter the task");
    }else {
      onNewNameAdded(itemName);
      setItemName("");
    }

  };

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
          onClick={handleFormSubmit} 
          >
            Add</button>
        </div>
      </form>
    </div>
  );
}

export default AddNewTodo;
