import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./cards.css";
import play from "../../assets/images/svg/play.svg";



function BasicCards() {
  return (
    <div style={{position:'static'}}>
  
    <Card  className='particuliers' style={{position:'relative'}} >
      <Card.Body>
        <Card.Title>PARTCULIRS</Card.Title>
        <Card.Text>
        Ceux et celles qui se sentent concernés par les enjeux actuels et veulent contribuer à l’amélioration du bien-être, de l’environnement et des pratiques économiques peuvent s’inscrire gratuitement sur notre plateforme. Vous trouverez des entreprises avec lesquelles vous interagissez et vous pourrez les noter sur de multiples critères de développement durable
        </Card.Text>
        <Button>Inscription gratuite</Button>
      </Card.Body>
    </Card>

    <div style={{position:'absolute'}}>
  
  <Card  className='particuliers' style={{position:'relative'}} >
    <Card.Body>
      <Card.Title>PARTCULIRS</Card.Title>
      <Card.Text>
      Ceux et celles qui se sentent concernés par les enjeux actuels et veulent contribuer à l’amélioration du bien-être, de l’environnement et des pratiques économiques peuvent s’inscrire gratuitement sur notre plateforme. Vous trouverez des entreprises avec lesquelles vous interagissez et vous pourrez les noter sur de multiples critères de développement durable
      </Card.Text>
      <Button>Inscription gratuite</Button>
    </Card.Body>
  </Card>



  </div>
  
    </div>
      
    



  );
}

export default BasicCards;