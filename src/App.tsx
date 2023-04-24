import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/home";
import EditJoke from "./pages/edit-joke";
import CreateJoke from "./pages/create-joke";
import Login from "./pages/login/login";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/joke/:item_id" element={<EditJoke />} />
        <Route path="/joke/:new" element={<CreateJoke />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
