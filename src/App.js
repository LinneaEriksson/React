import "./App.css";
import React from "react";

import Aztro from "./components/Aztro";
const apikey = process.env.API_KEY;

function App() {
  return (
    <div>
      <section className="startPageSection">
        <Aztro />
        <div className="test">test</div>
      </section>
    </div>
  );
}

export default App;
