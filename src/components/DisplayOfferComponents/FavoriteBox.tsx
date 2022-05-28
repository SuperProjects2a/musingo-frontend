import React from "react";
import { Card, Button } from "react-bootstrap";
import { buyOffer } from "../../services/offerInteractionService";

const FavoriteBox = ({offerId} : {offerId: number}) => {
  return (
    <Card className="py-4 px-4">
      <Button className="" variant="outline-dark light">
        <strong>Dodaj do obserwowanych</strong>
      </Button>
      <Button className="mt-2" variant="dark" onClick={() => buyOffer({offerId})}>
        <strong>Kup teraz</strong>
      </Button>
    </Card>
  );
};

export default FavoriteBox;
