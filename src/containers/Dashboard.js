import React from "react";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";

const Dashboard = props => {
  return (
    <>
      <div className="card mb-1">
        <div className="card-body todo-item-body">
        <TodoForm />
        </div>
      </div>
      <hr />
      <TodoList />
    </>
  );
};

export default Dashboard;
