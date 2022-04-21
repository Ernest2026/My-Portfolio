import React, { useState, useEffect } from "react";
import Button from "../Button";

const Mail = () => {
  const [messages, setMessages] = useState({});
  const [inputs, setInputs] = useState({});
  const [token, setToken] = useState("");

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setInputs((values) => ({ ...values, [name]: value }));
  };

  const inputStyle = {
    width: "100%",
    backgroundColor: "var(--white)",
    color: "var(--dark-e)",
    fontSize: "1.6rem",
    fontFamily: "bmedium, sans-serif",
    padding: "1.5rem 2.5rem",
    borderRadius: "0.5rem",
    outline: "none",
    border: "none",
    marginBottom: "1.5rem",
  };

  useEffect(() => {
    fetch("https://ernesto-backend.herokuapp.com/api/messages", {
      method: "post",
      headers: {
        authorization: sessionStorage.getItem("token"),
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setMessages(data));
  }, [token]);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://ernesto-backend.herokuapp.com/api/login", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(inputs),
    })
      .then((res) => res.json())
      .then((data) => {
        sessionStorage.setItem("token", data.token);
        setToken(data.token);
      });
  };

  return (
    <div
      style={{
        position: "relative",
        minHeight: "100vh",
        backgroundColor: "var(--grey-e)",
      }}
    >
      {messages.length >= 1 ? (
        <table id="customers">
          <tbody>
            <tr>
              <th style={{ width: "25%" }}>Email</th>
              <th style={{ width: "50%" }}>Subject</th>
              <th style={{ width: "25%" }}>Time</th>
            </tr>
            {messages.map((data) => (
              <tr
                key={data._id}
                onClick={() => (window.location.href = `/mailbox/${data._id}`)}
              >
                <td>{data.email}</td>
                <td>{data.subject}</td>
                <td>{new Date(data.time).toUTCString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div
          style={{
            position: "absolute",
            width: "400px",
            margin: "0 auto",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            padding: "10px",
            backgroundColor: "#04aa6d",
            borderRadius: "5px",
          }}
        >
          <form action="" onSubmit={handleSubmit}>
            <h2 style={{ marginBottom: "10px" }}>Login as admin</h2>
            <input
              type="email"
              placeholder="Email"
              name="email"
              id="email"
              required
              autoComplete="off"
              style={inputStyle}
              value={inputs.email || ""}
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              required
              autoComplete="off"
              style={inputStyle}
              value={inputs.password || ""}
              onChange={handleChange}
            />
            <span className="form-btn">
              <Button
                buttonStyle="btn-success"
                type={"submit"}
                children="Login"
              ></Button>
            </span>
          </form>
        </div>
      )}
    </div>
  );
};

export default Mail;
