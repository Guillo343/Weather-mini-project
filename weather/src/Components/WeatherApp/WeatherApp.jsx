import React, { useState } from 'react';
import './Weather.css';
import cloudy from '../../assets/cloudy-day.png';
import wind from '../../assets/wind.png';
import drizzle from '../../assets/drizzle.png';
import humidityIcon from '../../assets/humidity.png';
import rain from '../../assets/rainy.png';
import snow from '../../assets/snowflake.png';
import sun from '../../assets/sun.png';

export const WeatherApp = () => {
  const [weatherIcon, setWeatherIcon] = useState(cloudy);
  const [weatherData, setWeatherData] = useState({
    humidity: '',
    windSpeed: '',
    temperature: '',
    location: ''
  });

  const apiKey = "a4b29e58064116cdb7e7d6c588023a47";

  const searchWeather = async () => {
    try {
      const cityInput = document.querySelector('.cityInp').value;
      if (!cityInput) return;

      const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&units=metric&appid=${apiKey}`;
      const response = await fetch(url);
      const data = await response.json();

      setWeatherData({
        humidity: data.main.humidity + "%",
        windSpeed: Math.floor(data.wind.speed) + " km/h",
        temperature: Math.floor(data.main.temp) + "°C",
        location: data.name
      });

      setWeatherIcon(getWeatherIcon(data.weather[0].icon));
    } catch (error) {
      console.error("Error fetching weather data:", error);
      // Handle error here, e.g., show a message to the user
    }
  };

  const getWeatherIcon = (iconCode) => {
    switch (iconCode) {
      case "01d":
      case "01n":
        return sun;
      case "02d":
      case "02n":
        return cloudy;
      case "03d":
      case "03n":
        return drizzle;
      case "04d":
      case "04n":
        return drizzle;
      case "09d":
      case "09n":
      case "010d":
      case "010n":
        return rain;
      case "013d":
      case "013n":
        return snow;
      default:
        return sun;
    }
  };

  return (
    <div className='container-weather'>
      <div className="top-bar">
        <input type='text' className='cityInp' placeholder='Write a City'/>
        <div className="search-icon" onClick={searchWeather}>
          <img src={weatherIcon} alt="search-logo" />
        </div>
      </div>
      <div className="weather-img">
        <img src={weatherIcon} alt="weather-icon" />
      </div>
      <div className="weather-temp">{weatherData.temperature}</div>
      <div className="weather-location">{weatherData.location}</div>
      <div className="data-container">
        <div className="element">
          <img src={humidityIcon} alt="" className="icon" />
          <div className="data">
            <div className="humidity">{weatherData.humidity}</div>
            <div className="text">Humidity</div>
          </div>
        </div>
        <div className="element">
          <img src={wind} alt="wind-icon" className="icon" />
          <div className="data">
            <div className="winds-inf">{weatherData.windSpeed}</div>
            <div className="text">Wind Speed</div>
          </div>
        </div>
      </div>
    </div>
  );
};
