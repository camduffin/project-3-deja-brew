import { FaBeer } from 'react-icons/fa';
import axios from 'axios';
import Breweries from './Breweries.js';
import './App.css';
import { useState } from 'react';

// your app wants user interaction and so you will 

// have a submit event 
// Your API call can live in a function and that function is called when the user clicks search button 

function App() {
// initialize a state for the 
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

      // infinite loop on page load
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
            <FaBeer />
          </div>
          <h1>Déjà Brew</h1>
        </div>
        <nav className="juno">
          <p>Created at<a href="https://junocollege.com/" target="_blank" rel="noreferrer noopener" className="juno-link">Juno College</a><span>by Cam Duffin</span></p>
        </nav>
      </header>

      <form action="" onSubmit={handleSubmit}>
        <input type="text" id="brewery-search" placeholder="Search for breweries by city..."/>

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
              />
            )
          })
        }
      </ul>
    </div>
  );
}

export default App;
