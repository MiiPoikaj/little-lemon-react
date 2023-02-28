import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
const photo = require('../resources/dark-restaurant.jpg')


function Promo() {
  return (
    <Card className="bg-dark text-white text-center">
      <Card.Img src={photo} alt="Card image" height="270" />
      <Card.ImgOverlay>
        <Card.Title>Well this isn't the gyro we ordered.../Card.Title>
        <Card.Text className="">
        Looks like we're experiencing a 404 error
            <Button className="my-5">Click here to return to Home page</Button>
        </Card.Text>
      </Card.ImgOverlay>
    </Card>
  );
}

export default NotFound;
