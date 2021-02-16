import React, { useState } from "react";
import Task from "../Task";
import Input from "../Input";
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
    const newList = list.filter((t) => t.id !== id);
    setList(newList);
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
      <h1 className={css.title}>To do list</h1>
      <div>
        {list.map((t) => (
          <Task
            task={t}
            remove={removeTask}
            update={updateCompleted}
            key={t.id}
          />
        ))}
      </div>
      <button onClick={() => updateCompleted(true)}>Tout terminer</button>
      <button onClick={() => updateCompleted(false)}>Tout annuler</button>
    </div>
  );
};

export default ToDoList;
