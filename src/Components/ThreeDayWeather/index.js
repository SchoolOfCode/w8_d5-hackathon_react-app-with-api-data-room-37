import React from 'react'

const ThreeDayWeather = ({weatherdata}) => {
    return (
        <div>
          <h2 className='city'>{weatherdata.name}</h2>
          <p className='temp'>{weatherdata.temp1}</p>
          <p className='temp'>{weatherdata.temp2}</p>
          <p className='temp'>{weatherdata.temp3}</p>
        </div>
    )
}

export default ThreeDayWeather
