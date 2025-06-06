import React from "react";

export const TodoList = () => {
  return (
    <div className="bg-gray-700 text-white p-2 my-4 mx-auto md:w-2xl gap-x-2 rounded-xl">
      <div className="">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-6 fill-gray-800"
        >
          <path
            fillRule="evenodd"
            d="M10.5 3A1.501 1.501 0 0 0 9 4.5h6A1.5 1.5 0 0 0 13.5 3h-3Zm-2.693.178A3 3 0 0 1 10.5 1.5h3a3 3 0 0 1 2.694 1.678c.497.042.992.092 1.486.15 1.497.173 2.57 1.46 2.57 2.929V19.5a3 3 0 0 1-3 3H6.75a3 3 0 0 1-3-3V6.257c0-1.47 1.073-2.756 2.57-2.93.493-.057.989-.107 1.487-.15Z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <div>No tasks yet. Add one to get started!</div>
    </div>
  );
};
