import Task from "./components/Task";
import tasks from "./tasks.json";

function App() {
  return (
    <div>
      {tasks.map((task) => (
        <Task key={task.id} completed={task.completed} title={task.title} />
      ))}
    </div>
  );
}

export default App;
