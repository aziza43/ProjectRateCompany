import React from "react";
// import background from "../../assets/images/banner.png";
import play from "../../assets/images/svg/play.svg";
import "./body.css";


function Background() {
    return (
      <div className="aziza">
       <div  className="back" style={{position: 'relative'}}>
       <p>Chercher les entreprises les plus responsables</p>
       </div>
       <div className="minpar" style={{position: 'relative'}}>
       <p>Sautons le pas pour que chaque voix compte quand il s’agit de sauver ce que nous avons de plus précieux </p>
       </div>
       <div className="video" style={{position: 'relative'}}>
        <img src={play}/>
        <p> LANCER LA VIDÉO</p>
       </div>
       
       
      </div>
   
     
     
     
        
    

    
   
    );
  }
  
  export default Background;