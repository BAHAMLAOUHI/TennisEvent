import React from 'react';

function Ticket1(props) {
  if (props.Type === "1") {
    return (
      <div className="timeline__event animated fadeInUp timeline__event--type1">
        <div className="timeline__event__icon">
          <i className="lni-cake"></i>
        </div>
        <div className="timeline__event__date">
          {props.Horaire}
        </div>
        <div className="timeline__event__content">
          <div className="timeline__event__title">
            {props.Description}
          </div>
        </div>
      </div>
    );
  } 
  else if (props.Type === "2") {
    return (
        <div className="timeline__event animated fadeInUp delay-2s timeline__event--type2">
        <div className="timeline__event__icon">
            <i className="lni-burger"></i>
        </div>
        <div className="timeline__event__date">
        {props.Horaire}        
        </div>
        <div className="timeline__event__content">
            <div className="timeline__event__title">
            {props.Description}            
            </div>

        </div>
    </div>
    );
  }
  else if (props.Type === "3") {
    return (
        <div className="timeline__event animated fadeInUp delay-1s timeline__event--type3">
            <div className="timeline__event__icon">
                <i className="lni-slim"></i>
            </div>
            <div className="timeline__event__date">
                12h30 - 13h30
            </div>
            <div className="timeline__event__content">
                <div className="timeline__event__title">
                    Pause déjeuner
                </div>

            </div>
        </div>
    );
  }
   else {
    return null;
  }
}

export default Ticket1;
