import React, { useState } from "react";
import TodoItem from "../TodoItem/TodoItem";
import CreateItemField from "../CreateItemField/CreateItemField";

const TodoView = ({
  tasks,
  onChangeImportantValue,
  onChangeTaskStatus,
  onDeleteTask,
  onAddTask,
}) => {
  const [visibleForm, setVisibleForm] = useState(false);
  const categoryList = ["Все", "Выполненные", "Активные"];
  const [category, setCategory] = useState(categoryList[0]);

  const handleChangeCategory = (e) => {
    setCategory(e.target.value);
  };

  if (category == "Выполненные") {
    tasks = tasks.filter((task) => task.completed);
  } else if (category == "Активные") {
    tasks = tasks.filter((task) => task.important);
  }
  return (
    <>
      <div className=" text-white w-4/5 mx-auto">
        <h1 className="text-2xl font-bold mb-2">Список Задач:</h1>
        <div className="text-lg">
          <p>Всего задач: {tasks.length}</p>
          <p>
            Актуальные задачи:{" "}
            {tasks.length - tasks.filter((t) => t.completed === true).length}
          </p>
          <p>
            Выполненых задач: {tasks.filter((t) => t.completed === true).length}
          </p>
          <p className="mb-5">
            Добавлено в израбнное:{" "}
            {tasks.filter((t) => t.important === true).length}
          </p>
        </div>
        <select
          className="mb-3 form-select appearance-none block  px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          id="category"
          name="category"
          value={category}
          onChange={handleChangeCategory}
        >
          {categoryList.map((name, idx) => (
            <option key={idx}>{name}</option>
          ))}
        </select>
        {tasks.map((task) => (
          <TodoItem
            key={task.id}
            task={task}
            title={task.title}
            date_start={task.date_start}
            date_end={task.date_end}
            completed={task.completed}
            important={task.important}
            onChangeImportantValue={onChangeImportantValue}
            onChangeTaskStatus={onChangeTaskStatus}
            onDeleteTask={onDeleteTask}
          />
        ))}

        <button
          onClick={() => setVisibleForm(!visibleForm)}
          className="flex items-center border-2 p-2 bg-white text-gray-800 rounded-lg mb-5"
        >
          {visibleForm ? <p>Закрыть форму</p> : <p>Открыть форму</p>}
        </button>
        {visibleForm && <CreateItemField onAddTask={onAddTask} />}
      </div>
    </>
  );
};

export default TodoView;
