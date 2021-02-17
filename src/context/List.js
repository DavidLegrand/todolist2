import { createContext, useState, useEffect, useContext } from "react";

import User from "context/User";
import { objToArr } from "utils";

const defaultList = [];
const List = createContext(defaultList);

export const ListProvider = ({ children }) => {
  const [list, setList] = useState(defaultList);
  const { user } = useContext(User);

  useEffect(() => {
    async function fetchData() {
      try {
        const url = `https://todo-react-7181e-default-rtdb.firebaseio.com/tasks.json?orderBy="userId"&equalTo=${user.id}`;
        const res = await fetch(url);
        if (!res.ok) throw Error(res.statusText);
        else {
          const data = await res.json();
          setList([...objToArr(data)]);
          console.log("données récupérées");
        }
      } catch (e) {
        console.error(e);
      }
    }
    if (user) fetchData();
  }, [user]);

  return <List.Provider value={{ list, setList }}>{children}</List.Provider>;
};

export default List;
