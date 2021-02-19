import React, { useState, useEffect, useContext } from "react";
import Title from "components/Title";
import Container from "components/Container";
import Firebase from "context/Firebase";
import User from "context/User";

const Register = () => {
  const firebase = useContext(Firebase);
  const { setUser } = useContext(User);
  const initialState = {
    username: "",
    email: "",
    passwordOne: "",
    passwordTwo: "",
    error: null,
  };
  const [form, setform] = useState(initialState);
  const [isValid, setValid] = useState(false);  

  const handleSubmit = (event) => {
    event.preventDefault();
    firebase
      .register(form.email, form.passwordOne)
      .then((response) => {
        setform(initialState);
        setUser(response.user);
      })
      .catch((error) => {
        setform({ ...form, error: error });
      });
  };  
  const handleChange = (event) => {
    setform({
      ...form,
      [event.target.name]: event.target.value,
    });
  };
  useEffect(() => {
    setValid(
      form.passwordOne === form.passwordTwo &&
        form.passwordOne !== "" &&
        form.email !== "" &&
        form.username !== ""
    );
  }, [form]);
  return (
    <Container>
      <Title>S'inscrire</Title>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            name="username"
            value={form.username}
            onChange={handleChange}
            type="text"
            placeholder="Pseudo"
          />
        </div>
        <div>
          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            type="email"
            placeholder="Email"
          />
        </div>
        <div>
          <input
            name="passwordOne"
            value={form.passwordOne}
            onChange={handleChange}
            type="password"
            placeholder="Mot de passe"
          />
        </div>
        <div>
          <input
            name="passwordTwo"
            value={form.passwordTwo}
            onChange={handleChange}
            type="password"
            placeholder="Confirmer MDP"
          />
        </div>
        <div>
          <button type="submit" disabled={!isValid}>
            S'inscrire
          </button>
        </div>
        {form.error && <p>{form.error.message}</p>}
      </form>
    </Container>
  );
};

export default Register;
