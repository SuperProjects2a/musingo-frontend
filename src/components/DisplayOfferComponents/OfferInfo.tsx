import React from "react";
import { Card } from "react-bootstrap";

const OfferInfo = () => {
  return (
    <Card style={{ textAlign: "left" }} className="p-2">
      <Card.Body>
        <Card.Subtitle className="py-1">
          <small className="text-muted"> Dodane 10 marca 2001</small>
        </Card.Subtitle>
        <Card.Title className="pt-1">Mazda 32424324 sdfsdf</Card.Title>
        <Card.Subtitle>
          <Card.Text className="pb-4">
            <strong>32489238497zł</strong>
          </Card.Text>
        </Card.Subtitle>
        <strong>Opis</strong>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.ome quick example text to build on the card
          title and make up the bulk of the card's content.ome quick example
          text to build on the card title and make up the bulk of the card's
          content.ome quick example text to build on the card title and make up
          the bulk of the card's content.ome quick example text to build on the
          card title and make up the bulk of the card's content.ome quick
          example text to build on the card title and make up the bulk of the
          card's content.ome quick example text to build on the card title and
          make up the bulk of the card's content.ome quick example text to build
          on the card title and make up the bulk of the card's content.ome quick
          example text to build on the card title and make up the bulk of the
          card's content.
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default OfferInfo;
