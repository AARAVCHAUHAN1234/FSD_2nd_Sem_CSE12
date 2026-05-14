// 
import React, { useState } from "react";

function App() {
  // Step 3: Create state variable
  const [count, setCount] = useState(0);

  // Step 6: Event handlers
  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Counter Application</h1>

      {/* Step 4: Display counter value */}
      <h2>Count: {count}</h2>

      {/* Step 5: Buttons */}
      <button onClick={increment}>Increment</button>

      <button onClick={decrement} style={{ marginLeft: "10px" }}>
        Decrement
      </button>

      <button onClick={reset} style={{ marginLeft: "10px" }}>
        Reset
      </button>
    </div>
  );
}

export default App;