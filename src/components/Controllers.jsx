import styles from "./Controllers.module.css";

const Controllers = () => {
  return (
    <div className={styles.container}>
      <button>Create Task</button>
      <button>Delete Completed Tasks</button>
    </div>
  );
};
export default Controllers;
