import React, { useState, useEffect } from "react";
import NewTaskForm from "../NewTaskForm";
import Controls from "../Controls";
import ListView from "../ListView";
import Title from "../Title";

import css from "./ToDoList.module.css";

const ToDoList = () => {
  const initialList = [
    {
      id: 1,
      title: "Finaliser les maquettes",
      completed: true,
      priority: "Haute",
    },
    {
      id: 2,
      title: "Ecrire les tests unitaires",
      completed: false,
      priority: "Haute",
    },
    {
      id: 3,
      title: "Développer la validation formulaire",
      completed: false,
      priority: "Medium",
    },
    {
      id: 4,
      title: "Préparer réunion client",
      completed: false,
      priority: "Basse",
    },
  ];

  const [list, setList] = useState(initialList);


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
    <div className={css.container}>
      <Title>To Do List</Title>
      <ListView list={list} update={updateCompleted} remove={removeTask} />
      <Controls update={updateCompleted} />
      <NewTaskForm add={addTask} />
    </div>
  );
};

export default ToDoList;
