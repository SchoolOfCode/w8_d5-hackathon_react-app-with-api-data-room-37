import React from 'react'

const CurrentWeather = ({weatherdata}) => {
    return (
        <div>
          <h2>{weatherdata.name}</h2>
          <p>{weatherdata.temp1}</p>
        </div>
    )
}

export default CurrentWeather
