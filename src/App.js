import "./App.css";
import React from "react";
import RandomDrinks from "./components/RandomDrinks";
const apikey = process.env.API_KEY;

function App() {
  return (
    <div>
      <RandomDrinks />
      <p test></p>
    </div>
  );
}

export default App;
