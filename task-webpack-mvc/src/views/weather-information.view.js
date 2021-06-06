import './style.css'

export function WeatherInformation(props) {
    console.log(props);
    return(
        <table>
            <thead>
                <tr>
                    <th>Time</th>
                    <th>Wind</th>
                    <th>Feels Like</th>
                    <th>Speed</th>
                    <th>Pressure</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{props.data.time}</td>
                    <td>{props.data.wind_dir}</td>
                    <td>{props.data.feelslike}</td>
                    <td>{props.data.wind_speed}</td>
                    <td>{props.data.pressure}</td>
                    </tr>
                </tbody>
        </table>
    )
}