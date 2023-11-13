import styles from "./Task.module.css";

import { useId } from "react";
import { BsCheck2Square, BsSquare } from "react-icons/bs";
import { BiSolidEdit } from "react-icons/bi";

const Task = ({ title, completed, handleComplete, handleEdit }) => {
  const ref = useId();

  return (
    <div className={styles.container} style={{ color: completed && "#ff6969" }}>
      <label htmlFor={ref}>
        {completed ? <BsCheck2Square size={20} /> : <BsSquare size={16} />}
      </label>
      <input type="checkbox" id={ref} hidden onChange={handleComplete} />
      <span style={{ textDecoration: completed ? "line-through" : "none" }}>
        {title}
      </span>
      <button onClick={handleEdit}>
        <BiSolidEdit size={18} />
      </button>
    </div>
  );
};
export default Task;
