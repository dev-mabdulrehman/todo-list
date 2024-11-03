import { useState } from "react";
import AddTaskForm from "./components/AddTaskForm";
import TaskList from "./components/TaskList";
import { TodoListProvider } from "./context/TodoListContext";

export type Task = {
  task: string,
  id: number,
  isCompleted: boolean,
}

function App() {
  const [taskList, setTaskList] = useState<Task[]>([]);

  return (
    <TodoListProvider value={{ taskList, setTaskList }}>
      <div className="w-full max-w-96 bg-slate-50 h-screen mx-auto">
        <AddTaskForm />
        <hr />
        <TaskList heading="To do" taskList={taskList.filter(task => !task.isCompleted)} />
        <TaskList heading="Completed" taskList={taskList.filter(task => task.isCompleted)} />
      </div>
    </TodoListProvider>
  );
}

export default App;
