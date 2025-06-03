import React, { useState } from "react";
import { TodoList } from "./TodoList";

export const Todo = () => {
  const [todos, setTodos] = useState([]);
  return (
    <div className="bg-gray-800 h-32 items-center flex-column">
      <div className="bg-sky-500 text-white p-2 my-2 mx-auto md:w-2xl gap-x-2 rounded-xl font-bold ">
        + Add a task
      </div>
      <div className="flow-root bg-gray-700 text-white p-2 my-4 mx-auto md:w-2xl gap-x-2 rounded-xl">
        <div className="float-left my-2">{todos.length} items left</div>
        <div className="float-right">
          <button key="all" className="bg-sky-500 px-2 py-1 my-2 rounded-xs ">
            All
          </button>
          <button
            key="active"
            className="bg-gray-500 mx-2 my-2 px-2 py-1 rounded-xs"
          >
            Active
          </button>
          <button
            key="completed"
            className="tp-1 bg-gray-500 my-2 px-2 py-1 rounded-xs"
          >
            Completed
          </button>
        </div>
      </div>
      <TodoList />
    </div>
  );
};
