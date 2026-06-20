import { useState } from "react";

function Shide (){
 const [shid, setShid] = useState("")
 const toggale = ()=>{
    setShid(!shid)
setShid = toggale (" o ff")
 }
 




    return(
    
<>
  <p>Turn {shid ? "ON" : "Off"}</p>
<button onClick={toggale}>turn {shid ? "Off ": "ON"}</button>
</>
    )
}

export default Shide;