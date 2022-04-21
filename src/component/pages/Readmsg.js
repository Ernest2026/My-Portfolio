import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Readmsg = () => {
  const { userId } = useParams();
  const [message, setMessage] = useState({});

  useEffect(() => {
    fetch("https://ernesto-backend.herokuapp.com/api/usermessage", {
      method: "post",
      headers: {
        authorization: sessionStorage.getItem("token"),
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId }),
    })
      .then((res) => res.json())
      .then((data) => setMessage(data));
  }, []);

  sessionStorage.getItem("token") === null &&
    (window.location.href = "/mailbox");

  return (
    <div>
      {message && (
        <div
          style={{
            width: "500px",
            borderTop: "10px solid #04aa6d",
            backgroundColor: "#cdcddf",
            minHeight: "400px",
            borderRadius: "20px",
            margin: "5rem auto",
            padding: "30px",
          }}
        >
          <p style={{ fontSize: "2.5rem" }}>
            <small>Subject: </small>
            <b>{message.subject}</b>
          </p>
          <p style={{ fontSize: "2rem" }}>
            <small>Email: </small>
            <b>{message.email}</b>
          </p>
          <p style={{ fontSize: "1.8rem", marginTop: "10px" }}>
            {message.message}
          </p>
        </div>
      )}
    </div>
  );
};

export default Readmsg;
