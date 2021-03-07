import './breweries.css';
import { FaGlobe } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa';

// const handleClick = (event) => {
//     document.getElementsByClassName('phone').value = {props.phone};
// }
function Breweries(props) {
    return(
        
        <li>
            <h2>{props.name}</h2>
            <p>{props.address}</p>
            <nav className="brewery-nav">
                <a href={props.website}>
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
            </nav>
        </li>


    )
}

export default Breweries;