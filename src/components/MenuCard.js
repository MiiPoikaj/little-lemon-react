import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const photo = require('../resources/food.jpg')

function MenuCard() {
  return (
    <Card style={{ width: '25rem' }}>
      <Card.Img variant="top" src={photo} />
      <Card.Body>
        <Card.Title>Our New Menu</Card.Title>
        <Card.Text>
        Taste adventure awaits at Little Lemon! We're excited to announce the arrival of our new menu, filled with fresh and authentic Greek flavors. From traditional dishes with a modern twist, to new and creative plates, there's something for everyone to enjoy. Come and discover our new creations and fall in love with the taste of Greece all over again!
        </Card.Text>
        <Button variant="primary">Menu</Button>
      </Card.Body>
    </Card>
  );
}

export default MenuCard;