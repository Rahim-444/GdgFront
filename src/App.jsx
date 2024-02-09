import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./Componenets/Hero"; // Import the component for the path "/"
import DiscordDashboard from "./Componenets/DashboardDiscord"; // Import the component for the path "/discord"
import Dashboard from "./Componenets/DashboardPost";
import Meeting from "./Componenets/addMeet";
import "./App.css";
import Nav from "./Componenets/Nav";
function App() {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="discord" element={<DiscordDashboard />} />
          <Route path="social" element={<Dashboard />} />
          <Route path="meeting" element={<Meeting />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
