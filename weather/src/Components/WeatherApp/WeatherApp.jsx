import React from 'react'
import './Weather.css'
 import cloudy from '../../assets/cloudy-day.png'
  import wind from '../../assets/wind.png'
 import drizzle from '../../assets/drizzle.png'
  import humidity from '../../assets/humidity.png'
  import rain from '../../assets/rainy.png'
 import search from '../../assets/search.png'
 import snow from '../../assets/snowflake.png'
 import sun from '../../assets/sun.png'


export const WeatherApp = () => {
  return (
    <div className='container-weather'>
      <div className="top-bar">
        <input type='text' className='cityInp' placeholder='Write a City'/>
        <div className="search-icon">
          <img src={search} alt="search-logo" />
        </div>
      </div>
      <div className="weather-img">
        <img src={cloudy} alt="cloud-icon" />
      </div>
      <div className="weather-temp">13°</div>
      <div className="weather-location">Milan</div>
      <div className="data-container">
        <div className="element">
          <img src={humidity} alt="" className="icon" />
          <div className="data">
            <div className="humidity">64%</div>
            <div className="text">Humidity</div>
          </div>
        </div>
        <div className="element">
          <img src={wind} alt="wind-icon" className="icon" />
          <div className="data">
            <div className="humidity">18 km/h</div>
            <div className="text">Wind Speed</div>
          </div>
        </div>
      </div>
    </div>
  )
}
