import React, { useEffect } from 'react';
import Button from './Button';
import Row from './Row';
import FirstArticle from './FirstArticle'
import Tickets from './Tickets'
import Participants from './Participants';


import Prizes from './Prizes/Prizes'
import Intervenants from './Intervenants/Intervenants'

import './Home.modules.css';
import tennis from '../assets/tennis.jpeg';
import {  NavLink } from 'react-router-dom';

function HomePage() {


  let article = {
    cover: 'https://images.pexels.com/photos/1619860/pexels-photo-1619860.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: '',
    publishedAt: '',
    title: "Découvrez l'excitation du tennis lors de notre tournoi passionnant ",
    shortDescription: 'Que vous soyez un joueur amateur enthousiaste ou un fan de tennis passionné, ce tournoi vous offre une opportunité unique de montrer votre talent sur le court et de vivre l\'émotion de la compétition. Rejoignez-nous pour une expérience sportive mémorable, où vous pourrez non seulement perfectionner votre jeu, mais aussi nouer des liens avec dautres joueurs passionnés de votre communauté.'
}   ;


 
return (
  <div className='HomePage'>
    <div className="centered-content">
      <img src={tennis} alt="logo" width={"100%"} className='homeImg' />
      <div className="container">
        <h1>FUTURE</h1>
        <p>Participez au tournoi de tennis et vivez des moments palpitants!</p>
        <p>Un événement incontournable pour les amateurs de tennis et les passionnés de sport.</p>
      </div>
      <NavLink to="/Inscription" className='Button'>Inscription</NavLink>

      <h4 className="wordCarousel">
        <div>
          {/* Use classes 2,3,4, or 5 to match the number of words */}
          <ul className="flip5">
            <li>À 9h</li>
            <li>À Monastir</li>
            <li>Rendez-vous</li>
            <li>5 juin</li>
            <li>Le Lundi</li>
          </ul>
        </div>
      </h4>
    </div>
    <FirstArticle {...article}/>

<Row>
  <h4 className='titre'>Programme</h4>
</Row>

<Tickets />



<Row>
  <h4 className='titre'>Intervenants</h4>
</Row>

<Participants/>
<br/>
<Prizes/>
  </div>
);

}

export default HomePage;
