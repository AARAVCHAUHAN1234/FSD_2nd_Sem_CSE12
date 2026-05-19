import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(5);

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
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "250px",
          padding: "15px",
          textAlign: "center",
          borderRadius: "15px",
          boxShadow: "0px 0px 10px gray",
        }}
      >
        <h1
          style={{
            marginBottom: "15px",
            fontSize: "28px",
          }}
        >
          React Counter <br />
          Application
        </h1>

        <h2
          style={{
            fontSize: "40px",
            marginBottom: "20px",
          }}
        >
          {count}
        </h2>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "8px",
            marginBottom: "10px",
          }}
        >
          <button
            onClick={increment}
            style={{
              backgroundColor: "#0d6efd",
              color: "white",
              padding: "8px 12px",
              fontSize: "12px",
              borderRadius: "6px",
            }}
          >
            Increment (+)
          </button>

          <button
            onClick={decrement}
            style={{
              backgroundColor: "#0d6efd",
              color: "white",
              padding: "8px 12px",
              fontSize: "12px",
              borderRadius: "6px",
            }}
          >
            Decrement (-)
          </button>
        </div>

        <button
          onClick={reset}
          style={{
            backgroundColor: "#0d6efd",
            color: "white",
            padding: "8px 18px",
            fontSize: "12px",
            borderRadius: "6px",
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;