import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import './App.css';


const App = () => {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("");
  const [unit, setUnit] = useState("metric");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [cities, setCities] = useState([]);
  const [forecast, setForecast] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  const apiKey = "a38a124ed641c2f37d9d94b8bae47de7";  // Replace with your OpenWeatherMap API key

  const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${apiKey}`;
  const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${unit}&appid=${apiKey}`;

  // Memoize fetchWeatherData to avoid unnecessary re-renders
  const fetchWeatherData = useCallback(async () => {
    if (!city) return;
    setLoading(true);
    setError(null);  // Reset error before making the API call
    try {
      const weatherResponse = await axios.get(currentWeatherUrl);
      setWeather(weatherResponse.data);
  
      const forecastResponse = await axios.get(forecastUrl);
      setForecast(forecastResponse.data);
  
      setCities((prevCities) => [
        ...prevCities.filter((c) => c.name !== city),
        weatherResponse.data,
      ]);
    } catch (err) {
      if (err.response) {
        setError(`Error: ${err.response.data.message || "Something went wrong."}`);
      } else if (err.request) {
        setError("Network error: Please check your internet connection.");
      } else {
        setError("An unexpected error occurred.");
      }
    }
    setLoading(false);
  }, [city, currentWeatherUrl, forecastUrl]);

  // Handle city input change
  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  useEffect(() => {
    if (city) {
      fetchWeatherData();
    }
  }, [city, unit, fetchWeatherData]);

  // Handle other functionality like dark mode, adding cities, etc.
  const handleAddCity = () => {
    if (city && !cities.find((c) => c.name === city)) {
      setCities((prevCities) => [...prevCities, weather]);
      setCity(""); // Clear the input after adding
    }
  };

  return (
    <div className={darkMode ? "dark" : "light"}>
      <h1 className="title">Weather App</h1>
      <button onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>

      <div>
      <div className="button-container">
        <input
          type="text"
          value={city}
          onChange={handleCityChange}
          placeholder="Enter city name"
        />
        
        <button onClick={fetchWeatherData}>Get Weather</button>
        <button onClick={handleAddCity}>Add City</button>
        <button onClick={() => setUnit(unit === "metric" ? "imperial" : "metric")}>
          {unit === "metric" ? "Switch to Fahrenheit" : "Switch to Celsius"}
        </button>
        </div>
      </div>
      <div className="button-container">
      <div className="weather-info">
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {weather && (
          <div>
            <h2>{weather.name}</h2>
            <p>{weather.weather[0].description}</p>
            <p>
              Temperature: {weather.main.temp}° {unit === "metric" ? "C" : "F"}
            </p>
          </div>
        )}
      </div>
      </div>
      <div className="button-container">
      <div className="forecast">
        {forecast && (
          <div>
            <h3>5-Day Forecast</h3>
            {forecast.list.slice(0, 5).map((day, index) => (
              <div key={index}>
                <p className="ForecastDetails">
                  {new Date(day.dt_txt).toLocaleDateString()} - {day.main.temp}°{" "}
                  {unit === "metric" ? "C" : "F"} - {day.weather[0].description}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
      </div>
      <div className="button-container">
      <div className="saved-cities">
        <h3>Saved Cities</h3>
        <ul className="ForecastDetails">
          {cities.map((cityData, index) => (
            <li key={index}>{cityData.name}</li>
          ))}
        </ul>
      </div>
    </div>
    </div>
   
  );
};

export default App;
