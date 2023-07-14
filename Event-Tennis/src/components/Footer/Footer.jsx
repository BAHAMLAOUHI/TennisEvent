import React from "react";
import "./Footer.css";
import { facebook } from "../../assets/file";
import { twitter } from "../../assets/file";
import { instagram } from "../../assets/file";

function Footer (){
    return <div className="footer-cont">
        <h1 className="footer-title">tennis.com</h1>
        <ul className="prod">
            <li>Accueil</li>
            <li>Participants</li>
            <li>Inscription</li>
            <li>Infos</li>
        </ul>
        <div >
            <ul className="logos">
               <li><a href=""><img src={facebook} alt="" /></a></li>
               <li><a href=""><img src={instagram} alt="" /></a></li>
               <li><a href=""><img src={twitter} alt="" /></a></li>
            </ul>
        </div>
        <p>© 2023 tennis.com. All rights reserved.</p>

    </div>
}
export default Footer;