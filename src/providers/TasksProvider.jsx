import { createContext } from "react";
import { useTasks } from "../hooks/useTasks";

export const TasksContext = createContext();

export const TasksProvider = ({ children }) => {
  const {
    allTasks,
    changeTitleTask,
    addNewTaskToList,
    deleteCompletedTasks,
    handleComplete,
  } = useTasks();

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

// useState, useEffect y useContext
