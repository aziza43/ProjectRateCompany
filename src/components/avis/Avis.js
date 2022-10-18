import React from "react";
import "./avis.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import {Col,Row, Card } from "reactstrap";
import StarRed from "../../assets/images/svg/star-selected.svg";
import Star from "../../assets/images/svg/star-not-selected.svg";
import user1 from "../../assets/images/user-img-1.png";

const Avis = () => {
  const number =[1, 2, 3, 4];
  const str1 ='../../assets/images/slider'
  const str2='.png';
    const renderSlides = () =>
    number.map(num => (
      <Card key={num.toString()} >
        <Row className="card-space-between line">
          <Col>
          <img src={'../../assets/images/slider1.png'} alt ="" />

          </Col>
          <Col>
          <b>Geiq ADI Alpin {num}</b>
          <p>ZA - 124 rue de la Prairie, 73420, VOGLANS, France</p>
          </Col><br/><br/>
        </Row>
        <Row className="card-space-between">
          <Col className="card-stars">
          <img src={StarRed} style={{padding : '10px 2px' }} />         
          <img src={StarRed} style={{padding : '10px 2px'}} />     
          <img src={StarRed}  style={{padding : '10px 2px'}}/>          
          <img src={Star} style={{ padding : '10px 2px' }} />         
          <img src={Star} style={{padding : '10px 2px'}}/><br/>
          <b style={{padding : '10px 10px' }}>3.5</b>

          </Col>
         
         <br/><br/>
        </Row>
        <Row  className="card-space-between line">
         
          <b className="titel-text">Contributed in the lorem ipsum</b><br/><br/>
          <p className="parag">J'ai été très déçu, suite aux événements et échanges avec certaines personnes, j'ai été prise par le geiq. Mais..</p>

        
         
         <br/><br/>
        </Row>
        <Row  className="card-space-between">
        <Col className="card-stars">
        <img src={user1} style={{padding : '10px 10px' }} />
        <p style={{padding : '10px 10px' }}> <br/>User#1454182</p>
        </Col>
         
         <br/><br/>
        </Row>
      </Card>
    ));
    return (

      <div className="avis-container">
        <h3 >
        Derniers avis déposés
        </h3>
        <h6>Derniers avis déposés par des utilisateurs inscrits sur la plateforme ou publiés en ligne suite à un audit RSE</h6>
        <br/>
        <Slider dots={true}
        slidesToShow={3}
        slidesToScroll={3}
        autoplay={false}
        autoplaySpeed={3000}>{renderSlides()}</Slider>
        <br/>
      </div>
      
    );
    };
    export default Avis;
    