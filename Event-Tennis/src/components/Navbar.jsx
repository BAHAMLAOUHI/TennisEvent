import logo from '../assets/FTT.jpg';
import logo4 from '../assets/logo4.png';

import Button from './Button';
import Row from './Row';

import { Link } from 'react-router-dom';
import './Navbar2.modules.css';
import tennis from '../assets/tennis.jpeg';
import {  NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <div>
                        <img src={tennis} alt="logo" width={"100%"} className='homeImg' />

            <nav>
                <img  className="nav-img"src={logo4} width={60} alt="logo" />
                <div className="nav-item">
                    <Link to="/">Accueil</Link>
                </div>
                <div className="nav-item">
                    <Link to="/Programme">Programme</Link>
                </div>
                <div className="nav-item">
                    <Link to="/Participants">Intervenants</Link>
                </div>
                <div className="nav-item">
                    <Link to="/Joueurs">Participants</Link>
                </div>
                <div className="nav-item">
                    <Link to="/Contact">Contact</Link>
                </div>

{             /*   <NavLink to="/Inscription" className='Button'>Inscription</NavLink>
<Button>Inscription</Button>*/
}            </nav>

        </div>
    );
}

export default Navbar;
