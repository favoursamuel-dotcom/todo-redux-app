import {
    ADD_TODO,
    DELETE_TODO,
    EDIT_TODO,
    TOGGLE_TODO
} from "../actions/todoType";

const initialState = {
    todos: [
        {
            id: 1,
            title: "Learn React",
            completed: true
        },
        {
            id: 2,
            title: "Learn React",
            completed: false
        }
    ]
};

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload]
            };
        case DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter(
                    (todo) => todo.id !== action.payload
                )
            };
        case EDIT_TODO:
            return {
                ...state,
                todos: state.todos.map((todo) =>
                    todo.id === action.payload.id
                        ? { ...todo, title: action.payload.title }
                        : todo
                )
            };

        case TOGGLE_TODO:
            return {
                ...state,
                todos: state.todos.map((todo) =>
                    todo.id === action.payload
                        ? { ...todo, completed: !todo.completed }
                        : todo
                )
            };

        default:
            return state;
    }
};

export default todoReducer;