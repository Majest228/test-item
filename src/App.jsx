import React, { useState } from "react";
import Home from "./components/Home/Home";
import uniqid from "uniqid";

const App = () => {
  const db = [
    {
      id: 1,
      title: "Выучить HTML",
      completed: true,
      important: false,
      date_start: "2022-06-10",
      date_end: "2022-06-10",
    },
    {
      id: 2,
      title: "Выучить JS",
      completed: true,
      important: false,
      date_start: "2022-06-10",
      date_end: "2022-06-10",
    },
    {
      id: 3,
      title: "Выучить React",
      completed: true,
      important: true,
      date_start: "2022-06-10",
      date_end: "2022-06-10",
    },
    {
      id: 4,
      title: "Выучить Redux",
      completed: false,
      important: true,
      date_start: "2022-06-10",
      date_end: "2022-06-10",
    },
  ];
  const [tasks, setTasks] = useState(db);

  const onChangeImportantValue = (id) => {
    const newTasks = [...tasks];
    const currentItemImportant = newTasks.find((t) => t.id === id);
    currentItemImportant.important = !currentItemImportant.important;
    setTasks(newTasks);
  };
  const onChangeTaskStatus = (id) => {
    const newTasks = [...tasks];
    const currentItem = newTasks.find((t) => t.id === id);
    currentItem.completed = !currentItem.completed;
    setTasks(newTasks);
  };

  const onDeleteTask = (id) => {
    const newTasks = [...tasks];
    const taskWithoutElem = newTasks.filter((t) => t.id != id);

    setTasks(taskWithoutElem);
  };

  const onAddTask = (text, date) => {
    const newItem = {
      id: uniqid(),
      title: text,
      completed: false,
      important: false,
      date_start: new Date().toISOString().split("T")[0],
      date_end: date,
    };

    setTasks([...tasks, newItem]);
  };

  return (
    <div className="App">
      <Home
        tasks={tasks}
        onChangeTaskStatus={onChangeTaskStatus}
        onChangeImportantValue={onChangeImportantValue}
        onDeleteTask={onDeleteTask}
        onAddTask={onAddTask}
      />
    </div>
  );
};

export default App;
