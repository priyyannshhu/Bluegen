import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import QuotesPage from "./components/QuotesPage";
import ChatPage from "./components/ChatPage";
import BooksPage from "./components/BooksPage";
import About from "./components/About";

import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy"; // Keep this import
import SummaryPage from "./components/SummaryPage";
import Chapter1 from "./components/Chapter1";
import Chapter2 from "./components/Chapter2";
import Chapter3 from "./components/Chapter3";
import Chapter4 from "./components/Chapter4";
import Chapter5 from "./components/Chapter5";
import Chapter6 from "./components/Chapter6";
import Chapter7 from "./components/Chapter7";
import Chapter8 from "./components/Chapter8";
import Chapter9 from "./components/Chapter9";
import Chapter10 from "./components/Chapter10";
import Chapter11 from "./components/Chapter11";
import Chapter12 from "./components/Chapter12";
import Chapter13 from "./components/Chapter13";
import Chapter14 from "./components/Chapter14";
import Chapter15 from "./components/Chapter15";
import Chapter16 from "./components/Chapter16";
import Chapter17 from "./components/Chapter17";
import Chapter18 from "./components/Chapter18";
import TeamSection from "./components/TeamSection";


const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          {}
          <Route
            path="/"
            element={
              <>
                <Header />
                <HomePage />
                <TeamSection />
                <Footer />
              </>
            }
          />
          {}
          <Route
            path="/about"
            element={
              <>
                <Header />
                <About />
                <Footer />
              </>
            }
          />
          <Route
            path="/quotes"
            element={
              <>
                <Header />
                <QuotesPage />
                <Footer />
              </>
            }
          />
          <Route
            path="/chat"
            element={
              <>
                <Header />
                <ChatPage />
                <Footer />
              </>
            }
          />
          <Route
            path="/books"
            element={
              <>
                <Header />
                <BooksPage />
                <Footer />
              </>
            }
          />
          {}
          <Route
            path="/summary"
            element={
              <>
                <Header />
                <SummaryPage />
                <Footer />
              </>
            }
          />
          {}
          <Route
            path="/chapter1"
            element={
              <>
                <Header />
                <Chapter1 />
                <Footer />
              </>
            }
          />
          <Route
            path="/chapter2"
            element={
              <>
                <Header />
                <Chapter2 />
                <Footer />
              </>
            }
          />
          <Route
            path="/chapter3"
            element={
              <>
                <Header />
                <Chapter3 />
                <Footer />
              </>
            }
          />
          <Route
            path="/chapter4"
            element={
              <>
                <Header />
                <Chapter4 />
                <Footer />
              </>
            }
          />
          <Route
            path="/chapter5"
            element={
              <>
                <Header />
                <Chapter5 />
                <Footer />
              </>
            }
          />
          <Route
            path="/chapter6"
            element={
              <>
                <Header />
                <Chapter6 />
                <Footer />
              </>
            }
          />
          <Route
            path="/chapter7"
            element={
              <>
                <Header />
                <Chapter7 />
                <Footer />
              </>
            }
          />
          <Route
            path="/chapter8"
            element={
              <>
                <Header />
                <Chapter8 />
                <Footer />
              </>
            }
          />
          <Route
            path="/chapter9"
            element={
              <>
                <Header />
                <Chapter9 />
                <Footer />
              </>
            }
          />
          <Route
            path="/chapter10"
            element={
              <>
                <Header />
                <Chapter10 />
                <Footer />
              </>
            }
          />
          <Route
            path="/chapter11"
            element={
              <>
                <Header />
                <Chapter11 />
                <Footer />
              </>
            }
          />
          <Route
            path="/chapter12"
            element={
              <>
                <Header />
                <Chapter12 />
                <Footer />
              </>
            }
          />
          <Route
            path="/chapter13"
            element={
              <>
                <Header />
                <Chapter13 />
                <Footer />
              </>
            }
          />
          <Route
            path="/chapter14"
            element={
              <>
                <Header />
                <Chapter14 />
                <Footer />
              </>
            }
          />
          <Route
            path="/chapter15"
            element={
              <>
                <Header />
                <Chapter15 />
                <Footer />
              </>
            }
          />
          <Route
            path="/chapter16"
            element={
              <>
                <Header />
                <Chapter16 />
                <Footer />
              </>
            }
          />
          <Route
            path="/chapter17"
            element={
              <>
                <Header />
                <Chapter17 />
                <Footer />
              </>
            }
          />
          <Route
            path="/chapter18"
            element={
              <>
                <Header />
                <Chapter18 />
                <Footer />
              </>
            }
          />
          <Route path="/" exact component={HomePage} /> {}
          <Route path="/" element={<SummaryPage />} />
          <Route path="/chapter:id" element={<SummaryPage />} />
          {}
          <Route path="/terms" element={<Terms />} /> {/* Use Terms component */}
        <Route path="/privacy" element={<Privacy />} /> {/* If you have a Privacy component, change this accordingly */}
       
        </Routes>
      </div>
    </Router>
  );
};

export default App;
