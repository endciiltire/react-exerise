import { useContext } from "react";
import TodoContext from "./TodoContext";
import styles from "../exercise-19/TodoApp.module.css"
const TodoItem = ({ todo }) => {
    const { dispatch } = useContext(TodoContext);

    return (
        <li className="flex min-h-14 items-center mb-3 px-3 bg-[#f7f8fa] rounded-lg box-border">
            <input
                   className="w-5 h-5 mr-3 cursor-pointer accent-[#1677ff]"
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
        className={`flex-1 text-base ${
          todo.completed
            ? "line-through text-gray-400"
            : "text-gray-700"
        }`}
      >
        {todo.text}
      </span>

           <button
        onClick={() =>
          dispatch({
            type: "delete",
            payload: todo.id,
          })
        }
        className="border-0 bg-transparent text-red-500 text-base cursor-pointer hover:text-red-800"
      >
        Delete
      </button>

        </li>
    );
};

export default TodoItem;