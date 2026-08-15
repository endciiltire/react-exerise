import { useReducer } from "react";

const initialState = {
  countA: 0,
  countB: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "INCREASE_A":
      return {
        ...state,
        countA: state.countA + 1,
      };

    case "DECREASE_A":
      return {
        ...state,
        countA: state.countA > 0 ? state.countA - 1 : 0,
      };

    case "INCREASE_B":
      return {
        ...state,
        countB: state.countB + 1,
      };

    case "DECREASE_B":
      return {
        ...state,
        countB: state.countB > 0 ? state.countB - 1 : 0,
      };

    case "RESET":
      return initialState;

    default:
      return state;
  }
}

function Count() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>Double Counter</h1>

      <h2>Counter A: {state.countA}</h2>

      <button
        onClick={() => dispatch({ type: "DECREASE_A" })}
        disabled={state.countA === 0}
      >
        - A
      </button>

      <button onClick={() => dispatch({ type: "INCREASE_A" })}>
        + A
      </button>

      <h2>Counter B: {state.countB}</h2>

      <button
        onClick={() => dispatch({ type: "DECREASE_B" })}
        disabled={state.countB === 0}
      >
        - B
      </button>

      <button onClick={() => dispatch({ type: "INCREASE_B" })}>
        + B
      </button>

      <br />

      <button onClick={() => dispatch({ type: "RESET" })}>
        Reset Both
      </button>
    </div>
  );
}

export default Count;