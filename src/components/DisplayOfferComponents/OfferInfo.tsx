import React from "react";
import { Card } from "react-bootstrap";

const informationsOffer = [
  {
    date: "21.03.2010",
    price: "230",
    item: "Banan",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
];

const OfferInfo = () => {
  return (
    <div >
    {informationsOffer.map((informationOffer, index) => (
    <Card style={{ textAlign: "left" }} className="p-2">
      <Card.Body>
        <Card.Subtitle className="py-1">
          <small className="text-muted">Dodane {informationOffer.date}</small>
        </Card.Subtitle>
        <Card.Title className="pt-1">{informationOffer.item}</Card.Title>
        <Card.Subtitle>
          <Card.Text className="pb-4">
            <strong>{informationOffer.price} zł</strong>
          </Card.Text>
        </Card.Subtitle>
        <strong>Opis</strong>
        <Card.Text>
          {informationOffer.description}
        </Card.Text>
      </Card.Body>
    </Card>
          ))}
          </div>
  );
};

export default OfferInfo;
