const Weather = ({weather}) => {
    console.log('From Weather:', weather);
    if (weather) {
        return (
            <div>
                <div>Temp: ${(weather.main.temp - 32) * 5 / 9}</div>
                <div>Wind: ${weather.wind.speed} m/s</div>
            </div>
        )
    }
    else return (
        <div>Loading...</div>
    )
}

export default Weather