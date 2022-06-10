import React, { useState } from "react";
import { BiHeart, BiTrashAlt, BiCheck, BiDownArrowAlt } from "react-icons/bi";

const TodoItem = ({
  title,
  completed,
  important,
  task,
  onChangeTaskStatus,
  onChangeImportantValue,
  onDeleteTask,
  date_start,
  date_end,
}) => {
  const [visibleDate, setVisibleDate] = useState(false);
  return (
    <div className="flex items-center justify-between mb-4 rounded-2xl bg-zinc-800 p-5 w-full">
      <div className="flex flex-col">
        <div className="flex">
          {completed ? (
            <span className="flex line-through">{title}</span>
          ) : (
            <span className="flex">{title}</span>
          )}
          <button onClick={() => setVisibleDate(!visibleDate)}>
            <BiDownArrowAlt />
          </button>
        </div>
        {visibleDate && (
          <div>
            <p className="text-xs">Дата создания - {date_start}</p>
            <p className="text-xs">Дата окончания задачи - {date_end}</p>
          </div>
        )}
      </div>

      <div className="flex">
        <button
          className="flex items-center"
          onClick={() => onChangeTaskStatus(task.id)}
        >
          {completed ? (
            <BiCheck size={24} fill="green" />
          ) : (
            <BiCheck size={24} />
          )}
        </button>
        <button
          onClick={() => onDeleteTask(task.id)}
          className="mr-2 flex items-center"
        >
          <BiTrashAlt size={24} />
        </button>
        <button
          className="flex items-center"
          onClick={() => onChangeImportantValue(task.id)}
        >
          {important ? <BiHeart fill="red" size={24} /> : <BiHeart size={24} />}
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
