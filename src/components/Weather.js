const Weather = ({weather}) => {
    console.log('From Weather:', weather);
    if (weather !== null) {
        return (
            <div>
                <div>Temp: {Math.round(weather.main.temp - 273)}<sup>o</sup>C</div>
                <div>Wind: {weather.wind.speed} m/s</div>
            </div>
        )
    }
    else return (
        <div>Loading...</div>
    )
}

export default Weather