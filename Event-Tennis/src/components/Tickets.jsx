import Ticket1 from "./Ticket1";
import './Timeline.modules.css';
import Row from "./Row";

function Tickets(){

  let ticket = [{
    Horaire: '9h00 - 9h30',
    Description: 'Cérémonie douverture du tournoi',
    Type : '1' 
  },
  {
    Horaire: '9h30 - 12h30',
    Description: 'Matchs de qualification des différentes catégories',
    Type : '2' 
  },
  {
    Horaire: '12h30 - 13h30',
    Description: 'Pause déjeuner',
    Type : '3' 
  },
  {
    Horaire: '13h30 - 16h30',
    Description: 'Poursuite des matchs de qualification',
    Type : '1' 
  },
  {
    Horaire: '16h30 - 17h00',
    Description: 'Pause rafraîchissements et collations',
    Type : '2' 
  },
  {
    Horaire: '17h00 - 19h30',
    Description: 'Matchs de demi-finale pour chaque catégorie',
    Type : '3' 
  },
  {
    Horaire: '19h30 - 20h00',
    Description: 'Pause et préparation pour la finale',
    Type : '1' 
  },
  {
    Horaire: ' 20h00 - 21h30',
    Description: ' Finales des différentes catégories',
    Type : '2' 
  },
  {
    Horaire: '21h30',
    Description: 'Cérémonie de clôture et remise des prix',
    Type : '1' 
  }
]

    return (
        <Row>
        <div className="timeline">
          
          {ticket.map(({Horaire,Description,Type}) => <Ticket1  Description={Description} Type={Type}  Horaire={Horaire}/>)}
        </div>
        </Row>
    )
}

export default Tickets;