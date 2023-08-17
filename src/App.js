import React, { useState, useRef, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./common/Navbar";
import Footer from "./common/Footer";
import ProfileView from "./components/Profile";
import ProjectsView from "./components/Projects";
import ContactView from "./components/Contact";
import AchievementsView from "./components/Achievements";
import HomepageView from "./components/Homepage";

import updateTheme from "./utils/updateTheme";
import animationPkg from "./animation/animateBackground";

import './App.css';

const { animateBackground, keyPressHandler, mouseMovedHandler } = animationPkg;

function App() {

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [lang, setLang] = useState("en");

  const buildComponent = (element) => {
    return (
      <div style={{ zIndex: 1 }}>
        {React.createElement(
          element, {
          lang: lang,
          theme: theme
        })}
      </div>
    )
  }

  updateTheme(theme);

  const requestRef = useRef();

  // Register canvas event listeners
  useEffect(() => {
    window.addEventListener('keydown', (e) => keyPressHandler(e));
    window.addEventListener('mousemove', (e) => mouseMovedHandler(e));
    return () => {
      window.removeEventListener('keydown', (e) => keyPressHandler(e));
      window.removeEventListener('mousemove', (e) => mouseMovedHandler(e));
    }

  }, []);

  // Start the persistent animation loop
  useEffect(() => {
    requestRef.current = requestAnimationFrame((time) => {
      animateBackground(canvasTarget.current, theme, time, requestRef);
    });

    return () => cancelAnimationFrame(requestRef.current);
  }, [theme]);

  // We'll draw over the main container
  const canvasTarget = useRef();

  return (
    <div className="portfolio-main-body">
      <Navbar theme={theme} setTheme={setTheme} lang={lang} setLang={setLang} />
      <main className="container portfolio-container" style={{ position: 'relative' }}>

        <canvas ref={canvasTarget} style={{
          position: 'absolute',
          top: 0,
          left: 0,
          pointerEvents: 'none',
          zIndex: 0
        }}
        ></canvas>

        <div style={{
          zIndex: 1,
          position: 'relative'
        }}>
          <Routes>
            <Route path="/" element={buildComponent(HomepageView)} />
            <Route path="/achievements" element={buildComponent(AchievementsView)} />
            <Route path="/contact" element={buildComponent(ContactView)} />
            <Route path="/profile" element={buildComponent(ProfileView)} />
            <Route path="/projects" element={buildComponent(ProjectsView)} />
          </Routes>
        </div>

      </main>
      <Footer lang={lang} />
    </div >
  );
}

export default App;
