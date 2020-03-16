import * as React from "react";
import { render } from "react-dom";
import { Provider } from "./context";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

import "./styles.css";

const App: React.FC<{}> = () => {
    return (
        <Provider>
            <div className="App">
                <TodoForm />
                <TodoList />
                <div className="rules">
                    <p>Double Click - complete task</p>
                    <p>X - delete task</p>
                </div>
            </div>
        </Provider>
    )
};

const rootElement = document.getElementById("root");
render(<App/>, rootElement);