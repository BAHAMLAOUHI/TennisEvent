import './Card.modules.css'

import React from "react";

function Card(props) {
  return (
    <div className="card">
      <div className="card-details">
        <img  src={props.prenom}/>
      </div>
      <button className="card-button">{props.nom}</button>
    </div>
  );
}

export default Card;
