import React from "react";
import Task from "components/layout/Task";
import Container from "components/shared/Container";

const ListView = ({ list, remove, update }) => {
  return (
    <Container title="To Do List">
      {list.map((t) => (
        <Task task={t} remove={remove} update={update} key={t.id} />
      ))}
    </Container>
  );
};

export default ListView;
