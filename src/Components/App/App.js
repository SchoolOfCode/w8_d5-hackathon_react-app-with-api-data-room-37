import "./App.css";
import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Input from "../Input";
import CurrentWeather from "../CurrentWeather";
import ThreeDayWeather from "../ThreeDayWeather";
import FiveDayWeather from "../FiveDayWeather";

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
        temp4: `${Math.round(Number(data.list[3].main.temp))}°C`,
        temp5: `${Math.round(Number(data.list[4].main.temp))}°C`,
      });
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
      <nav>
        <button>
          {" "}
          <Link to="/">Today</Link>
        </button>
        <button>
          {" "}
          <Link to="/3day">3 Day Weather</Link>
        </button>
        <button>
          {" "}
          <Link to="/5day">5 Day Weather</Link>
        </button>
      </nav>
      <Routes>
        <Route
          path="/"
          element={<CurrentWeather weatherdata={weatherData} />}
        />
        <Route
          path="/3day"
          element={<ThreeDayWeather weatherdata={weatherData} />}
        />
        <Route
          path="/5day"
          element={<FiveDayWeather weatherdata={weatherData} />}
        />
      </Routes>
    </div>
  );
}

export default App;
