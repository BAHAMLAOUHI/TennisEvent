
import ConfirmJou from './Intervenants/ConfirmJou'

import { useState,useEffect } from 'react'

function joueurs(){
  
    //const [showModalAdd,setShowModalAdd] = useState(false)
    let [Jou,setJou] = useState([])
    let [error,setError] = useState("")
    let [loading, setLoading] = useState(true)
    useEffect(()=>{
         fetch("http://localhost:8000/users/")
            .then(res=>res.json())
            .then(data=>{
                setJou(data)
                setError("")
            })
            .catch(err=>{
                setError("No user with id")      
            })
        }
,[error , loading])


    return(
        <div className="joueurs">
        <ConfirmJou Interv={Jou}  />
        </div>
    )
}
export default joueurs;