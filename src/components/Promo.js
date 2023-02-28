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
        <Card.Title>30% Off This Weekend</Card.Title>
        <Card.Text className="">
            Craving a taste of Greece? Little Lemon is here to satisfy your cravings with authentic Greek cuisine that will transport you straight to the sunny streets of Athens. And the best part? This weekend, we're offering a special deal! Come enjoy a delicious meal at Little Lemon and receive 30% off your total bill. It's the perfect opportunity to treat yourself and your loved ones to a fantastic dining experience without breaking the bank.Whether you're in the mood for juicy gyros, savory moussaka, or a refreshing Greek salad, we have something for everyone. So, mark your calendars and come visit Little Lemon this weekend for a taste of Greece at unbeatable prices!
            <Button className="my-5">Book your table now!</Button>
        </Card.Text>
      </Card.ImgOverlay>
    </Card>
  );
}

export default Promo;
