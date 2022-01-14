import React from 'react'

const CurrentWeather = ({weatherdata}) => {
    return (
        <div>
          <h2 className='city'>{weatherdata.name}</h2>
          <p className='temp'>{weatherdata.temp1}</p>
        </div>
    )
}

export default CurrentWeather
