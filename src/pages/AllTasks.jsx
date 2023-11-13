import Controllers from "../components/Controllers";
import TaskList from "../components/TaskList";

const AllTasks = ({ deleteCompletedTasks, handleComplete, allTasks }) => {
  return (
    <div>
      <Controllers onDelete={deleteCompletedTasks} />
      <TaskList tasks={allTasks} handleComplete={handleComplete} />
    </div>
  );
};
export default AllTasks;
