import {uuid}from "uuidv4";
import {ITodosActions, ITodosState} from "./types";

export default function todosReducer(
    state: ITodosState,
    action: ITodosActions
): ITodosState {
    switch(action.type) {
        case "TOGGLE_TODO": {
            const toggledTodo = state.todos.map(item => {
                return item.id === action.payload.id ?
                { ...action.payload, completed: !action.payload.completed}
                : item
            });
            return {
                ...state,
                todos: toggledTodo
            };
        }
        case "DELETE_TODO": {
            const deletedTodo = state.todos.filter(item => {
                return item.id !== action.payload.id;
            });
            return {
                ...state,
                todos: deletedTodo
            };
        }
        case "ADD_TODO": {
            const newTodo = {
                id : uuid(),
                text: action.payload.text,
                completed: false
            };
            return {
                ...state,
                todos: [...state.todos, newTodo]
            };
        }
        default: {
            return state;
        }
    }
}