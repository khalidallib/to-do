import { useState } from "react";

function TaskForm({ dispatch }) {
  const [task, setTask] = useState("");

  function addTask(event) {
    event.preventDefault();

    if (task.trim() === "") {
      alert("Please enter a task.");
      return;
    }

    dispatch({
      type: "ADD_TASK",
      text: task
    });

    setTask("");
  }
  return (
    <form onSubmit={addTask}>
      <input
        type="text"
        placeholder="Enter a task"
        value={task}
        onChange={(event) => setTask(event.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default TaskForm;