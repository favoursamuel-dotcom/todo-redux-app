
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/actions/todoActions";

const TodoForm = () => {
    const [title, setTitle] = useState("");
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (title.trim() === "") {
            return;
        }

        const newTodo = {
            id: Date.now(),
            title: title.trim(),
            completed: false
        };

        dispatch(addTodo(newTodo));
        setTitle("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Enter a new task"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />

            <button type="submit">Add Todo</button>
        </form>
    );
};

export default TodoForm;
