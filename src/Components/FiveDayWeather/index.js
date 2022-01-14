import React from 'react'

const FiveDayWeather = ({weatherdata}) => {
    return (
        <div>
          <h2>{weatherdata.name}</h2>
          <p>{weatherdata.temp1}</p>
          <p>{weatherdata.temp2}</p>
          <p>{weatherdata.temp3}</p>
          <p>{weatherdata.temp4}</p>
          <p>{weatherdata.temp5}</p>
        </div>
    )
}

export default FiveDayWeather
