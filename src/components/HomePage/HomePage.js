import React, { useContext } from "react";
import Login from "components/Login";
import ToDoList from "components/ToDoList";
import Register from "components/Register";

import User from "context/User";

const HomePage = () => {
  const { user } = useContext(User);
  return (
    <>
      {user ? (
        <ToDoList />
      ) : (
        <>
          <Register />
          <Login />
        </>
      )}
    </>
  );
};

export default HomePage;
