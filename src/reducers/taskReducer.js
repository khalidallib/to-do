export function taskReducer(tasks, action) {
  switch (action.type) {
    case "ADD_TASK":
      return [
        ...tasks,
        {
          id: Date.now(),
          text: action.text,
          completed: false,
          date: new Date().toLocaleString()
        }
      ];

    case "DELETE_TASK":
      return tasks.filter(
        (task) => task.id !== action.id
      );

    case "COMPLETE_TASK":
      return tasks.map((task) =>
        task.id === action.id
          ? {
              ...task,
              completed: !task.completed
            }
          : task
      );

    case "UPDATE_TASK":
      return tasks.map((task) =>
        task.id === action.id
          ? {
              ...task,
              text: action.newText,
              date: new Date().toLocaleString()
            }
          : task
      );

    default:
      return tasks;
  }
}