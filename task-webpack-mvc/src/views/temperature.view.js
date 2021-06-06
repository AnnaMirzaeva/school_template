import './style.css'

export function Temperature(props) {
    return(
        <div className="temperature">{props.temperature}</div>
    )
}