import './App.css';

import React, {useState, useEffect} from 'react';

import Input from '../Input'
import WeatherResult from '../Weather_Result';


function App() {

const [userInput, setuserInput] = useState('')
const [weatherData, setweatherData] = useState([])

useEffect(() => {
  async function getWeather() {
    // check that user entered input
    if (userInput === "") {
      return
    }

    const res = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${userInput}&units=metric&cnt=1&appid=160cec49564aa8277fc523ac242c7bb0`
    );


    const data = await res.json();
    console.log(data)
    
    setweatherData({
      name: data.city.name,
      temp: `${Math.round(Number(data.list[0].main.temp))}°C`,
    })
  }
  getWeather()
}, [userInput])

function handleSubmit(text) {
  setuserInput(text)
}

  return (
    <div className="App">
      <h1>Weather Finder</h1>
      <Input handleSubmit={handleSubmit} />
      <WeatherResult weatherData={weatherData} />
    </div>
  );
}

export default App;