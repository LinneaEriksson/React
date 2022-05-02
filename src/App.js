import "./App.css";
import React from "react";
import Aztro from "./components/Aztro";
import Zodiacs from "./components/Zodiacs";
import { Routes, Route } from "react-router-dom";
import ZodiacInfo from "./pages/ZodiacInfo";

// import SearchBar from "./components/Searchbar";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/zodiac" element={<ZodiacInfo />} />
        <Route path="/" element={<App />} />
      </Routes>
      <section className="startPageSection">
        {/* <SearchBar /> */}
        <Zodiacs />
        <Aztro />
      </section>
    </div>
  );
}

export default App;
