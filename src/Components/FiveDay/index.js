const FiveDay = () => {
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
  tomorrow.setDate(tomorrow.getDate() + 4);
  let day = weekday[tomorrow.getDay()];
};

export default FiveDay;
