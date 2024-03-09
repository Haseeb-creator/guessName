// src/App.js
import React, { useState } from "react";
import { Button, Form, Container } from "react-bootstrap";
import "./App.css";
import Guess from "./component/Guess";

function App() {
  const [name, setName] = useState("");
  const [guessData, setGuessData] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(name, "clicked");
    try {
      const response = await fetch("http://localhost:5000/api/guess", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name }),
      });

      const data = await response.json();
      setGuessData(data);
    } catch (error) {
      console.error("Error submitting form:", error.message);
    }
  };

  return (
    <Container className="d-flex flex-column align-items-center justify-content-center vh-100">
      <h1 className="mb-4">Enter the Name and Let's Play the Guessing Game!</h1>
      <Form onSubmit={handleSubmit} className="book-form mb-5">
        <Form.Group controlId="formName">
          <Form.Label>Name:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="book-input"
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="book-button">
          Guess
        </Button>
      </Form>
      <Guess guessData={guessData} />
    </Container>
  );
}

export default App;
