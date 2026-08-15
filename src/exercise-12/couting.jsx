import { useState } from "react";

function Counting() {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <h1>Counting App</h1>

      <h2>{count}</h2>

      <button onClick={decrease} disabled={count === 0}>
        Decrease
      </button>

      <button onClick={increase}>
        Increase
      </button>
    </div>
  );
}

export default Counting;