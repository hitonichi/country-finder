import Weather from './Weather';
const Country = ({country, weather}) => {
    return (
        <div>
            <div className='center'>
                <img className='flag' src={country.flags.png} alt='flag'></img>
            </div>
            <div className='center'>
                <h1>{country.name.official}</h1>
            </div>
            <div>Capital: {country.capital}</div>
            <div>Area: {country.area} m<sup>2</sup></div>
            <br></br>
            <h2>Languages:</h2>
            <ul>
                {Object.values(country.languages).map(lang => (<li key={lang}>{lang}</li>))}
            </ul>

            <br></br>
            <h2>Weather in {country.name.official}</h2>
            <Weather weather={weather}></Weather>
        </div>
    )
}

export default Country