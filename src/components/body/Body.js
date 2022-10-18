import React from "react";
import play from "../../assets/images/svg/play.svg";
/*--  import the styles css of body--*/
import "./body.css";


function Background() {
    return (
      <div className="backimg">
       <div  className="back" style={{position: 'relative'}}>
       <p>Chercher les entreprises les plus responsables</p>
       </div>
       <div className="minpar" style={{position: 'relative'}}>
       <p>Sautons le pas pour que chaque voix compte quand il s’agit de sauver ce que nous avons de plus précieux </p>
       </div>
       <div className="video" style={{position: 'relative'}}>
        <img src={play}/> 
        <p className="lancer"> LANCER LA VIDÉO</p>
       </div>
       
      </div>
    
   
    );
  }
  
  export default Background;