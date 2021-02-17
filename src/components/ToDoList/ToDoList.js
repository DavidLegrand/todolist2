import React, { useState, useEffect } from "react";
import NewTaskForm from "../NewTaskForm";
import Controls from "../Controls";
import ListView from "../ListView";
import Title from "../Title";
import Container from "../Container";
import Logout from "../Logout";

const ToDoList = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(
          "https://todo-react-7181e-default-rtdb.firebaseio.com/tasks.json"
        );
        if (!res.ok) throw Error(res.statusText);
        else {
          const data = await res.json();
          setList([...data]);
          console.log("données récupérées");
        }
      } catch (e) {
        console.error(e);
      }
    }
    fetchData();
  }, []);

  const removeTask = (id) => {
    setList(list.filter((t) => t.id !== id));
  };

  const getNewId = () => {
    return (
      list.reduce((prev, current) => (prev.id > current.id ? prev : current))
        .id + 1
    );
  };

  const addTask = (form) => {
    setList([...list, { ...form, id: getNewId() }]);
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
