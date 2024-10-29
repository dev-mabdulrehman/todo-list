import AddTaskForm from "./components/AddTaskForm";
import CompletedTasks from "./components/CompletedTasks";
import TodoTasks from "./components/TodoTasks";

function App() {
  return (
    <div className="w-full max-w-96 bg-slate-50 h-screen mx-auto">
      <AddTaskForm />
      <hr />
      <TodoTasks />
      <CompletedTasks />
    </div>
  );
}

export default App;
