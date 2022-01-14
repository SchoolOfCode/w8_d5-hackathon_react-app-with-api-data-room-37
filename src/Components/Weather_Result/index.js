import React from 'react'

const WeatherResult = ({weatherData, day}) => {
    return (
        <div>
          <h2>{weatherData.name}</h2>
          {/* <p>{day} {weatherData.temp1}</p>
          <p>Tomorrow's Weather: {weatherData.temp2}</p>
          <p>Two days time: {weatherData.temp3}</p> */}
          {/* <ol>
            {
              weatherData.tempArray.map(function(eachTemp)
              {
                return <p>
                  {(eachTemp.main.temp)}
                </p>
              })
            }
          </ol> */}
        </div>
    )
}

export default WeatherResult

{/* <ul>{highlights.map(function (item){
      return <li>{item}</li>
    })}</ul> */}

    // `${Math.round(Number(data.list[0].main.temp))}°C`