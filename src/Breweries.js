import './breweries.css';
import { FaGlobe } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa';
// import { FaMapMarkerAlt } from 'react-icons/fa';
import { SiGooglemaps } from "react-icons/si";

// const handleClick = (event) => {
//     document.getElementsByClassName('phone').value = {props.phone};
// }
function Breweries(props) {

    const lat = props.latitude;
    const long = props.longitude;
    const id = props.key;
    return(
        
        <li>
            <h2>{props.name}</h2>
            <p>{props.address}</p>
            <nav className="brewery-nav">
                <a href={props.website} target="_blank" rel="noopener">
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
                <a href='https://www.google.com/maps/search/?api=1&query={lat},{long}&query_place_id={id}'><SiGooglemaps className="maps"/></a>
            </nav>
        </li>
    )
}

export default Breweries;