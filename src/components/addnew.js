import { useState } from "react";

function AddNewForm(props) {
  const { onNewItemAdded } = props;
  const [item, setItem] = useState("");
  return (
    <div className="mt-4">
      <form className="d-flex justify-content-between align-items-center">
        <input
          type="text"
          className="form-control"
          placeholder="Add new item..."
          required
          value={item}
          onChange={(event) => {
            setItem(event.target.value);
          }}
        />
        <button
          className="btn btn-primary btn-sm rounded ms-2"
          onClick={(event) => {
            event.preventDefault();
            onNewItemAdded(item);
            // reset the field
            setItem("");
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}
export default AddNewForm;
