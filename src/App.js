import "./App.css";
import React from "react";
import Aztro from "./components/Aztro";
import ZodiacArray from "./components/ZodiacArray";
// import SearchBar from "./components/Searchbar";

function App() {
  return (
    <div>
      <section className="startPageSection">
        {/* <SearchBar /> */}
        <Aztro />
        <ZodiacArray />
        <div className="test">test</div>
      </section>
    </div>
  );
}

export default App;
