import { useReducer } from "react";
import TodoContext from "./TodoContext";
import { reducer, initialState } from "./reducer";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import styles from "./TodoApp.module.css"

const TodoApp = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <TodoContext.Provider value={{ state, dispatch }}>
            <div className={styles.container}>
                <div className={styles.box}>
                    <h2>Todo App with  exercise-19</h2>

                    <TodoForm />

                    <TodoList />
                </div>
            </div>
        </TodoContext.Provider>
    );
};

export default TodoApp;