
import { useSelector } from "react-redux";

const TodoFilter = ({ filter, setFilter }) => {
    const todos = useSelector((state) => state.todos);

    const remaining = todos.filter(
        (todo) => !todo.completed
    ).length;

    return (
        <div className="todo-filter">
            <div>
                <button onClick={() => setFilter("All")}>
                    All
                </button>

                <button onClick={() => setFilter("Pending")}>
                    Pending
                </button>

                <button onClick={() => setFilter("Completed")}>
                    Completed
                </button>
            </div>

            <p>Remaining tasks: {remaining}</p>
        </div>
    );
};

export default TodoFilter;
