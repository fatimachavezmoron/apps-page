import './WeatherApp.css'
import { useState } from 'react'

export const WeatherApp = () => {

  const urlBase = 'https://api.openweathermap.org/data/2.5/weather'
  const API_KEY = '96461729f8a04ecaeebc110a37df96a1'
  const difKelvin = 273.15
  
const [city, setCity] = useState('')
const [dataClima, setDataClima] = useState(null)

const handleCity = (e) => {
  setCity(e.target.value)
}

const handleSubmit = (e) => {
  e.preventDefault()
  if(city.length > 0) fetchClima()
}

const fetchClima = async () => {
  try {
    const response = await fetch(`${urlBase}?q=${city}&appid=${API_KEY}`)
    const data = await response.json()
    setDataClima(data)
  } catch(error){
    console.error('An error has occurred', error)
  }
}

  return (
    <div className='weatherCont'>
    <div className='Wcontainer'>
      <h1>Weather App</h1>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={city}
          onChange={handleCity}
          placeholder='Name of city'
        />
        <button type='submit'>Search</button>
      </form>
      {dataClima && (
        <div>
          <h2>{dataClima.name}</h2>
          <p>Temperature: {parseInt(dataClima?.main?.temp - difKelvin)}ºC</p>
          <p>Weather conditions: {dataClima.weather[0].description}</p>
          <img src={`https://openweathermap.org/img/wn/${dataClima.weather[0].icon}@2x.png`}/>
        </div>
      )}
    </div>
    </div>
  )
}
