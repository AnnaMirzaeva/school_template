import { React, Component } from 'react'
import { Location } from './location.view'
import { Temperature } from './temperature.view'
import { WeatherDescription } from './weather-description.view'
import { WeatherIcon } from './weather-icon.view'
import { WeatherInformation } from './weather-information.view'

export class TableView extends Component {
    render() {
        return (
            <div className='data-to-show'>
                <WeatherIcon weather_icon={this.props.weatherData.weather_icons[0]}/>
                <Temperature temperature={`${this.props.weatherData.temperature}°C`}/>
                <Location location={`${this.props.weatherData.name}, ${this.props.weatherData.country}`} />
                <WeatherDescription weatherDescription={`Today is ${this.props.weatherData.weather_descriptions[0]}`} />
                <WeatherInformation data={this.props.weatherData}/>
            </div>
        )
    }

}