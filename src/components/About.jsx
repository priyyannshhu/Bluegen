import React, { useEffect } from "react";
import "./About.css";

const About = () => {
  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div className="about-container">
      <h1 className="about-heading">About Us</h1>
      <div className="about-content">
        <h2>Welcome to BlueGen!</h2>
        <p>
          BlueGen is a friendly space where you can connect with the wisdom of
          the Bhagavad Gita using artificial intelligence. We believe that these
          teachings can help everyone in today’s busy world.
        </p>

        <h2>Our Goal</h2>
        <p>
          Our goal is to create a chatbot that makes it easy for you to talk
          about the lessons from the Bhagavad Gita. Think of it as a guide that
          listens to your questions and offers thoughtful answers based on the
          wisdom of Lord Krishna.
        </p>

        <h2>What We Provide</h2>
        <p>
          At the center of BlueGen is GitaGPT, our AI chatbot. You can ask it
          anything that’s on your mind, and it will give you helpful responses
          based on the teachings of the Gita. This way, you can find support and
          insight as you navigate through life.
        </p>

        <h2>Experience the Teachings</h2>
        <p>
          We want to create a warm and welcoming space where anyone can explore
          the teachings of the Bhagavad Gita. Whether you’re facing tough
          choices or looking for peace, our chatbot is here to help you discover
          the wisdom you need.
        </p>

        <h2>Join Our Community</h2>
        <p>
          BlueGen is not just a place to learn; it’s a community. We invite you
          to share your experiences, connect with others, and grow together on
          this spiritual journey.
        </p>
      </div>
    </div>
  );
};

export default About;
