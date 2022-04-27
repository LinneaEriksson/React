import "./App.css";
import React from "react";

import Aztro from "./components/Aztro";
import SearchBar from "./components/Searchbar";
const apikey = process.env.API_KEY;

function App() {
  return (
    <div>
      <section className="startPageSection">
        <SearchBar />
        <Aztro />
        <div className="test">test</div>
      </section>
    </div>
  );
}

export default App;
