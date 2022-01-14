import React from 'react'

const FiveDayWeather = ({weatherdata}) => {
    return (
        <div>
          <h2 className='city'>{weatherdata.name}</h2>
          <p className='temp'>{weatherdata.temp1}</p>
          <p className='temp'>{weatherdata.temp2}</p>
          <p className='temp'>{weatherdata.temp3}</p>
          <p className='temp'>{weatherdata.temp4}</p>
          <p className='temp'>{weatherdata.temp5}</p>
        </div>
    )
}

export default FiveDayWeather
