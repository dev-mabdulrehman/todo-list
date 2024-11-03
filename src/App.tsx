import { useEffect, useState } from "react";
import WriteTaskForm from "./components/WriteTaskForm";
import TaskList from "./components/TaskList";
import { TodoListProvider } from "./context/TodoListContext";

export type Task = {
  task: string,
  id: number | string,
  isCompleted: boolean,
}

function App() {
  const [taskList, setTaskList] = useState<Task[]>(JSON.parse(localStorage.getItem("taskList") || '[]'));
  const [task, setTask] = useState<Task>({ task: "", id: "", isCompleted: false });

  useEffect(() => {
    localStorage.setItem("taskList", JSON.stringify(taskList))
  }, [taskList]);

  return (
    <TodoListProvider value={{ taskList, setTaskList, task, setTask }}>
      <div className="w-full h-screen mx-auto">
        <WriteTaskForm />
        <hr />
        <TaskList heading="To do" taskList={taskList.filter(task => !task.isCompleted)} />
        <TaskList heading="Completed" taskList={taskList.filter(task => task.isCompleted)} />
      </div>
    </TodoListProvider>
  );
}

export default App;
