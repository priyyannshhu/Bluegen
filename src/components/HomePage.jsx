import React from "react";
import { useNavigate } from "react-router-dom";
import DeepamOrg from "./deepam_orig.png";

const HomePage = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/chat");
  };

  return (
    <div className="main-container flex flex-col items-center min-h-screen">
      <div className="left-section text-center mb-4 flex-grow flex items-center justify-center">
        <img
          src={DeepamOrg}
          alt="Deepam Org"
          className="floating-krishna w-full max-w-[700px] animate-float mt-8 rounded-lg"
        />
      </div>
      <div className="right-section text-white text-right ml-8 mb-12">
        <div className="text-part-1">
          <h1 className="text-4xl font-extrabold">
            Have Doubts or
            <br /> Questions in Life?
          </h1>
        </div>
        <div className="text-part-2 mt-4">
          <p className="text-xl font-semibold">
            Ask within, find answers, discover your
            <br /> inner-self.
          </p>
        </div>
        <button
          className="ask-button capsule-button mt-6"
          onClick={handleButtonClick}
        >
          Start Asking &gt;
        </button>
      </div>
    </div>
  );
};

export default HomePage;
