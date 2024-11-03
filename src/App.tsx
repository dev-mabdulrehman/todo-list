import { useState } from "react";
import WriteTaskForm from "./components/WriteTaskForm";
import TaskList from "./components/TaskList";
import { TodoListProvider } from "./context/TodoListContext";

export type Task = {
  task: string,
  id: number | string,
  isCompleted: boolean,
}

function App() {
  const [taskList, setTaskList] = useState<Task[]>([]);
  const [task, setTask] = useState<Task>({ task: "", id: "", isCompleted: false });

  return (
    <TodoListProvider value={{ taskList, setTaskList, task, setTask }}>
      <div className="w-full max-w-96 bg-slate-50 h-screen mx-auto">
        <WriteTaskForm />
        <hr />
        <TaskList heading="To do" taskList={taskList.filter(task => !task.isCompleted)} />
        <TaskList heading="Completed" taskList={taskList.filter(task => task.isCompleted)} />
      </div>
    </TodoListProvider>
  );
}

export default App;
