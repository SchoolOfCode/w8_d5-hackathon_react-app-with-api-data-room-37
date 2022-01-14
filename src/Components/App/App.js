import "./App.css";

import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Input from "../Input";
import CurrentWeather from "../Weather_Result";


function App() {
  const [userInput, setuserInput] = useState("");
  const [weatherData, setweatherData] = useState([]);
 
  useEffect(() => {
    async function getWeather() {
      // check that user entered input
      if (userInput === "") {
        return;
      }

      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${userInput}&units=metric&cnt=7&appid=160cec49564aa8277fc523ac242c7bb0`
      );

      const data = await res.json();
      console.log(data);

      setweatherData({
        name: data.city.name,
        temp1: `${Math.round(Number(data.list[0].main.temp))}°C`,
        temp2: `${Math.round(Number(data.list[1].main.temp))}°C`,
        temp3: `${Math.round(Number(data.list[2].main.temp))}°C`,
      });
      console.log(weatherData)
    }
    getWeather();
  }, [userInput]);

  function handleSubmit(text) {
    setuserInput(text);
  }

  return (
    <div className="App">
      <h1>Weather Finder</h1>
      <Input handleSubmit={handleSubmit} />
      <button> <Link to="/"></Link> </button>
      <button> <Link to="/3day"></Link> </button>
      <button> <Link to="/7day"></Link> </button>
      <Routes>
        <Route path="/" element={<CurrentWeather weatherdata={weatherData}/>} />
      </Routes>
    </div>
  );
}

export default App;

