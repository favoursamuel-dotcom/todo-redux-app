
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const TodoList = ({ filter = "All" }) => {
    const todos = useSelector((state) => state.todos);

    const filteredTodos = todos.filter((todo) => {
        if (filter === "Completed") {
            return todo.completed;
        }

        if (filter === "Pending") {
            return !todo.completed;
        }

        return true;
    });

    return (
        <div>
            {filteredTodos.length === 0 ? (
                <p>No tasks found.</p>
            ) : (
                filteredTodos.map((todo) => (
                    <TodoItem key={todo.id} todo={todo} />
                ))
            )}
        </div>
    );
};

export default TodoList;
