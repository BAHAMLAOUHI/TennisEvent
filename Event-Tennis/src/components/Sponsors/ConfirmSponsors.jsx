import Sponsors from './Sponsors'
import React from "react";
import "./Sponsors.css";
import { useState,useEffect } from 'react'

function ConfirmSponsors(){
    
    //const [showModalAdd,setShowModalAdd] = useState(false)
    let [Sponsos,setSponsos] = useState([])
    let [error,setError] = useState("")
    let [loading, setLoading] = useState(true)
    useEffect(()=>{
         fetch("http://localhost:8000/sponsors/")
            .then(res=>res.json())
            .then(data=>{
                setSponsos(data)
                setError("")
            })
            .catch(err=>{
                setError("No user with id")      
            })
        }
,[error , loading])


    return(
        <div>
        <Sponsors sponsoListe={Sponsos}  />
        </div>
    )
}
export default ConfirmSponsors;