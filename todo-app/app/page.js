"use client";
import React, { useState, useEffect } from "react";

const page = () => {
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");
  const [mainTask, setMainTask] = useState([]);
  const submitHandler = (e) => {
    e.preventDefault();
    setMainTask((prevTasks) => [...prevTasks, { task, description }]);
    setTask("");
    setDescription("");
  };
  const deleteHandler = (i) => {
    let copyTask = [...mainTask];
    copyTask.splice(i, 1);
    setMainTask(copyTask);
  };
  useEffect(() => {
    console.log("Updated Tasks:", mainTask);
  }, [mainTask]);
  let renderTask = <h2>No Task Avaliable. Add a new Task!</h2>;
  if (mainTask.length > 0) {
    renderTask = mainTask.map((task, i) => {
      return (
        <li key={i} className="flex justify-between mb-5">
          <div className="flex  justify-between w-2/3 ">
            <h4 className="font-bold text-2xl">{task.task} </h4>
            <h5 className="font-medium text-xl">{task.description}</h5>
          </div>
          <button
            onClick={() => {
              deleteHandler(i);
            }}
            className="px-7 py-2  text-xl font-semibold rounded-sm bg-red-800 text-white "
          >
            Delete
          </button>
        </li>
      );
    });
  }

  return (
    <>
      <h1 className="bg-black h-20 text-center py-4 tracking-widest text-4xl font-bold text-cyan-50">
        Todo List
      </h1>
      <form onSubmit={submitHandler}>
        <input
          className="border-b-slate-950 m-7 px-3 py-2 border-2 w-96 text-xl"
          type="text"
          placeholder="Add a new task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <input
          className="border-b-slate-950 m-7 px-3 py-2 border-2 w-96 text-xl"
          type="text"
          placeholder="Enter the description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button className="px-7 py-3 text-xl font-semibold rounded-sm bg-green-800 text-white ">
          Add Task
        </button>
      </form>
      <div className="h-auto bg-slate-400   text-xl font-semibold p-7">
        <ul>{renderTask}</ul>
      </div>
    </>
  );
};

export default page;
