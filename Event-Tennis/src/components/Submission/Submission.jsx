import React from "react";
import "./Submission.css";
import Button from "../../components/Button";
import {  NavLink } from 'react-router-dom';


function Submission() {
    return <div className="submission-container">
        
            <h1>Rejoignez-nous</h1>
            <h3>Inscrivez-vous dès maintenant pour participer à notre tournoi de tennis et rejoignez-nous pour une expérience sportive exceptionnelle, où l'amour du tennis et l'esprit compétitif s'unissent pour créer des moments inoubliables.</h3>
{           /* <Button >Inscription</Button> */
}            <NavLink to="/Inscription" className='Button'>Inscription</NavLink>
      


    </div>
}

export default Submission;