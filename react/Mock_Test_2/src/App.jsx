import React from "react";
import pic from "./assets/hero.png";

function App() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f0f2f5",
      }}
    >
      <div
        style={{
          width: "350px",
          backgroundColor: "white",
          borderRadius: "15px",
          padding: "20px",
          textAlign: "center",
          boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
        }}
      >
        <h2>STUDENT CARD</h2>

        <img
          src={pic}
          alt="student"
          style={{
            width: "120px",
            height: "120px",
            borderRadius: "50%",
            objectFit: "cover",
          }}
        />

        <h3>Aarav Chauhan</h3>
        <p>B.Tech CSE</p>
        <p>ABES Engineering College</p>

        <button
          style={{
            padding: "10px 20px",
            border: "none",
            borderRadius: "20px",
            backgroundColor: "blue",
            color: "white",
          }}
        >
          View Profile
        </button>
      </div>
    </div>
  );
}

export default App;