import "./App.css";

import React, { useState, useEffect } from "react";

import Input from "../Input";
import WeatherResult from "../Weather_Result";

function App() {
  const [userInput, setuserInput] = useState("");
  const [weatherData, setweatherData] = useState([]);
  const [daysRequested, setDaysRequested] = useState(3)

  function day() { 
    const day = new Date();
    const week = new Array(
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday")
    ;
    for ( let i = 0; i < daysRequested; i++) {
   return week[(day.getDay() + i) % 7];
    }
  }
 

  useEffect(() => {
    async function getWeather() {
      // check that user entered input
      if (userInput === "") {
        return;
      }

      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${userInput}&units=metric&cnt=${daysRequested}&appid=160cec49564aa8277fc523ac242c7bb0`
      );

      const data = await res.json();
      console.log(data);

      setweatherData({
        //name: data.city.name,
        // temp1: `${Math.round(Number(data.list[0].main.temp))}°C`,
        tempArray: data.list.map(function(eachTemp){
          return eachTemp.main.temp
        })
        // temp2: `${Math.round(Number(data.list[1].main.temp))}°C`,
        // temp3: `${Math.round(Number(data.list[2].main.temp))}°C`,
      });
      console.log(weatherData)
    }
    getWeather();
  }, [userInput]);

  function handleSubmit(text) {
    setuserInput(text);
  }

{/* <ul>{highlights.map(function (item){
      return <li>{item}</li>
    })}</ul> */}

  return (
    <div className="App">
      <h1>Weather Finder</h1>
      <Input handleSubmit={handleSubmit} />
      <WeatherResult weatherData={weatherData} day={day}/>
    </div>
  );
}

export default App;
