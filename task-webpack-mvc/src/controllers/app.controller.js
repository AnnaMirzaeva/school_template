import { accessKey } from '../constants.js'
import { weatherData } from '../models/index.module.js'


export function searchWeatherData(place) {
  if (place.city === '') {
    return
}
  
return  fetch(`http://api.weatherstack.com/current?access_key=${accessKey}&query=${place.city}, ${place.country}`)
  .then((data) => data.json())
  .then((p) => {
    return new weatherData(p)
  })
}