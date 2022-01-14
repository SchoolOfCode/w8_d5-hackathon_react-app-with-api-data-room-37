import React from 'react'

const CurrentWeather = ({weatherData, day}) => {
    return (
        <div>
          <h2>{weatherData.name}</h2>
          <p>{day} {weatherData.temp1}</p>
        </div>
    )
}

export default CurrentWeather
