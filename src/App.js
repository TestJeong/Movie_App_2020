import React from "react";

function Food({ name }) {
  return <h1>I like {name}</h1>;
}

const FoodName = [{ name: "kimchi" }, { name: "samgyeopsal" }, { name: "bibimbap" }, { name: "doncasu" }];

function App() {
  return (
    <div>
      <h1>Hello</h1>
      {FoodName.map((foods) => (
        <Food name={foods.name + "🔥"} />
      ))}
    </div>
  );
}

export default App;
