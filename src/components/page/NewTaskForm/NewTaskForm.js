import React, { useState } from "react";
import Title from "components/shared/Title";
import css from "./NewTaskForm.module.css";
import Container from "components/shared/Container";
import TextInput from "components/layout/TextInput";

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
    <Container title="Nouvelle tâche">
      <form onSubmit={handleSubmit} className={css.form}>
        <TextInput
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="Nom de la tache"
        />
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
    </Container>
  );
};

export default NewTaskForm;
