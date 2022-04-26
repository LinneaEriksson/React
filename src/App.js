import "./App.css";
import React from "react";
import RandomDrinks from "./components/RandomDrinks";
const apikey = process.env.API_KEY;

function App() {
  return (
    <div>
      <RandomDrinks />
    </div>
  );
}

export default App;
