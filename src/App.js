import { FaBeer } from 'react-icons/fa';
import axios from 'axios';
import Breweries from './Breweries.js';
import './App.css';
import { useState } from 'react';

function App() {

  // const [brewery, setBrewery] = useState([]);

  function getBreweries() {
    axios({
      method: 'GET',
      url: 'https://api.openbrewerydb.org/breweries',
      dataResponse: 'JSON',
      params: {
        by_city: 'New York',
        format: 'json',
      }
    }).then(response => {
      const breweryData = response.data;
      console.log(breweryData);

      // infinite loop on page load
      // setBrewery(breweryData);
    })
  }

  getBreweries();

  return (
    <div className="App">
      <header>
        <div className="heading-container">
          <div className="beer-logo">
            <FaBeer />
          </div>
          <h1>Déjà Brew</h1>
        </div>
        <nav>
          <p>Created at<a href="https://junocollege.com/" target="_blank" rel="noreferrer noopener">Juno College</a><span>by Cam Duffin</span></p>
        </nav>
      </header>

      <form action="">
        <input type="text" id="" placeholder="Search for breweries by city..."/>

        <label htmlFor=""></label>
        <button>Search</button>
      </form> 
      <Breweries />

    </div>
  );
}

export default App;
