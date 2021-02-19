import React, { useState, useEffect, useContext } from "react";
import Container from "components/shared/Container";
import TextInput from "components/layout/TextInput";
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
    <Container title="S'enregistrer">
      <form onSubmit={handleSubmit}>
        <TextInput
          name="username"
          value={form.username}
          onChange={handleChange}
          placeholder="Login"
        />
        <TextInput
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
          type="email"
        />
        <TextInput
          name="passwordOne"
          value={form.passwordOne}
          onChange={handleChange}
          placeholder="Mot de passe"
          type="password"
        />
        <TextInput
          name="passwordTwo"
          value={form.passwordTwo}
          onChange={handleChange}
          placeholder="Mot de passe"
          type="password"
        />
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
