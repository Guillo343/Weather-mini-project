import React from 'react'
import './Weather.css'
 import cloudy from '../../assets/cloudy-day.png'
 import wind from '../../assets/wind.png'
 import drizzle from '../../assets/drizzle.png'
 import humidity from '../../assets/humidity-logo.png'
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
    </div>
  )
}
