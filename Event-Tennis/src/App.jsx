// importation des composants
import React from 'react';
import { Routes, Route , BrowserRouter} from 'react-router-dom';

import HomePage from './components/HomePage'

import Navbar from './components/Navbar'
import FirstArticle from './components/FirstArticle'
import Row from './components/Row'
import Participants from './components/Participants'
import Joueurs from './components/Joueurs'

import Contact from './components/Contact'
import AdminS from './components/AddAdminSponsor'
import AdminI from './components/AddAdminIntervenants'

import Form from './components/Form'
import Tickets from './components/Tickets'
import Footer from './components/Footer/Footer'
import Intervenants from './components/Intervenants/Intervenants'

import Prizes from './components/Prizes/Prizes'
import Sponsors from './components/Sponsors/Sponsors'
import Submission from './components/Submission/Submission'
import tennis from './assets/tennis.jpeg';


import './App.css';
import ConfirmSponsors from './components/Sponsors/ConfirmSponsors';



// component 
// any component should be capitalized
// any component should return only one element 
function App() {


  return (
    
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" Component={HomePage } />
        <Route path="/Programme" Component={Tickets} />
        <Route path="/Sponsors" Component={Sponsors} />
        <Route path="/Participants" Component={Participants} />
        <Route path="/Contact" Component={Contact} />
        <Route path="/Joueurs" Component={Joueurs} />
        <Route path="/AdminS" Component={AdminS} />
        <Route path="/AdminI" Component={AdminI} />



{/*        <Route path="/Inscription" Component={Form} />
*/}        <Route path="/Inscription" element={<Form />} />

  </Routes>   
      {/*<div className="content">
        <HomePage />
  </div>*/}
  
      

        <Submission/>

        <ConfirmSponsors />
    <Footer/>
    
    </div>
  )
}


export default App;
