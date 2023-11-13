import styles from "./Controllers.module.css";
import { Link } from "react-router-dom";

const Controllers = ({ onDelete }) => {
  return (
    <div className={styles.container}>
      <Link className={styles.createButton} to="/new">
        Create Task
      </Link>
      <button onClick={onDelete}>Delete Completed Tasks</button>
    </div>
  );
};

export default Controllers;
