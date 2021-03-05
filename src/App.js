import { FaBeer } from 'react-icons/fa';
import './App.css';

function App() {
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
          <p>Created at<a href="https://junocollege.com/" target="_blank" rel="noopener">Juno College</a><span>by Cam Duffin</span></p>
        </nav>
      </header>
    </div>
  );
}

export default App;
