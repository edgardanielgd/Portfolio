import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./common/Navbar";
import ProfileView from "./components/Profile";
import ProjectsView from "./components/Projects";
import ContactView from "./components/Contact";
import AchievementsView from "./components/Achievements";
import HomepageView from "./components/Homepage";

import './App.css';

function App() {

  const [theme, setTheme] = useState("light");
  const [lang, setLang] = useState("en");

  const buildComponent = (element) => {
    return (
      React.createElement(element, {
        lang: lang,
      })
    )
  }

  return (
    <div>
      <Navbar theme={theme} setTheme={setTheme} lang={lang} setLang={setLang} />
      <Routes>
        <Route path="/" element={buildComponent(HomepageView)} />
        <Route path="/achievements" element={buildComponent(AchievementsView)} />
        <Route path="/contact" element={buildComponent(ContactView)} />
        <Route path="/profile" element={buildComponent(ProfileView)} />
        <Route path="/projects" element={buildComponent(ProjectsView)} />
      </Routes>
    </div>
  );
}

export default App;
