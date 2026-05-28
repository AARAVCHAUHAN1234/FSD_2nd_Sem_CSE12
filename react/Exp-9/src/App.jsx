import React, { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");
  const [registeredUser, setRegisteredUser] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateForm = () => {
    let newErrors = {};

    if (formData.name.trim() === "") {
      newErrors.name = "Name is required";
    }

    if (!formData.email.includes("@")) {
      newErrors.email = "Email must contain @";
    }

    if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    return newErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSuccess("");
    } else {
      setErrors({});
      setSuccess("Registration Successful!");

      setRegisteredUser(formData);

      setFormData({
        name: "",
        email: "",
        password: ""
      });
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f0f2f5",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
        fontFamily: "Arial"
      }}
    >
      <div
        style={{
          width: "400px",
          backgroundColor: "white",
          padding: "30px",
          borderRadius: "10px",
          boxShadow: "0px 0px 10px rgba(0,0,0,0.2)"
        }}
      >
        <h1
          style={{
            textAlign: "center",
            marginBottom: "20px"
          }}
        >
          Registration Form
        </h1>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            value={formData.name}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "5px",
              borderRadius: "5px",
              border: "1px solid gray"
            }}
          />

          {errors.name && (
            <p style={{ color: "red", marginTop: "0px" }}>
              {errors.name}
            </p>
          )}

          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={formData.email}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "10px",
              marginTop: "10px",
              marginBottom: "5px",
              borderRadius: "5px",
              border: "1px solid gray"
            }}
          />

          {errors.email && (
            <p style={{ color: "red", marginTop: "0px" }}>
              {errors.email}
            </p>
          )}

          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={formData.password}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "10px",
              marginTop: "10px",
              marginBottom: "5px",
              borderRadius: "5px",
              border: "1px solid gray"
            }}
          />

          {errors.password && (
            <p style={{ color: "red", marginTop: "0px" }}>
              {errors.password}
            </p>
          )}

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "12px",
              marginTop: "20px",
              backgroundColor: "blue",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              fontSize: "16px"
            }}
          >
            Register
          </button>
        </form>

        {success && (
          <p
            style={{
              color: "green",
              textAlign: "center",
              marginTop: "15px",
              fontWeight: "bold"
            }}
          >
            {success}
          </p>
        )}

        {registeredUser && (
          <div
            style={{
              marginTop: "20px",
              backgroundColor: "#f4f4f4",
              padding: "15px",
              borderRadius: "5px"
            }}
          >
            <h2 style={{ textAlign: "center" }}>
              Registered User
            </h2>

            <p>
              <strong>Name:</strong> {registeredUser.name}
            </p>

            <p>
              <strong>Email:</strong> {registeredUser.email}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;