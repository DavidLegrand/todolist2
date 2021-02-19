import { createContext, useState, useEffect, useContext } from "react";
import useFetch from "hooks/useFetch";

import User from "context/User";
import { objToArr } from "utils";

const defaultList = [];
const List = createContext(defaultList);

export const ListProvider = ({ children }) => {
  const [list, setList] = useState(defaultList);
  const { user } = useContext(User);
  const doFetch = useFetch();

  useEffect(() => {
    const fetchData = async () => {
      const url = `https://todo-react-7181e-default-rtdb.firebaseio.com/tasks.json?orderBy="userId"&equalTo="${user.uid}"`;
      setList(objToArr(await doFetch(url)));
    };
    if (user) {
      fetchData();
    }
  }, [user, doFetch]);

  return <List.Provider value={{ list, setList }}>{children}</List.Provider>;
};

export default List;
