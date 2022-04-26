import React, { useState, useEffect } from "react";

const RandomDrinks = () => {
  const [drink, setRandomDrinks] = useState();

  const getRandomDrinks = async () => {
    const response = await fetch(
      "www.thecocktaildb.com/api/json/v1/1/random.php"
    );
    const data = await response.json();
    setRandomDrinks(data.drinks.strDrink);
    console.log(data);
  };

  useEffect(() => {
    getRandomDrinks();
  }, []);

  return (
    <div>
      <h1>{drink} TEST!!!!</h1>
      <button onClick={getRandomDrinks}>TEST</button>
    </div>
  );
};

export default RandomDrinks;

// const response = fetch(`www.thecocktaildb.com/api/json/v1/1/random.php`, {
//   method: "GET",
// });

// TEST 1

// React.useEffect(() => {
//   fetch("www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
//     .then((response) => response.json())
//     .then((data) => console.log(data));
// }, []);
// console.log(process.env.API_KEY);

//  TEST 2
// const getDrinks = async () => {
//   const result = await (
//     await fetch(`www.thecocktaildb.com/api/json/v1/1/random.php`)
//   ).json();
//   const { drinks } = result;
// };
