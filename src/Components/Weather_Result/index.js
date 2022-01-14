import React from 'react'

const WeatherResult = ({weatherData}) => {
    return (
        <div>
          <h2>{weatherData.name}</h2>
          <p>Todays Weather: {weatherData.temp1}</p>
          <p>Tomorrow's Weather: {weatherData.temp2}</p>
          <p>Two days time: {weatherData.temp3}</p>
        </div>
    )
}

export default WeatherResult