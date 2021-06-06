import './style.css'

export function WeatherDescription(props) {
    return(
        <p className="weather-description">{props.weatherDescription}</p>
    )
}