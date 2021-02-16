import React from "react";
import css from "./Task.module.css";

const Task = ({task, remove, update}) => {

  const getVariant = () => {
    if (task.completed) return css.completed;
    else if (task.priority === "Haute") return css.high;
    else if (task.priority === "Basse") return css.low;
    else return css.medium;
  };

  return (
    <div className={`${css.item} ${getVariant()}`}>
      <h2 className={css.title}>{task.title}</h2>
      <p className={css.content}>Priorité : {task.priority}</p>
      <p className={css.content}>
        Statut : {task.completed ? "Terminée" : "En cours"}
      </p>
      <button onClick={()=>update(true, task.id)}>Terminer</button>
      <button onClick={()=>update(false, task.id)}>Annuler</button>
      <button onClick={()=>remove(task.id)}>Supprimer</button>
    </div>
  );
};

export default Task;
