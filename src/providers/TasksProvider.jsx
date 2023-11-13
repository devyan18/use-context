import { createContext, useEffect, useState } from "react";

export const TasksContext = createContext();

export const TasksProvider = ({ children }) => {
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
    <TasksContext.Provider
      value={{
        allTasks,
        changeTitleTask,
        addNewTaskToList,
        deleteCompletedTasks,
        handleComplete,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};
