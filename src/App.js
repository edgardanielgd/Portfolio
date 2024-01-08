import React, { useState, useRef, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./common/Navbar";
import Footer from "./common/Footer";
import ProfileView from "./components/Profile";
import ProjectsView from "./components/Projects";
import ContactView from "./components/Contact";
import AchievementsView from "./components/Achievements";
import HomepageView from "./components/Homepage";

import { updateTheme } from "./utils/updateTheme";
import { handleTheneChange, initializeAnimation } from "./animation/animateBackground";

import config from "./config";

import './App.css';

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

  const canvasRef = useRef();

  // Start the persistent animation loop
  useEffect(() => {
    handleTheneChange(theme);
  }, [theme]);

  useEffect(() => {
    initializeAnimation(canvasRef.current);
  }, []);

  return (
    <div className="portfolio-main-body">
      <Navbar theme={theme} setTheme={setTheme} lang={lang} setLang={setLang} />
      <main className="container portfolio-container" style={{ position: 'relative' }}>


        <div id={config.ANIMATION_CONTAINER_ID} style={{
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: 0,
          width: '100%',
          height: '100%'
        }} >
          <canvas
            ref={canvasRef}
          />
        </div>

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

      </main >
      <Footer lang={lang} />
    </div >
  );
}

export default App;
