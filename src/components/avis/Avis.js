import React from "react";
import "./avis.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import imgSlider1 from "../../assets/images/viza.png"
import {Col,Row, Card } from "reactstrap";
import StarRed from "../../assets/images/svg/star-selected.svg";
import Star from "../../assets/images/svg/star-not-selected.svg";

const Avis = () => {
    const renderSlides = () =>
    [1, 2, 3, 4].map(num => (
      <Card >
        <Row className="card-space-between">
          <Col>
          <img src={imgSlider1} alt ="" />

          </Col>
          <Col>
          <b>Geiq ADI Alpin</b>
          <p>ZA - 124 rue de la Prairie, 73420, VOGLANS, France</p>
          </Col><br/><br/>
        </Row>
        <Row className="card-space-between">
          <Col>
          <img src={StarRed} />
          </Col>
          <Col>
          <img src={StarRed} alt ="" />
          </Col>
          <Col>
          <img src={StarRed}  alt =""/>
          </Col>
          <Col>
          <img src={Star} alt ="" />
          </Col>
          <Col>
          <img src={Star}  alt =""/>

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
    