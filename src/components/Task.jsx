import styles from "./Task.module.css";

import { useId } from "react";
import { BsCheck2Square, BsSquare } from "react-icons/bs";

const Task = ({ title, completed, toggleComplete }) => {
  const ref = useId();

  return (
    <div className={styles.container} style={{ color: completed && "#ff6969" }}>
      <label htmlFor={ref}>
        {completed ? <BsCheck2Square size={20} /> : <BsSquare size={16} />}
      </label>
      <input type="checkbox" id={ref} hidden onChange={toggleComplete} />
      <span style={{ textDecoration: completed ? "line-through" : "none" }}>
        {title}
      </span>
    </div>
  );
};
export default Task;
