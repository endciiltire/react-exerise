import { useState, useContext } from "react";
import TodoContext from "./TodoContext";
import styles from "../exercise-19/TodoApp.module.css"
const TodoForm = () => {
    const [text, setText] = useState("");

    const { dispatch } = useContext(TodoContext);

    const handleAdd = () => {
        if (text.trim() !== "") {
            const newTodo = {
                id: Date.now(),
                text: text,
                completed: false,
            };

            dispatch({
                type: "add",
                payload: newTodo,
            });

            setText("");
        }
    };

    return (
        <div className="flex gap-2 mb-6">
            <input className=""
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Enter a new todo"
            />


            <button onClick={handleAdd} className="bg-indigo-500  w-[70px] h-[30px]">
                Add
            </button>
        </div>
    );
};

export default TodoForm;