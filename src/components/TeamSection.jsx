import React from "react";
import { Link } from "react-router-dom";

const TeamSection = () => {
  return (
    <section className="team-section">
      <h2>Our Team</h2>
      <p>
        <strong>Priyanshu Vishwakarma</strong> Roll No. 2205251540038
        <br />
        <strong>Alok Kumar Mishra</strong> Roll No. 2205251540011
        <br />
        <strong>Sarthak Suvigya Singh</strong> Roll No. 2205251540043
      </p>
      <p>
        We are all students of B.Tech (Data Science), Third Year at Buddha
        Institute of Technology, GIDA, Gorakhpur.
      </p>
      <div className="footer-bar">
        <span className="footer-names">
          Bluegen by:&nbsp;
          <a
            href="https://www.instagram.com/alok_mishra_456/"
            className="footer-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Alok
          </a>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <a
            href="https://www.instagram.com/priyyannshhu"
            className="footer-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Priyanshu
          </a>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <a
            href="https://www.instagram.com/s8arthak"
            className="footer-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sarthak
          </a>
        </span>
       
      </div>
    </section>
  );
};

export default TeamSection;
