import React, { useContext, useCallback, useMemo } from "react";
import NewTaskForm from "components/page/NewTaskForm";
import Controls from "components/layout/Controls";
import ListView from "components/layout/ListView";
import Title from "components/shared/Title";
import Container from "components/shared/Container";
import Logout from "components/page/Logout";
import User from "context/User";
import List from "context/List";

import useFetch from "hooks/useFetch";

const ToDoList = () => {
  const { list, setList } = useContext(List);
  const { user } = useContext(User);
  const doFetch = useFetch();

  const options = useMemo(() => ({
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    mode: "cors",
  }), []);

  const removeTask = useCallback(
    (id) => {
      setList(list.filter((t) => t.id !== id));
    },
    [list, setList]
  );
  const addTask = useCallback(
    (form) => {
      const url = `https://todo-react-7181e-default-rtdb.firebaseio.com/tasks.json`;
      const newTask = {
        ...form,
        userId: user.uid,
        id: list
          ? 1
          : list.reduce((prev, current) =>
              prev.id > current.id ? prev : current
            ).id + 1,
      };
      options().method = "POST";
      options().body = JSON.stringify(newTask);
      doFetch(url, options);
      setList([...list, newTask]);
    },
    [doFetch, options, list, setList, user.uid]
  );
  const updateCompleted = useCallback(
    (boolean, id = null) => {
      const newList = list.map((t) => {
        if (id === t.id || id === null) return { ...t, completed: boolean };
        else return t;
      });
      setList(newList);
    },
    [list, setList]
  );

  return (
    <>
        <Logout></Logout>

        <ListView list={list} update={updateCompleted} remove={removeTask} />
        <Controls update={updateCompleted} />
        <NewTaskForm add={addTask} />
    </>
  );
};

export default ToDoList;
