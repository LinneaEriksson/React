import "./App.css";
import React from "react";
import ZodiacInfo from "./pages/ZodiacInfo";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

// import SearchBar from "./components/Searchbar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="zodiac" element={<ZodiacInfo />} exact />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
