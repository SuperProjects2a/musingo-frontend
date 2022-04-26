import React from "react";
import { Card } from "react-bootstrap";

let date:string;
let item:string;
let price:string;
let description:string;

const OfferInfo = () => {
  return (
    <Card style={{ textAlign: "left" }} className="p-2">
      <Card.Body>
        <Card.Subtitle className="py-1">
          <small className="text-muted">{date}</small>
        </Card.Subtitle>
        <Card.Title className="pt-1">{item}</Card.Title>
        <Card.Subtitle>
          <Card.Text className="pb-4">
            <strong>{price} zł</strong>
          </Card.Text>
        </Card.Subtitle>
        <strong>Opis</strong>
        <Card.Text>
          {description}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default OfferInfo;
