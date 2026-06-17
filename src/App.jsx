import React, { useState } from "react";
import "./App.css";

function App() {
  const [participants, setParticipants] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [workshop, setWorkshop] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const exists = participants.find(
      (participant) => participant.email === email
    );

    if (exists) {
      setMessage("Participant already registered!");
      return;
    }

    const newParticipant = {
      name,
      email,
      workshop,
    };

    setParticipants([...participants, newParticipant]);
    setMessage("Registration Successful!");

    setName("");
    setEmail("");
    setWorkshop("");
  };

  return (
    <div className="container">
      <div className="card">
        <h1>Workshop Registration</h1>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="text"
            placeholder="Workshop Name"
            value={workshop}
            onChange={(e) => setWorkshop(e.target.value)}
            required
          />

          <button type="submit">Register</button>
        </form>

        {message && <p className="message">{message}</p>}

        <h2>Participants List</h2>

        <ul>
          {participants.map((participant, index) => (
            <li key={index}>
              <strong>{participant.name}</strong>
              <br />
              {participant.email}
              <br />
              {participant.workshop}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;