import React, { useContext } from "react";
import User from "context/User";
import Title from "components/Title";
import Container from "components/Container";

const Login = () => {
  const { setUser } = useContext(User);
  const loggedUser = { id: 1, name: "David" };
  return (
    <Container>
      <Title>Login</Title>
      <button onClick={() => setUser(loggedUser)}>Se connecter</button>
    </Container>
  );
};

export default Login;
