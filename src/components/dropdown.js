import React from "react";
import { Link } from "react-router-dom";
import "./Dropdown.css";

const Dropdown = () => {
  return (
    <div className="dropdown">
      <button className="dropbtn">Chapters</button>
      <div className="dropdown-content">
        <Link to="/books">About Bhagavad Gita</Link>
        <Link to="/chapter1">Chapter 1: Arjuna Vishada Yoga</Link>
        <Link to="/chapter2">Chapter 2: Sankhya Yoga</Link>
        <Link to="/chapter3">Chapter 3: Karma Yoga</Link>
        <Link to="/chapter4">Chapter 4: Jnana Karma Sanyasa Yoga</Link>
        <Link to="/chapter5">Chapter 5: Karma Sanyasa Yoga</Link>
        <Link to="/chapter6">Chapter 6: Dhyana Yoga</Link>
        <Link to="/chapter7">Chapter 7: Jnana Vijnana Yoga</Link>
        <Link to="/chapter8">Chapter 8: Aksara Brahma Yoga</Link>
        <Link to="/chapter9">Chapter 9: Raja Vidya Raja Guhya Yoga</Link>
        <Link to="/chapter10">Chapter 10: Vibhuti Yoga</Link>
        <Link to="/chapter11">Chapter 11: Vishwarupa Darshana Yoga</Link>
        <Link to="/chapter12">Chapter 12: Bhakti Yoga</Link>
        <Link to="/chapter13">Chapter 13: Kshetra Kshetragna Vibhaga Yoga</Link>
        <Link to="/chapter14">Chapter 14: Gunatraya Vibhaga Yoga</Link>
        <Link to="/chapter15">Chapter 15: Purushottama Yoga</Link>
        <Link to="/chapter16">Chapter 16: Daivasura Sampad Vibhaga Yoga</Link>
        <Link to="/chapter17">Chapter 17: Sraddhatraya Vibhaga Yoga</Link>
        <Link to="/chapter18">Chapter 18: Moksha Sanyasa Yoga</Link>
      </div>
    </div>
  );
};

export default Dropdown;
