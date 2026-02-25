import React from "react";
import { useNavigate } from "react-router-dom";
import "./ChatPage.css";

const ChatPage = () => {
  const navigate = useNavigate();

  return (
    <section className="chat">
      <h2>Chat with GitaGPT</h2>
      <p className="chat-description">
        Welcome to BlueGen, your AI-powered companion for exploring the
        teachings of the Bhagavad Gita. Ask questions about life, spirituality,
        and personal challenges, and receive guidance inspired by the wisdom of
        Lord Krishna.
      </p>
      <div className="iframe-container">
        <iframe
          src="https://bhagavadgita.io/gitagpt"
          title="Chat with Krishna"
          className="chat-iframe"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
      <div className="button-container mt-6">
        <button className="nav-button" onClick={() => navigate("/")}>
          Home
        </button>
        <button className="nav-button" onClick={() => navigate("/quotes")}>
          Quotes
        </button>
        <button className="nav-button" onClick={() => navigate("/books")}>
          Books
        </button>
        <button className="nav-button" onClick={() => navigate("/about")}>
          About Us
        </button>
      </div>
    </section>
  );
};

export default ChatPage;
