import './breweries.css';
import { FaGlobe } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa';
import { SiGooglemaps } from "react-icons/si";

function Breweries(props) {

    const lat = props.latitude;
    const long = props.longitude;

    const handleDirections = (lat, long) => {
        const url = `https://www.google.com/maps/dir/?api=1&destination=${lat},${long}`;
        window.open(url, '_blank');
    }
    return(

        <li>
            <h2>
                    {
                        props.name === 'brewery in planning' ?
                        null
                        : props.name
                    }
            </h2>
            <p>{props.address}</p>
            <p>{props.city}, {props.state}</p>
            <nav className="brewery-nav">
                <a href={props.website} target="_blank" rel="noreferrer noopener">
                    {
                        props.website ? <FaGlobe className="globe"/>
                        : null
                    } 
                </a>
                <i>
                    {
                        props.phone ? <FaPhone className="phone"/> 
                        : null
                    }
                </i>
                <button className="maps-button" onClick={() => handleDirections(lat, long)}>
                    {
                        props.latitude ? <SiGooglemaps className="maps"/> 
                        : null
                    }
                </button>
            </nav>
        </li>
    )
}

export default Breweries;