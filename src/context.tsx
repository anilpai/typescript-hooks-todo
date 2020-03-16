import * as React from "react";
import todosReducer from "./reducer";
import { ITodosContext } from "./types";

const todos = [
    { id: "1", text: "First", completed: true},
    { id: "2", text: "Second", completed: false}
]

export const Context = React.createContext({} as ITodosContext);

interface IProps {
    children? : React.ReactChild;
}

export function Provider(props: IProps){
    const [state, dispatch] = React.useReducer(todosReducer, {todos});

    const value = { state, dispatch };

return <Context.Provider value={value}>{props.children}</Context.Provider>;
}