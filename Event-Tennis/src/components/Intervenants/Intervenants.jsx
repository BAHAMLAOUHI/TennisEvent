import React from "react";
import "./Intervenants.css";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Card from "../../components/Card";

function Intervenants({Interv}) {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
      return ( 
        <div className="interv-container">
          <Carousel responsive={responsive}>
              { Interv.map(({ prenom, nom }) => (
                 <div className="inv">
                <Card prenom={prenom} nom={nom} />
                </div>
              )) }
              
          </Carousel>
        </div>
      );
}

export default Intervenants;
