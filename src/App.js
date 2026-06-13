import { useReducer } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { taskReducer } from "./reducers/taskReducer";
import "./css/index.css";

function App() {
  const [tasks, dispatch] = useReducer(taskReducer, []);

  return (
    <div className="container">
      <h1>Task Tracker</h1>

      <TaskForm dispatch={dispatch} />

      <TaskList
        tasks={tasks}
        dispatch={dispatch}
      />
    </div>
  );
}

export default App;