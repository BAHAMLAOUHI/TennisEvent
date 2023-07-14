import Intervenants from './Intervenants/Intervenants'

import { useState,useEffect } from 'react'

function Participants(){
    
    //const [showModalAdd,setShowModalAdd] = useState(false)
    let [Interv,setInterv] = useState([])
    let [error,setError] = useState("")
    let [loading, setLoading] = useState(true)
    useEffect(()=>{
         fetch("http://localhost:8000/participants/")
            .then(res=>res.json())
            .then(data=>{
                setInterv(data)
                setError("")
            })
            .catch(err=>{
                setError("No user with id")      
            })
        }
,[error , loading])


    return(
        <div>
        <Intervenants Interv={Interv}  />
        </div>
    )
}
export default Participants;