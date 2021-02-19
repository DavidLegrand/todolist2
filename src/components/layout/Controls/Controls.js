import React from "react";
import Container from "components/shared/Container";

const Controls = ({ update }) => {
  return (
    <Container title="Tout modifier">
      <button onClick={() => update(true)}>Tout terminer</button>
      <button onClick={() => update(false)}>Tout annuler</button>
    </Container>
  );
};

export default Controls;
