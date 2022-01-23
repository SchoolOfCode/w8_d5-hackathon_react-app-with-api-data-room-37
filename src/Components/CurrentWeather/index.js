import React from "react";
import CurrentDay from "../CurrentDay";

const CurrentWeather = ({ weatherdata }) => {
  return (
    <div>
      <h2 className="city">{weatherdata.name}</h2>
      <p className="temp">
        {weatherdata.temp1} <CurrentDay />
      </p>
    </div>
  );
};

export default CurrentWeather;
