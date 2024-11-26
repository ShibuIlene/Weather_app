import React, { useState } from 'react'
import axios from 'axios'

export default function Input() {
    const API_KEY="846f240fcbd3afe1b6c52c83e932dea6"
    let [city,setCity]=useState()
    let [weather,setWeather]=useState(null)
    const get=async ()=>{
        if (!city) return;
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
      );
      setWeather(response.data);
    } catch (error) {
      alert('City not found');
    }
}
  return (
    <div class="app">
        <h1>WEATHER FORECAST</h1>
        <div class="search">
        <input type="text" placeholder='Enter your place' value={city} onChange={(e)=>setCity(e.target.value)} />
        <button onClick={get}>
            Get weather
        </button>
        </div>
        {weather && (
        <div class="weather">
          <h2>{weather.name}</h2>
          <div>
          <h3>{weather.main.temp}°C</h3>
          </div>
          <div>
          <p>{weather.weather[0].description}</p>
          </div>
          <img src="https://images.all-free-download.com/images/graphiclarge/cloud_sun_rain_weather_forecast_sign_icon_flat_black_white_outline_6923335.jpg" alt="" />
          </div>
        )}
    </div> 
  )
}