
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
    deleteTodo,
    editTodo,
    toggleTodo
} from "../redux/actions/todoActions";

const TodoItem = ({ todo }) => {
    const dispatch = useDispatch();

    const [isEditing, setIsEditing] = useState(false);
    const [newTitle, setNewTitle] = useState(todo.title);

    const handleEdit = () => {
        if (newTitle.trim() === "") return;

        dispatch(editTodo(todo.id, newTitle.trim()));
        setIsEditing(false);
    };

    return (
        <div className="todo-item">
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => dispatch(toggleTodo(todo.id))}
            />

            {isEditing ? (
                <>
                    <input
                        type="text"
                        value={newTitle}
                        onChange={(e) => setNewTitle(e.target.value)}
                    />
                    <button onClick={handleEdit}>Save</button>
                    <button onClick={() => {
                        setNewTitle(todo.title);
                        setIsEditing(false);
                    }}>
                        Cancel
                    </button>
                </>
            ) : (
                <>
                    <span
                        style={{
                            textDecoration: todo.completed
                                ? "line-through"
                                : "none"
                        }}
                    >
                        {todo.title}
                    </span>

                    <button onClick={() => {
                        setNewTitle(todo.title);
                        setIsEditing(true);
                    }}>
                        Edit
                    </button>

                    <button onClick={() => dispatch(deleteTodo(todo.id))}>
                        Delete
                    </button>
                </>
            )}
        </div>
    );
};

export default TodoItem;
