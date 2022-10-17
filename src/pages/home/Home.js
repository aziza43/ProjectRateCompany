import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Body from "../../components/body/Body";
import Cards from "../../components/cards/Cards";
//  import 'bootstrap/dist/css/bootstrap.css';

import "./home.css"
const Home = () => {
  return (
    <div className="home">
   <Navbar />
      <div className="homeContainer">
       
        <Body/>
        <Cards/>
      
      </div>
    </div>
  );
};

export default Home;
