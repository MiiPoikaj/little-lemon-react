import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Promo from "./Promo";
import MenuCard from "./MenuCard";
import BookNowCard from "./BookNow";
import OpeningHoursCard from "./OpeningHours";

function Mainbody() {
    return (
        <Container>
        <Row className="px-4 my-4"d-flex justify-content-center>
          <Col sm={12}><Promo /></Col>
        </Row>
        <Row className="px-4 my-3 text-center d-flex justify-content-center">
          <Col sm={4}><MenuCard /></Col>
          <Col sm={4}><BookNowCard/></Col>
          <Col sm={4}><OpeningHoursCard/></Col>
        </Row>
       
      </Container>
    )
}

export default Mainbody;