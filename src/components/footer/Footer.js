import React from "react";
import imgFooter from "../../assets/images/footer.png";
import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
} from "./FooterStyles";
import SocialFlow from "./SocialFlow";
/*--  add the styles css of footer--*/

import "./styles.css";

/*--  add the footer of screen--*/

const Footer = () => {
return (
	<Box>
	
	<Container>
        <br/>
		<Row>
        <Column>
			<img src={imgFooter}width={250}  
            style={{
                position: 'absolute',
                left: 80,
          }}/><br/><br/><br/><br/><br/><br/>
           <SocialFlow  />
		</Column>
		<Column>
			<Heading>Rate A Company</Heading>
			<FooterLink href="#">A propos de Rate A Company</FooterLink>
			<FooterLink href="#">Articles sur la RSE</FooterLink>
			<FooterLink href="#">Vidéos sur la RSE</FooterLink>
            <FooterLink href="#">Contact</FooterLink>

		</Column>
		<Column>
			<Heading>Services PRO</Heading>
			<FooterLink href="#">AUDIT RSE</FooterLink>
			<FooterLink href="#">Tarifs</FooterLink>
			<FooterLink href="#">Partenaires RSE</FooterLink>
		</Column>
		<Column>
			<Heading>Legal</Heading>
			<FooterLink href="#">Conditions générales d'utilisation</FooterLink>
			<FooterLink href="#">Plan du site</FooterLink>
		</Column>
		
		</Row>
	</Container>
	</Box>
);
};
export default Footer;
