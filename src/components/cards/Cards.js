import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Col,Container,Row} from "reactstrap";
import types from "../../assets/images/svg/bg-types.svg"
/*--  add styles css of cards--*/
import "./cards.css";




function BasicCards() {
  return (
/*--  add the cards components--*/
<Container>
  <Row>

    <Col> <Card  className='professionnel'  >
      <Card.Body>
        <Card.Title className='title'>PARTCULIRS</Card.Title>
        <Card.Subtitle className="subcard">Contribuez à améliorer l'impact  des <br/> entreprises</Card.Subtitle>
        <Card.Text className='text'>
          Ceux et celles qui se sentent concernés par les enjeux actuels et veulent contribuer à l’amélioration du bien-être, de l’environnement et des pratiques économiques peuvent s’inscrire gratuitement sur notre plateforme. Vous trouverez des entreprises avec lesquelles vous interagissez et vous pourrez les noter sur de multiples critères de développement durable
        </Card.Text>
        <Button style={{borderRadius:"23px" , backgroundColor:'#E86161', borderColor:'#E86161'}}>Inscription gratuite</Button>
      </Card.Body>
    </Card>
    </Col>

    <Col>
     <Card  className='professionnel'  >
      <Card.Body>
        <Card.Title className='title'>PROFESSIONNELS</Card.Title>
        <Card.Subtitle className="subcard">Evaluez gratuitement votre RSE auprès de vos <br/> parties prenantes</Card.Subtitle>
        <Card.Text className='text'>
         Les principes de la norme ISO 26000 établissent la référence mondiale en matière de développement durable. Pourtant, ils sont impossibles à estimer sans le retour de ses parties prenantes. Nos solutions d’audits RSE pour toutes les tailles d’entreprises permettent d’évaluer la performance de ces critères
        </Card.Text>
        <Button style={{borderRadius:"23px" , backgroundColor:'#E86161', borderColor:'#E86161'}}>Je découvre les audits RSE</Button>
      </Card.Body>
    </Card>
    </Col>
  </Row> 
  <Container> <img src={ types} style={{position:'center', height:"400px"}}/></Container>
 
</Container>


  );
}

export default BasicCards;