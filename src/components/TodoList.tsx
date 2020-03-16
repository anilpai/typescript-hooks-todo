import * as React from "react";
import { Context } from "../context";

const TodoList : React.FC<{}> = () => {
    const {state, dispatch} = React.useContext(Context)
    return (
        <div className="gridItems">
            {state.todos.map(item => {
                console.log(item)
                return (
                    <div 
                        key={item.id}
                        onDoubleClick={()=>
                            dispatch({type: "TOGGLE_TODO", payload: item})
                        }
                    >
                    <span
                        style={!item.completed ? {textDecoration: "none"} : { textDecoration: "line-through" }}
                    >
                        {item.text}
                    </span>
                    <i onClick={()=> dispatch({ type: "DELETE_TODO", payload: item}) }
                    >
                        X
                    </i>
                    </div>
                );
            })}
        </div>
    )
};

export default TodoList;