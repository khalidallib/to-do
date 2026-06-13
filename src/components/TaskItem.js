function TaskItem({ task, dispatch }) {
  return (
    <div className="task">
      <h3>{task.text}</h3>
      <p>{task.date}</p>
      <button onClick={() =>
          dispatch({
            type: "DELETE_TASK",
            id: task.id
          })
        }
      > Delete </button>
    </div>
  );
}

export default TaskItem;