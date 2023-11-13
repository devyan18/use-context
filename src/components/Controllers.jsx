import styles from "./Controllers.module.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { TasksContext } from "../providers/TasksProvider";

const Controllers = () => {
  const { deleteCompletedTasks } = useContext(TasksContext);

  return (
    <div className={styles.container}>
      <Link className={styles.createButton} to="/new">
        Create Task
      </Link>
      <button onClick={deleteCompletedTasks}>Delete Completed Tasks</button>
    </div>
  );
};

export default Controllers;
