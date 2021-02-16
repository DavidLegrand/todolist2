import React, { useState } from "react";
import Title from "../Title";

const NewTaskForm = ({ add }) => {
  // State
  const initialForm = {
    title: "",
    priority: "Moyenne",
    completed: false,
  };
  const [form, setForm] = useState(initialForm);

  // Listeners
  const handleChange = (e) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    const name = e.target.name;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    add(form);
    setForm(initialForm);
  };

  // Vue
  return (
    <form onSubmit={handleSubmit}>
      <Title>Nouvelle Tâche</Title>
      <div>
        <input
          type="text"
          placeholder="title"
          name="title"
          value={form.title}
          onChange={handleChange}
        />
      </div>
      <div>
        <select name="priority" value={form.priority} onChange={handleChange}>
          <option value="Haute">Haute</option>
          <option value="Moyenne">Moyenne</option>
          <option value="Basse">Basse</option>
        </select>
      </div>
      <div>
        <input
          type="checkbox"
          name="completed"
          checked={form.completed}
          onChange={handleChange}
        />
        {form.completed ? "Terminée" : "En cours"}
      </div>
      <button>Valider</button>
    </form>
  );
};

export default NewTaskForm;
