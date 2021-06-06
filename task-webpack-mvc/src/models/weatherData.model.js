export class weatherData {
    constructor(data) {
        this.localtime = data.location.localtime
        this.wind_dir = data.current.wind_dir
        this.feelslike = data.current.feelslike
        this.wind_speed = data.current.wind_speed
        this.pressure = data.current.pressure
        this.weather_icons = data.current.weather_icons
        this.temperature = data.current.temperature
        this.name = data.location.name
        this.country = data.location.country
        this.weather_descriptions = data.current.weather_descriptions
        this.time = new Date(data.location.localtime).toLocaleTimeString()
    }
}