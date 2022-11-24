import React, { createContext, useState } from "react";

const ToDoContext = createContext({});

const ToDoProvider = ({ children }) => {
  const [toDos, setToDos] = useState([
    { id: 71611813, text: "sdffdf", completed: true },
    {
      id: 20933523,
      text: "sdf",
      completed: true,
    },
  ]);
  return (
    <ToDoContext.Provider
      value={{
        toDos,
        setToDos,
        addtodo: (todo) => {
          setToDos((list) => setToDos([todo, ...list]));
        },
        delete_todo: (todo_id) => {
          const filter = toDos.filter((todo) => todo.id !== todo_id);
          setToDos([...filter]);
          console.log(filter);
        },
        edit_todo: (update_todo) => {
          console.log({ update_todo });
          setToDos(
            toDos.map((todo) => {
              if (todo.id === update_todo.id) {
                todo = { ...update_todo };
              }
              return todo;
            })
          );
        },
      }}
    >
      {children}
    </ToDoContext.Provider>
  );
};

export { ToDoProvider, ToDoContext };
