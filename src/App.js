import { FaBeer } from 'react-icons/fa';
import axios from 'axios';
import Breweries from './Breweries.js';
import './App.css';
import { useState } from 'react';

function App() {

  const [brewery, setBrewery] = useState([]);

  function getBreweries(userInput) {
    axios({
      method: 'GET',
      url: 'https://api.openbrewerydb.org/breweries',
      dataResponse: 'JSON',
      params: {
        by_city: userInput,
        format: 'json',
        // by_name: userInput
      }
    }).then(response => {
      const breweryData = response.data;
      console.log(breweryData);

    
      setBrewery(breweryData);
    })
  }

  
  const handleSubmit = (event) => {
    event.preventDefault();
    const userInput = event.target[0].value;
    getBreweries(userInput);
    document.getElementById("brewery-search").value = "";
  }

  return (
    <div className="App">
      <header>
        <div className="heading-container">
          <div className="beer-logo">
            <FaBeer className="logo"/>
          </div>
          <h1>Déjà Brew</h1>
        </div>
        <nav className="juno">
          <p>Created at<a href="https://junocollege.com/" target="_blank" rel="noreferrer noopener" className="juno-link">Juno College</a><span>by Cam Duffin</span></p>
        </nav>
      </header>

      <form action="" onSubmit={handleSubmit}>
        <input type="text" id="brewery-search" placeholder="Search for breweries by city..." required/>

        <label htmlFor="brewery-search"></label>
        <button>Search</button>
      </form> 

      <ul className='results-wrapper'>
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
              />
            )
          })
        }
      </ul>
    </div>
  );
}

export default App;
