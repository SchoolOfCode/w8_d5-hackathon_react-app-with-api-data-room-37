const ThreeDay = () => {
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  var tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 2);
  let day = weekday[tomorrow.getDay()];
};

export default ThreeDay;
