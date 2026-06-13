import { useState } from "react";

function TaskForm() {
  const [task, setTask] = useState("");

  return (
    <form>
      <input
        type="text"
        placeholder="Enter task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <button>Add</button>
    </form>
  );
}

export default TaskForm;