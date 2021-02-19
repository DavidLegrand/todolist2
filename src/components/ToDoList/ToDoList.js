import React, { useContext } from "react";
import NewTaskForm from "components/NewTaskForm";
import Controls from "components/Controls";
import ListView from "components/ListView";
import Title from "components/Title";
import Container from "components/Container";
import Logout from "components/Logout";
import User from "context/User";

import List from "context/List";

const ToDoList = () => {
  const { list, setList } = useContext(List);
  const { user } = useContext(User);

  const removeTask = (id) => {
    setList(list.filter((t) => t.id !== id));
  };

  const getNewId = () => {
    return list
      ? 1
      : list.reduce((prev, current) => (prev.id > current.id ? prev : current))
          .id + 1;
  };

  const addTask = (form) => {
    setList([...list, { ...form, id: getNewId(), userId: user.uid }]);
  };

  const updateCompleted = (boolean, id = null) => {
    const newList = list.map((t) => {
      if (id === t.id || id === null) return { ...t, completed: boolean };
      else return t;
    });
    setList(newList);
  };

  return (
    <>
      <Container>
        <Logout></Logout>
        <Title>To Do List</Title>
        <ListView list={list} update={updateCompleted} remove={removeTask} />
      </Container>
      <Container>
        <Controls update={updateCompleted} />
      </Container>
      <Container>
        <NewTaskForm add={addTask} />
      </Container>
    </>
  );
};

export default ToDoList;
