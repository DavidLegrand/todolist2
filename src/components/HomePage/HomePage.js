import React, { useContext } from "react";
import Login from "components/page/Login";
import ToDoList from "components/page/ToDoList";
import Register from "components/page/Register";

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
