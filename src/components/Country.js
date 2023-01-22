import Weather from './Weather';
const Country = ({country, weather}) => {
    return (
        <div>
            <h1>{country.name.official}</h1>
            <div>Capital: {country.capital}</div>
            <div>Area: {country.area}</div>
            <h2>Languages:</h2>
            <ul>
                {Object.values(country.languages).map(lang => (<li key={lang}>{lang}</li>))}
            </ul>
            <img src={country.flags.png} alt='flag'></img>

            <h2>Weather in {country.name.official}</h2>
            <Weather weather={weather}></Weather>
        </div>
    )
}

export default Country