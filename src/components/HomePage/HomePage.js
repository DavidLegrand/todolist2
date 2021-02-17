import React, { useContext } from "react";
import Login from "../Login";
import ToDoList from "../ToDoList";

import User from "../../context/User";

const HomePage = () => {
  const { user } = useContext(User);
  return <>{user ? <ToDoList /> : <Login />}</>;
};

export default HomePage;
