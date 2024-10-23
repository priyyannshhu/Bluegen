import React, { useEffect } from "react"; 
import { Link } from "react-router-dom";
import Logo from "./Shlokam-logo-150.png";

const Header = () => {
  const logoImgStyle = {
    width: "50px",
    height: "auto",
    marginRight: "10px",
    cursor: "pointer",
  };

  const logoTextStyle = {
    fontFamily: "Samarkan, cursive",
    fontSize: "3.5rem",
    color: "orangered",
    textAlign: "center",
    flexGrow: 1,
    margin: 0,
  };

  const paragraphStyle = {
    fontFamily: "Samarkan, cursive",
    fontSize: "1.8rem",
    color: "black",
    marginLeft: "10px",
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "http://translate.google.com/translate_a/element.js?cb=loadGoogleTranslate";
    script.async = true;
    document.body.appendChild(script);

    window.loadGoogleTranslate = () => {
      new window.google.translate.TranslateElement(
        { pageLanguage: "en" },
        "google_translate_element"
      );
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem",
      }}
    >
      <Link to="/" className="navbar-x">
        <img
          src={Logo}
          alt="BlueGen Logo"
          className="d-inline-block align-top logo-img"
          style={logoImgStyle}
        />
      </Link>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div style={logoTextStyle}>BlueGen</div>
        <p style={paragraphStyle}>: Your AI-Powered Bhagavad Gita Companion</p>
      </div>
      <ul
        className="navbar"
        style={{
          display: "flex",
          listStyle: "none",
          padding: 0,
          margin: 0,
          marginLeft: "auto",
        }}
      >
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/chat">Chat</Link>
        </li>
        <li>
          <Link to="/books">Book</Link>
        </li>
        <li>
          <Link to="/quotes">Quotes</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <button
            className="translate-button" // Added the translate-button class here
            onClick={() => {
              const translateElement = document.getElementById(
                "google_translate_element"
              );
              if (translateElement) {
                // Toggle display between block and none
                translateElement.style.display = 
                  translateElement.style.display === "block" ? "none" : "block";
              }
            }}
          >
            Translate
          </button>
        </li>
      </ul>
      <div
        id="google_translate_element"
        style={{ display: "none", position: "absolute", top: "5rem" }}
      ></div>
    </nav>
  );
};

export default Header;
