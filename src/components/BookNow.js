import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const photo = require('../resources/table.jpg')

function BookNowCard() {
  return (
    <Card style={{ width: '25rem' }}>
      <Card.Img variant="top" src={photo} height="225rem"/>
      <Card.Body>
        <Card.Title>Book Now!</Card.Title>
        <Card.Text>
        Ready for a culinary escape to Greece? Book your table now at Little Lemon and indulge in our delicious Greek cuisine. Whether it's for a romantic night out, a family gathering, or a business lunch, we have the perfect setting for you. Don't wait, reserve your table today and experience the authentic flavors of Greece!
        </Card.Text>
        <Button variant="primary">Book Now</Button>
      </Card.Body>
    </Card>
  );
}

export default BookNowCard;