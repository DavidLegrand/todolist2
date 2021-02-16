import React from "react";

const Controls = ({ update }) => {
  return (
    <>
      <button onClick={() => update(true)}>Tout terminer</button>
      <button onClick={() => update(false)}>Tout annuler</button>
    </>
  );
};

export default Controls;
