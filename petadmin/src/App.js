import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import PetList from "./components/PetList";
import Event from "./components/Event";
import AdoptionList from "./components/AdoptionList";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/petlist" element={<PetList />} />
        <Route path="/event" element={<Event />} />
        <Route path="/adopt-list" element={<AdoptionList />} />
      </Routes>
    </Router>
  );
}

export default App;
