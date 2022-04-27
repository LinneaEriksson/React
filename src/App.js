import "./App.css";
import React from "react";

import Aztro from "./components/Aztro";
const apikey = process.env.API_KEY;

function App() {
  return (
    <div>
      <Aztro />
    </div>
  );
}

export default App;
