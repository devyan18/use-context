export const tasksTypes = {
  fill: "FILL",
  complete: "COMPLETE",
  clear: "CLEAR",
  create: "CREATE",
  edit_title: "EDIT_TITLE",
};

export const tasksReducer = (state, action) => {
  if (action.type === tasksTypes.clear) {
    const clearTasks = state.filter((task) => !task.completed);
    return clearTasks;
  }

  if (action.type === tasksTypes.create) {
    const { title } = action.payload;

    return [
      ...state,
      {
        id: Date.now(),
        title,
        completed: false,
      },
    ];
  }

  if (action.type === tasksTypes.complete) {
    const { taskId } = action.payload;

    return state.map((task) => {
      if (task.id !== taskId) return task;

      return {
        ...task,
        completed: !task.completed,
      };
    });
  }

  if (action.type === tasksTypes.edit_title) {
    const { taskId, title } = action.payload;

    return state.map((task) => {
      if (task.id !== taskId) return task;

      return {
        ...task,
        title,
      };
    });
  }

  if (action.type === tasksTypes.fill) {
    const { tasks } = action.payload;

    return [...state, ...tasks];
  }

  return state;
};
