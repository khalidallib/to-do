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

    default:
      return tasks;
  }
}