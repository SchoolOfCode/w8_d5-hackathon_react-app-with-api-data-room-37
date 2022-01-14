API CALL METRIC CELCIUS 
1 DAY CALL- api.openweathermap.org/data/2.5/find?q=London&units=metric -JSON INFO
7 DAY CALL- api.openweathermap.org/data/2.5/forecast/daily?q=London&units=metric&cnt=7&appid={API key}

Ux/Ui design concept
https://uxplanet.org/sky-inspired-weather-app-concept-4f1775ce4571

API DATA PLAN -
--list.main.temp for celcisu temprature
--List.name for the name
--weather.icon for the icon of the weather condition
- may have to loop through weather to get the below.
-- list.weather.description expected outcome to be "light intensity drizzle"
-- main.temp_min and main.temp_max expected to give minumum and maximum temp for the city on that day 

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
This could be a mixture of <h2> for the city name being printed.
And a possible <p> for the weather.ONCE THE ABOVE HAS BEEN COMPLETED WE WILL THAN MAKE A NEW PLAN TO PROCESS FUTURE FEATURES.

COMPONENT TREE
APP
-Input 
--Search 

input 
--Search button 

Weather data
--List Item 
---<h2>{name}</h2> 
---<img>{icon} 
---<p>{temp</p>

TECH WE WILL USE.
-- React
-- Api call 
-- HOOKS (useState, useEffect, useReducer)
-- .map()
-- CSS TO DESIGN THE WEBSITE TO LOOKE MORE MODERN. 


FUTURE FEATURES.
-- 3 DAY WEATHER
-- 5 DAY WEATHER
-- APPLYING OUR COLOUR PALATE 
-- ADDING REACT ROUTER TO ALLOW PEOPLE TO PICK HOW MANY DAYS THEY WENT.
