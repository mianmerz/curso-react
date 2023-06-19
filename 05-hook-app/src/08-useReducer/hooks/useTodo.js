import { useReducer, useEffect } from "react";
import { todoReducer } from "../todoReducer";

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const useTodo = () => {
    const initialState = [];

    const [todos, dispatch] = useReducer(todoReducer, initialState, init);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const handleNewTodo = (newTodo) => {
        const action = {
            type: 'ADD_TODO',
            payload: newTodo
        };

        dispatch(action);
    }

    const handleDeleteTodo = (todoId) => {
        const action = {
            type: 'DELETE_TODO',
            payload: todoId
        };

        dispatch(action);
    }

    const handleToggleTodo = (todoId) => {
        const action = {
            type: 'TOGGLE_TODO',
            payload: todoId
        };

        dispatch(action);
    }

    return {
        todos,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo,
    }
}