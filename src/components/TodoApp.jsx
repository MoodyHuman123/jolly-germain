import React from "react";
import { Todo } from "./Todo";
import { TodoList } from "./TodoList";

export const TodoApp = () => {
  return (
    <div
      className="mx-auto max-w-3xl gap-x-4 rounded-xl bg-gray-800 p-6 shadow-lg outline outline-black/5 
    dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-black/10"
    >
      <div className="">
        <h5 className="text-teal-400 text-4xl font-bold"> Todo List App </h5>
        <p className="text-neutral-400"> Organize your day, beautifully. </p>
      </div>
      <Todo />
      {/* <TodoList /> */}

      <div className="text-neutral-400 mt-10">
        Crafted with{" "}
        <span role={"img"} className="text-red-500">
          {String.fromCodePoint("0x2764")}
        </span>
        <br />
        Powered by React, TypeScript & TailwindCSS
      </div>
    </div>
  );
};
