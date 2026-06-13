import { useState } from "react";

function TaskItem({ task, dispatch }) {
  const [editing, setEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);

  function deleteTask() {
    dispatch({
      type: "DELETE_TASK",
      id: task.id
    });
  }

  function completeTask() {
    dispatch({
      type: "COMPLETE_TASK",
      id: task.id
    });
  }

  function saveTask() {
    if (newText.trim() === "") {
      alert("Task cannot be empty.");
      return;
    }

    dispatch({
      type: "UPDATE_TASK",
      id: task.id,
      newText: newText
    });

    setEditing(false);
  }

  return (
    <div className={task.completed ? "task completed" : "task"}>
      {editing ? (
        <>
          <input
            type="text"
            value={newText}
            onChange={(event) =>
              setNewText(event.target.value)
            }
          />

          <button onClick={saveTask}>
            Save
          </button>
        </>
      ) : (
        <>
          <h3>{task.text}</h3>
          <p>{task.date}</p>
        </>
      )}

      <button onClick={completeTask}>
        Complete
      </button>

      <button onClick={() => setEditing(true)}>
        Edit
      </button>

      <button onClick={deleteTask}>
        Delete
      </button>
    </div>
  );
}

export default TaskItem;