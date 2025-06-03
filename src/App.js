import "./styles.css";
import { TodoApp } from "./components/TodoApp";

export default function App() {
  return (
    <div className="App p-20 dark:bg-slate-900 text-white items-center">
      <TodoApp />
    </div>
  );
}
