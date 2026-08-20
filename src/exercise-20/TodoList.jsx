import { useContext } from "react";
import TodoContext from "./TodoContext";
import TodoItem from "./TodoItem";
import styles from "../exercise-19/TodoApp.module.css"
const TodoList = () => {
    const { state } = useContext(TodoContext);

    return (
        <ul className="">
            {state.map((todo) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                />
            ))}
        </ul>
    );
};

export default TodoList;