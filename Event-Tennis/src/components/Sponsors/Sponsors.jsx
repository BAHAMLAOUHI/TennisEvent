import React from "react";
import "./Sponsors.css";
import Sponsor from "../../components/Sponsor";

function Sponsors({sponsoListe}) {

  
    
  return (
    <div className="sponso-Cont">
      <div className="gallery">
   
        { sponsoListe.map(({ image}) => (
                 
                <Sponsor image={image}  />
              )) }
              

      </div>
    </div>
  );
}

export default Sponsors;
