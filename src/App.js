import { FaBeer } from 'react-icons/fa';
import axios from 'axios';
import Breweries from './Breweries.js';
import './App.css';
import { useState } from 'react';
import Video from './video/video.mp4';
import { BsChevronDoubleDown } from 'react-icons/bs';

function App() {

  const [brewery, setBrewery] = useState([]);

  function getBreweries(userInput) {
    axios({
      method: 'GET',
      url: `https://api.openbrewerydb.org/breweries/search`,
      dataResponse: 'JSON',
      params: {
        query: userInput,
        format: 'json',
      }
    }).then(response => {
      const breweryData = response.data;
      console.log(breweryData);

      breweryData.length === 0 ?
      alert('Sorry! No breweries found.') : setBrewery(breweryData);
    }).catch((err) => {
      alert('Sorry! No breweries found.')
    })
  }

  // event handler functions

  const handleSubmit = (event) => {
    event.preventDefault();

    const userInput = event.target[0].value;
    getBreweries(userInput);

    document.getElementById("brewery-search").value = "";

    const resultView = document.getElementById('results');
    resultView.scrollIntoView({behavior: 'smooth'});

    const arrow = document.getElementById('arrow');
    arrow.classList.add('arrow');
  
  }

  const handleButton = () => {
    const resultView = document.getElementById('results');
    resultView.scrollIntoView({behavior: 'smooth'});
  }

  // JSX return

  return (

    <div className="App">
        <video autoPlay loop muted>
          <source src={Video} type="video/mp4"/>
        </video>
      <header>
        <div className="heading-container">
          <div className="beer-logo">
            <FaBeer className="logo"/>
          </div>
          <h1>Déjà Brew</h1>
        </div>
        <nav className="juno">
          <p>Created at<a href="https://junocollege.com/" target="_blank" rel="noreferrer noopener" className="juno-link">Juno College</a></p>
        </nav>
      </header>

      <div className="form-container">
        <form action="" onSubmit={handleSubmit}>
          <input type="text" id="brewery-search" placeholder="Search for breweries by keyword or city..." required />
          <label htmlFor="brewery-search" className="sr-only"></label>
          <button className="search-button">Search</button>
        </form> 
      </div>

      <div className="arrow-container">
        <BsChevronDoubleDown id="arrow" onClick={handleButton}/>
      </div>

      <ul className='results-wrapper' id="results">

        { 
        brewery.map((location) => {
              return( <Breweries 
                key={location.id}
                name={location.name}
                address={location.street}
                website={location.website_url}
                phone={location.phone}
                latitude={location.latitude}
                longitude={location.longitude}
                city={location.city}
                state={location.state}
                type={location.brewery_type}
                />
              )
            })
          }

      </ul>
          {/* App div ends here */}
    </div> 
  );
}
  
export default App;

