import React from 'react'

const WeatherResult = ({weatherData}) => {
    return (
        <div>
          <h2>{weatherData.name}</h2>
          <p>{weatherData.temp}</p>
        </div>
    )
}

export default WeatherResult