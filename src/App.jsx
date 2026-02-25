import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import HomePage from "./components/HomePage.jsx";
import QuotesPage from "./components/QuotesPage.jsx";
import ChatPage from "./components/ChatPage.jsx";
import BooksPage from "./components/BooksPage.jsx";
import About from "./components/About.jsx";

import Terms from "./pages/Terms.jsx";
import Privacy from "./pages/Privacy.jsx"; // Keep this import
import SummaryPage from "./components/SummaryPage.jsx";
import Chapter1 from "./components/Chapter1.jsx";
import Chapter2 from "./components/Chapter2.jsx";
import Chapter3 from "./components/Chapter3.jsx";
import Chapter4 from "./components/Chapter4.jsx";
import Chapter5 from "./components/Chapter5.jsx";
import Chapter6 from "./components/Chapter6.jsx";
import Chapter7 from "./components/Chapter7.jsx";
import Chapter8 from "./components/Chapter8.jsx";
import Chapter9 from "./components/Chapter9.jsx";
import Chapter10 from "./components/Chapter10.jsx";
import Chapter11 from "./components/Chapter11.jsx";
import Chapter12 from "./components/Chapter12.jsx";
import Chapter13 from "./components/Chapter13.jsx";
import Chapter14 from "./components/Chapter14.jsx";
import Chapter15 from "./components/Chapter15.jsx";
import Chapter16 from "./components/Chapter16.jsx";
import Chapter17 from "./components/Chapter17.jsx";
import Chapter18 from "./components/Chapter18.jsx";
import TeamSection from "./components/TeamSection.jsx";


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
