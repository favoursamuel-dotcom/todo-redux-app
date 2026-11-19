

import {
    ADD_TODO,
    DELETE_TODO,
    EDIT_TODO,
    TOGGLE_TODO
} from "./todoType";

export const addTodo = (todo) => {
    return {
        type: ADD_TODO,
        payload: todo
    };
};

export const editTodo = (id, title) => {
    return {
        type: EDIT_TODO,
        payload: {
            id,
            title
        }
    };
};

export const toggleTodo = (id) => {
    return {
        type: TOGGLE_TODO,
        payload: id
    };
};

export const deleteTodo = (id) => {
    return {
        type: DELETE_TODO,
        payload: id
    };
};