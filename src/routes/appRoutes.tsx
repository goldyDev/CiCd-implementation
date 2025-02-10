import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "../modules/home";
import AddForm from "../modules/form/addForm";
import CounterPage from "../modules/home/counterPage";

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add" element={<AddForm />} />
        <Route path="/count" element={<CounterPage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
