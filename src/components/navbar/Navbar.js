import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import logo from "../../assets/images/logo/logo.png";
import "./navbar.css"

function Bar() {
  return (
    <header>
       <Navbar bg="white" expand="lg" >
      <Container fluid>
      
        
        <img src={logo} alt="" style={{ paddingRight:"50px", paddingLeft:"50px"}}/>
        

        {/* <Navbar.Brand href="#">Navbar scroll</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          
          <Nav
            className="me-auto my-2 my-lg-0" 
            navbarScroll 
          >  
             <Nav.Link href="#action1" className='nav'> Noter</Nav.Link>
           
            <Nav.Link href="#action2" className='navlink'>Audit RSE </Nav.Link>
            <Nav.Link href="#action3"  className='nav' > Devenir pro</Nav.Link>
            <Nav.Link href="#action6"  className='nav'> Contact</Nav.Link>
             <NavDropdown title="Fr" id="navbarScrollingDropdown" className='lang'>

              <NavDropdown.Item href="#action3">English</NavDropdown.Item>
              <NavDropdown.Item href="#action4"> French   </NavDropdown.Item>
          
            </NavDropdown>
            <Nav.Link href="#action7" className='nav'>Connexion</Nav.Link> 

          </Nav>
           <Nav.Link href="#action8" className='inscription'>Inscription</Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </header>
   
  );
}

export default Bar;