import React from "react";
import TodoView from "../TodoView/TodoView";
const Home = ({
  tasks,
  onChangeImportantValue,
  onChangeTaskStatus,
  onDeleteTask,
  onAddTask,
}) => {
  return (
    <div>
      <TodoView
        onChangeTaskStatus={onChangeTaskStatus}
        onChangeImportantValue={onChangeImportantValue}
        onDeleteTask={onDeleteTask}
        tasks={tasks}
        onAddTask={onAddTask}
      />
    </div>
  );
};

export default Home;
