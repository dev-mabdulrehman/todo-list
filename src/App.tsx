import { ChangeEvent, useState } from "react";
import AddTaskForm from "./components/AddTaskForm";
import TaskList from "./components/TaskList";

export type Task = {
  task: string,
  id: number,
  isCompleted: boolean,
}

function App() {
  const [taskList, setTaskList] = useState<Task[]>([]);

  const onTaskAdded = (task: Task) => {
    setTaskList((prevState) => ([...prevState, task]))
  }

  const handleTaskStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
    const id = (e.target.getAttribute("data-id") as unknown as number);
    setTaskList(prevState => {
      const taskIdx = prevState.findIndex(ps => ps.id == id);
      if (taskIdx !== -1) {
        console.log(taskIdx)
        console.log(prevState[taskIdx].isCompleted)
        prevState[taskIdx].isCompleted = !prevState[taskIdx].isCompleted;
      }
      console.log(taskList)
      return [...prevState];
    })
  }

  return (
    <div className="w-full max-w-96 bg-slate-50 h-screen mx-auto">
      <AddTaskForm onTaskAdded={onTaskAdded} />
      <hr />
      <TaskList heading="To do" handleCheckChange={handleTaskStatusChange} taskList={taskList.filter(task => !task.isCompleted)} />
      <TaskList heading="Completed" handleCheckChange={handleTaskStatusChange} taskList={taskList.filter(task => !task.isCompleted)} />
    </div>
  );
}

export default App;
