import axios from 'axios';
import './App.css';
import { useEffect, useState } from 'react'
import Country from './components/Country';
import Filter from './components/Filter';

// api key: faf096caee58ecc3dfed3a0669b38da4
// ($env:REACT_APP_API_KEY="faf096caee58ecc3dfed3a0669b38da4") -and (npm start)

function App() {
  const [countries, setCountries] = useState([])
  const [newFilter, setNewFilter] = useState('')
  const [weatherInfo, setWeather] = useState(null)
  
  useEffect(() => {
    axios
    .get('https://restcountries.com/v3.1/all')
    .then(response => {
      setCountries(response.data);
    })
  }, [])
  
  const countriesToShow = newFilter === ''
  ? countries
  : countries.filter(country => country.name.official.toLowerCase().includes(newFilter.toLowerCase()))
  

  // console.log(process.env.REACT_APP_API_KEY);
  const weatherApiKey = process.env.REACT_APP_API_KEY

  useEffect(() => {
    // console.log(countriesToShow);
    const url = countriesToShow.length >= 1
    ? `https://api.openweathermap.org/data/2.5/weather?q=${countriesToShow[0].name.official}&appid=${weatherApiKey}`
    : 'https://api.openweathermap.org/data/2.5/weather?q=vietnam&appid=faf096caee58ecc3dfed3a0669b38da4'
    // const url = 'https://api.openweathermap.org/data/2.5/weather?q=vietnam&appid=faf096caee58ecc3dfed3a0669b38da4'
    axios
      .get(url)
      .then(response => {
        console.log(response.data);
        setWeather(response.data)
      })
      .catch(e => {
        console.log('Fail:', e);
      })
    // if (countriesToShow.length === 1) {
    // }
  })

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
  }

  const handleBtnClick = (event) => {
    console.log(event.target);
    setNewFilter(event.target.id)
  }


  if (countriesToShow.length > 10) {
    return (
      <div className='wrapper'>
        <div className='container'>
          <Filter newFilter={newFilter} handleFilterChange={handleFilterChange}></Filter>
          <div className='res-container'>
            <div>Too many matches, specify another filter.</div> 
          </div>
        </div>
      </div>
    );
  }
  else if (countriesToShow.length === 1) {
    return (
      <div className='wrapper'>
        <div className='container'>
          <Filter newFilter={newFilter} handleFilterChange={handleFilterChange}></Filter>
          <div className='res-container'>
            <Country country={countriesToShow[0]} weather={weatherInfo}></Country>
          </div>
        </div>
      </div>
      );
    }
    else {
      return (
        <div className='wrapper'>
          <div className='container'>
            <Filter newFilter={newFilter} handleFilterChange={handleFilterChange}></Filter>
          <div className='res-container'>
            {countriesToShow.map(country => (
              <div key={country.name.official} className='res-list-item'>
                <div>> {country.name.official}</div>
                <button id={country.name.official} onClick={(event) => handleBtnClick(event)}>Show</button>
              </div>
              ))}
          </div>
          </div>
      </div>
      );
  }  
}

export default App;
