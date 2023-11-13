import { useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { TasksContext } from "../providers/TasksProvider";

const OneTask = () => {
  const { changeTitleTask, allTasks } = useContext(TasksContext);

  const { taskId } = useParams();

  const [title, setTitle] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title) return;

    changeTitleTask(Number(taskId), title);

    navigate("/");
  };

  useEffect(() => {
    const findedTask = allTasks.find((task) => task.id === Number(taskId));

    setTitle(findedTask?.title);
  }, [allTasks, taskId]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Updating a task</h2>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button>Update</button>
      </form>
    </div>
  );
};
export default OneTask;
