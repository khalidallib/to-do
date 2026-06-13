import { useReducer } from "react";
import "./css/index.css";
import TaskForm from "./components/TaskForm";
import { taskReducer } from "./reducers/taskReducer";

function App() {
  const [tasks, dispatch] = useReducer(taskReducer, []);

  return (
    <div className="container">
      <h1>Task Tracker</h1>

      <TaskForm dispatch={dispatch} />

      <p>Total Tasks: {tasks.length}</p>
    </div>
  );
}

export default App;