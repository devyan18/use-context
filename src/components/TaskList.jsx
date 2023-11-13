import Task from "./Task";

const TaskList = ({ tasks, handleComplete }) => {
  return (
    <>
      {tasks.map((task) => {
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
