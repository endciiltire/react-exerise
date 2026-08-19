import { useContext } from "react";
import TodoContext from "./TodoContext";
import styles from "./TodoApp.module.css";

const TodoItem = ({ todo }) => {
    const { dispatch } = useContext(TodoContext);

    return (
        <li className={styles.item}>
            <input
                className={styles.checkbox}
                type="checkbox"
                checked={todo.completed}
                onChange={() =>
                    dispatch({
                        type: "toggle",
                        payload: todo.id,
                    })
                }
            />

            <span
                className={`${styles.todoText} ${todo.completed ? styles.completed : ""
                    }`}
            >
                {todo.text}
            </span>

            <button
                className={styles.deleteButton}
                onClick={() =>
                    dispatch({
                        type: "delete",
                        payload: todo.id,
                    })
                }
            >
                Delete
            </button>
        </li>
    );
};

export default TodoItem;