import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import AddExpense from "./components/addExpens/AddExpense";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/add-expense" element={<AddExpense />} />
      </Routes>
    </Router>
  );
}

export default App;
