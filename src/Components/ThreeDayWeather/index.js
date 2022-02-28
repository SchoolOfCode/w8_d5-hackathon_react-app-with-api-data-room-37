import React from "react";
import CurrentDay from "../CurrentDay";
import TwoDay from "../TwoDay";
import ThreeDay from "../ThreeDay";

const ThreeDayWeather = ({ weatherdata }) => {
  return (
    <div>
      <h2 className="city">{weatherdata.name}</h2>
      <p className="temp">
        {weatherdata.temp1} <CurrentDay />
      </p>
      <p className="temp">
        {weatherdata.temp2} <TwoDay />
      </p>
      <p className="temp">
        {weatherdata.temp3} <ThreeDay />
      </p>
    </div>
  );
};

export default ThreeDayWeather;
