import React from "react";
import Task from "../Task";

const ListView = ({ list, remove, update }) => {
  return (
    <div>
      {list.map((t) => (
        <Task task={t} remove={remove} update={update} key={t.id} />
      ))}
    </div>
  );
};

export default ListView;
