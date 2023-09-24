import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  function handleAdd() {
    setCount((count) => count + 1);
  }

  return (
    <div style={{ backgroundColor: "cyan", color: "black" }}>
      <h1>Count</h1>
      <h1>{count}</h1>
      <button onClick={handleAdd}>Add +</button>
    </div>
  );
}

export default App;
