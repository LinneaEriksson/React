import "./App.css";
import React from "react";
import Aztro from "./components/Aztro";
import ZodiacArray from "./components/ZodiacArray";
import Zodiacs from "./components/Zodiacs";
// import SearchBar from "./components/Searchbar";

function App() {
  return (
    <div>
      <section className="startPageSection">
        {/* <SearchBar /> */}
        <Zodiacs />
        <Aztro />
      </section>
    </div>
  );
}

export default App;
