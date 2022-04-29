import React, { useState } from "react";
import { FaSpinner } from "react-icons/fa";
import Button from "./Button";

function Contact(props) {
  const [inputs, setInputs] = useState({});
  const [loadMsg, setLoadMsg] = useState(false);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoadMsg(true);
    await fetch("https://ernesto-backend.herokuapp.com/message", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(inputs),
    })
      .then((res) => res.json())
      .then((data) => {
        document.getElementById(
          "alertDiv"
        ).innerHTML = `<p id="msgStatus">${data.message}</p>`;
        setTimeout(() => {
          document.getElementById("alertDiv").innerHTML = "";
        }, 1000);
      })
      .catch((err) => console.log(err));
    setLoadMsg(false);
    setInputs({});
  };

  return (
    <section className={`contact ${props.theme}`} id="contact">
      <div className="contact-container">
        <div className="form-container">
          <form action="" onSubmit={handleSubmit}>
            <h1>Connect with me</h1>
            <div id="alertDiv"></div>
            <input
              type="email"
              placeholder="Email"
              name="email"
              id="email"
              required
              autoComplete="off"
              value={inputs.email || ""}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Subject"
              name="subject"
              required
              autoComplete="off"
              value={inputs.subject || ""}
              onChange={handleChange}
            />
            <textarea
              placeholder="Message..."
              name="message"
              required
              autoComplete="off"
              value={inputs.message || ""}
              onChange={handleChange}
            />
            <span className="form-btn">
              <Button
                buttonStyle="btn-success"
                type={"submit"}
                id="sendMsg"
                label="Send Message"
                children={
                  loadMsg ? (
                    <span className="loading-icon">
                      <FaSpinner />
                    </span>
                  ) : (
                    ""
                  )
                }
              ></Button>
            </span>
          </form>
        </div>
        {props.device ? (
          <p className="side">Contact</p>
        ) : (
          <p className="side">
            C<br />o<br />n<br />t<br />a<br />c<br />t
          </p>
        )}
      </div>
    </section>
  );
}

export default Contact;
