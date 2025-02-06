"use client";
import React, { useState } from "react";

const page = () => {
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");
  return (
    <>
      <h1 className="bg-black h-20 text-center py-4 tracking-widest text-4xl font-bold text-cyan-50">
        Todo List
      </h1>
      <form action="">
        <input
          className="border-b-slate-950 m-7 px-3 py-2 border-2 text-2xl"
          type="text"
          placeholder="Add a new task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <input
          className="border-b-slate-950 m-7 px-3 py-2 border-2 text-2xl"
          type="text"
          placeholder="Enter the description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button className="px-7 py-3 text-xl font-semibold rounded-sm bg-green-800 text-white ">
          Add Task
        </button>
      </form>
    </>
  );
};

export default page;
