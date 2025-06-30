import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import ProjectDetail from "./pages/projectDetail";
import StarryBackground from "./components/layout/StarryBackground";
import Header from "./components/Header";

function App() {
  const location = useLocation();
  const isProjectDetail = location.pathname.startsWith("/projects/");

  return (
    <div className="App">
      <StarryBackground />

      <Header mode={isProjectDetail ? "project" : "home"} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
      </Routes>
    </div>
  );
}

export default App;
