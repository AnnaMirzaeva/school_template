import { React, Component } from 'react'
import { searchWeatherData } from '../controllers/app.controller.js'
import { Place } from '../models/place.model.js'
import { TableView } from './table.view'
import './style.css'

export class AppView extends Component {
    constructor() {
        super()

        this.state = {
            place: new Place(),
            weatherData: null
        }

        // document.addEventListener('keydown', (e) => {
        //     if (e.key === '13') {
        //       this.searchAndSetWeatherData()
        //     }
        // })
    }

    cityChangedHandler(e) {
        this.setState((previousState) => ({
            place: {
                ...previousState.place,
                city: e.target.value
            }
        }))
    }

    countryChangedHandler(e) {
        this.setState((previousState) => ({
            place: {
                ...previousState.place,
                country: e.target.value
            }
        }))
    }
      
    searchButtonClickHandler() {
        this.searchAndSetWeatherData()
    }

    searchAndSetWeatherData() {
        searchWeatherData(this.state.place).then((data) => this.setState(() => ({
            weatherData: data
        })))
    }

    render() {
        return (
            <div className="wrapper">
                <section className="fullscreen">
                <div className="container">
                <div className="fullscreen-form">
                <input className="fullscreen-input" type="text" id="city" name='user_city' placeholder="Enter your city here..." onChange={(e) => this.cityChangedHandler(e)} />
                <input className="fullscreen-input" type="text" id="country" name='user_country' placeholder="Enter your country here..." onChange={(e) => this.countryChangedHandler(e)} />
                <button className="fullscreen-button" type="button" onClick={() => this.searchButtonClickHandler()}>Submit</button>
                </div>
                {this.state.weatherData && <TableView weatherData={this.state.weatherData} />}
                </div>
                </section>
            </div>
        )
    }
}