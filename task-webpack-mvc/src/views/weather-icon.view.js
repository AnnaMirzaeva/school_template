import './style.css'

export function WeatherIcon(props) {
    return(
        <img src={props.weather_icon} className="weather-icon" alt='' />
    )
}