import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import TrialRegistrationPage from "./pages/TrialRegistrationPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/registration" element={<TrialRegistrationPage />} />
        <Route
          path="/admin"
          element={
            <h2 style={{ textAlign: "center", marginTop: "50px" }}>
              Admin-Seite – Bald verfügbar!
            </h2>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
