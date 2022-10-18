import React from "react";
import faLinkedin from "../../assets/images/svg/in.svg";
import faFacebook from "../../assets/images/svg/fb.svg";
import faYoutube from "../../assets/images/svg/youtube.svg";
import faTwitter from "../../assets/images/svg/twitter.svg";

export default function SocialFlow() {
  return (
    <div style={{
      position:'relative',
      display: 'inline-block',

        left: 55,
  }} >
      
      <p className="social-container">
        <a
          href="#"
          className=" social"
        >
          <img src={faLinkedin}/>
        </a>
        <a
          href="#"
          className=" social"
        >
          <img src={faTwitter}/>
        </a>
        <a
          href="#"
          className=" social"
        >
          
          <img src={faFacebook}/>

        </a>
        <a href="#" className=" social">
     
          <img src={faYoutube}/>

        </a>
      </p>
    </div>
  );
}