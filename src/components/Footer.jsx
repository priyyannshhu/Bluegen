import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";
import "./Footer.css";

const FooterBar = () => {
  return (
    <footer className="footer-bar">
      <div className="social-links">
        <a
          href="https://github.com/priyyannshhu"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="icon colorful-icon" /> GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/priyanshu-vishwakarmaa/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="icon colorful-icon" /> LinkedIn
        </a>
        <a
          href="https://wa.me/+919451660562"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp className="icon colorful-icon" /> WhatsApp
        </a>
        <a
          href="mailto:priyanshu4help@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaEnvelope className="icon colorful-icon" /> Email
        </a>
        <a
          href="https://www.instagram.com/priyyannshhu"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="icon colorful-icon" /> Instagram
        </a>
      </div>
    </footer>
  );
};

export default FooterBar;
