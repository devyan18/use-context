import { useNavigate } from "react-router-dom";
import { useState } from "react";

const NewTask = ({ addNewTaskToList }) => {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    addNewTaskToList(title);
    navigate("/");
  };

  return (
    <div>
      <h2>Creating a task</h2>
      <form onSubmit={handleSubmit}>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          name="title"
          placeholder="My task text"
        />
        <button>Create</button>
      </form>
    </div>
  );
};
export default NewTask;
