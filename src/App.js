import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./common/Navbar";
import Footer from "./common/Footer";
import ProfileView from "./components/Profile";
import ProjectsView from "./components/Projects";
import ContactView from "./components/Contact";
import AchievementsView from "./components/Achievements";
import HomepageView from "./components/Homepage";

import updateTheme from "./utils/updateTheme";

import './App.css';

function App() {

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [lang, setLang] = useState("en");

  const buildComponent = (element) => {
    return (
      React.createElement(element, {
        lang: lang,
      })
    )
  }

  updateTheme(theme);

  return (
    <div className="portfolio-main-body">
      <Navbar theme={theme} setTheme={setTheme} lang={lang} setLang={setLang} />
      <main className="container portfolio-container">
        <Routes>
          <Route path="/" element={buildComponent(HomepageView)} />
          <Route path="/achievements" element={buildComponent(AchievementsView)} />
          <Route path="/contact" element={buildComponent(ContactView)} />
          <Route path="/profile" element={buildComponent(ProfileView)} />
          <Route path="/projects" element={buildComponent(ProjectsView)} />
        </Routes>
      </main>
      <Footer lang={lang} />
    </div >
  );
}

export default App;
