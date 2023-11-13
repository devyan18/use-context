import { useContext } from "react";
import Task from "./Task";
import { TasksContext } from "../providers/TasksProvider";

const TaskList = () => {
  const { allTasks, handleComplete } = useContext(TasksContext);

  return (
    <>
      {allTasks.map((task) => {
        return (
          <Task
            key={task.id}
            taskId={task.id}
            title={task.title}
            completed={task.completed}
            handleComplete={() => handleComplete(task.id)}
          />
        );
      })}
    </>
  );
};
export default TaskList;
