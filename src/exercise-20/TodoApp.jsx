import { useReducer } from "react";
import TodoContext from "./TodoContext";
import { reducer, initialState } from "./reducer";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import styles from "../exercise-19/TodoApp.module.css"


const TodoApp = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <TodoContext.Provider value={{ state, dispatch }}>
            <div className="bg-sky-200  w-[400px] h-[200px] mt-10 ml-70 mr-50 rounded-md  ">
                <div className="text-black ">
                    <h2>Todo App with  exercise-20</h2>

                    <TodoForm />

                    <TodoList />
                </div>
            </div>
        </TodoContext.Provider>
    );
};

export default TodoApp;