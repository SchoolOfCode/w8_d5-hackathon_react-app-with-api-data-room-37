API CALL METRIC CELCIUS -[api.openweathermap.org/data/2.5/find?q=London&amp;units=metric](http://api.openweathermap.org/data/2.5/find?q=London&units=metric) -JSON INFOlist.main.temp for celcisu temprature
List.name for the name
weather.icon for the icon of the weather condition

POSSIBLE FUTURE FEATURES

may have to loop through weather to get the below.- list.weather.description expected outcome to be ""light intensity drizzle"
main.temp_min and main.temp_max expected to give minumum and maximum temp for the city on that day

PLAN
We will look at building a react app that will be calling an api data for one city.
The app will be an MVP
Our basic app should have a search bar that allows user to state a city and click submit which will give back city name and the temp.
We will be using React hooks such as {useState, useEffect}
useEffect will be used to call a fetch api and await the response.
We will need to develop multiple components.
We need to create individual components folders for each index.
one for the input search bar and the button
We also need a component that provides the data that we fetch from the API.
This could be a mixture of `<h2>` for the city name being printed.
And a possible `<p>` for the weather.

ONCE THE ABOVE HAS BEEN COMPLETED WE WILL THAN MAKE A NEW PLAN TO PROCESS FUTURE FEATURES.


Component Tree
APP
-Input --Search input --add to list button Weather data --List Item ---`<h2>`{name}`</h2>` ---`<img>`{icon} ---`<p>`{temp `</p>`
