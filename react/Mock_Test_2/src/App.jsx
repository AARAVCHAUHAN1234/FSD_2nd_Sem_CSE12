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
          boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
          textAlign: "center",
        }}
      >
        <h2 style={{ marginBottom: "20px" }}>STUDENT CARD</h2>

        <img
          src={pic}
          alt="Student"
          style={{
            width: "120px",
            height: "120px",
            borderRadius: "50%",
            objectFit: "cover",
            border: "3px solid blue",
          }}
        />

        <h3 style={{ marginTop: "15px" }}>John Doe</h3>

        <p style={{ color: "gray", margin: "5px 0" }}>
          B.Tech CSE Student
        </p>

        <p style={{ color: "gray" }}>
          ABES Engineering College
        </p>

        <button
          style={{
            marginTop: "20px",
            padding: "10px 20px",
            border: "none",
            borderRadius: "25px",
            backgroundColor: "blue",
            color: "white",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          View Profile
        </button>
      </div>
    </div>
  );
}
  
export default App;