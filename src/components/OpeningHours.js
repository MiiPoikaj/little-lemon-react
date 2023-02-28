import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const photo = require('../resources/light-restaurant.jpg')

function OpeningHoursCard() {
  return (
    <Card style={{ width: '25rem' }}>
      <Card.Img variant="top" src={photo}/>
      <Card.Body>
        <Card.Title>Opening Hours</Card.Title>
        <Card.Text>
        Step into the world of Greece at Little Lemon. Whether you're looking for a lunch break, an evening out, or a weekend treat, we're open and ready to serve you. Come visit us and experience our mouth-watering Greek cuisine and warm, welcoming atmosphere. Book your table now and treat your senses to the authentic flavors of Greece.
        <ul className="no-list-style pt-2">
          <li>Mon-Fri: 11.00 - 22.00</li>
          <li>Sat: 10.00 - 24.00</li>
          <li>Sun: 12.00 - 22.00</li>
        </ul>
        </Card.Text>
        <Button variant="primary">Book Table</Button>
      </Card.Body>
    </Card>
  );
}

export default OpeningHoursCard;