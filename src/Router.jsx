import { Routes, Route } from "react-router-dom";

// importamos todas las páginas desde una sola ubicación
import { AllTasks, NewTask, OneTask } from "./pages";
import { useEffect, useState } from "react";

const Router = () => {
  const [allTasks, setAllTasks] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => {
        const tasks = data.splice(0, 10);
        setAllTasks(tasks);
      });
  }, []);

  const handleComplete = (taskId) => {
    const mappedTasks = allTasks.map((task) => {
      if (task.id !== taskId) return task;

      return {
        ...task,
        completed: !task.completed,
      };
    });

    setAllTasks(mappedTasks);
  };

  const deleteCompletedTasks = () => {
    const filterTasks = allTasks.filter((task) => {
      if (task.completed !== true) return task;
    });

    setAllTasks(filterTasks);
  };

  const generateId = () => {
    const ids = allTasks.length > 0 ? allTasks.map((task) => task.id) : [1];

    const id = Math.max(...ids) + 1;

    return id;
  };

  const addNewTaskToList = (title) => {
    setAllTasks([
      ...allTasks,
      {
        id: generateId(),
        title,
        completed: false,
      },
    ]);
  };

  const changeTitleTask = (taskId, title) => {
    const mappedTasks = allTasks.map((task) => {
      if (task.id !== taskId) return task;

      return {
        ...task,
        title,
      };
    });

    setAllTasks(mappedTasks);
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <AllTasks
            allTasks={allTasks}
            deleteCompletedTasks={deleteCompletedTasks}
            handleComplete={handleComplete}
          />
        }
      />
      <Route
        path="/new"
        element={<NewTask addNewTaskToList={addNewTaskToList} />}
      />
      <Route
        path="/:taskId"
        element={
          <OneTask changeTitleTask={changeTitleTask} allTasks={allTasks} />
        }
      />
    </Routes>
  );
};
export default Router;
