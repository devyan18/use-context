import { useEffect, useReducer } from "react";
import { tasksReducer, tasksTypes } from "../reducers/tasksReducer";

// TODO: inicializar las tareas con la información de jsonplaceholder

const initialState = [
  {
    id: 1,
    title: "mi primer tarea",
    completed: false,
  },
];

export const useTasks = () => {
  // creamos el estado y las funciones para modificarlo con useReducer
  const [allTasks, dispatch] = useReducer(tasksReducer, initialState);

  // rellenamos las tareas con la información de jsonplaceholder
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => {
        const tasks = data.splice(0, 10);

        dispatch({
          type: tasksTypes.fill,
          payload: {
            tasks,
          },
        });
      });
  }, []);

  // cambiamos el estado de la propiedad completed de una tarea
  const handleComplete = (taskId) => {
    dispatch({
      type: tasksTypes.complete,
      payload: {
        taskId,
      },
    });
  };

  // eliminamos las tareas completadas
  const deleteCompletedTasks = () => {
    dispatch({ type: tasksTypes.clear });
  };

  // añadimos una nueva tarea a la lista
  const addNewTaskToList = (title) => {
    dispatch({
      type: tasksTypes.create,
      payload: {
        title,
      },
    });
  };

  // cambiamos el título de una tarea
  const changeTitleTask = (taskId, title) => {
    dispatch({
      type: tasksTypes.edit_title,
      payload: {
        title,
        taskId,
      },
    });
  };

  return {
    allTasks,
    handleComplete,
    deleteCompletedTasks,
    addNewTaskToList,
    changeTitleTask,
  };
};
