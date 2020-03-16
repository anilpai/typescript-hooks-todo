import * as React from "react";
import { Context } from "../context";

export default function(){
    const [todo, setTodo] = React.useState("");
    const {dispatch} = React.useContext(Context);

    const handleSubmit = (event: React.MouseEvent<HTMLFormElement>): void => {
        event.preventDefault();
        dispatch({ type: "ADD_TODO", payload: {text : todo} })
        setTodo("")
    };
    return (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <input value={todo} placeholder="Enter a task" onChange={event => setTodo(event.target.value)}/>
            </form>
        </div>
    );
}