import React, { useContext, useState, useEffect } from "react";
import User from "context/User";
import Firebase from "context/Firebase";
import Title from "components/shared/Title";
import Container from "components/shared/Container";

const Login = () => {
  const { setUser } = useContext(User);

  const firebase = useContext(Firebase);
  const initialState = {
    email: "arkbass@hotmail.fr",
    password: "123123",
    error: null,
  };

  const [form, setform] = useState(initialState);
  const [isInvalid, setIsInvalid] = useState(initialState);

  const handleSubmit = (event) => {
    event.preventDefault();

    firebase
      .login(form.email, form.password)
      .then((response) => {
        setform(initialState);
        setUser(response.user);
      })
      .catch((error) => {
        setform({ ...form, error: error });
      });
  };
  useEffect(() => {
    setIsInvalid(form.password === "" || form.email === "");
  }, [form]);

  const handleChange = (event) => {
    setform({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <Container title="Se connecter">
      <form onSubmit={handleSubmit}>
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
            name="password"
            value={form.password}
            onChange={handleChange}
            type="password"
            placeholder="Mot de passe"
          />
        </div>
        <div>
          <button type="submit" disabled={isInvalid}>
            Se connecter
          </button>
        </div>
        {form.error && <p>{form.error.message}</p>}
      </form>
    </Container>
  );
};

export default Login;
