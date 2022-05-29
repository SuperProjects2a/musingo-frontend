import React from "react";
import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { buyOffer } from "../../services/offerInteractionService";

const FavoriteBox = ({ offerId }: { offerId: number }) => {
  const navigate = useNavigate();

  return (
    <Card className="py-4 px-4">
      <Button className="" variant="outline-dark light">
        <strong>Dodaj do obserwowanych</strong>
      </Button>
      <Button
        className="mt-2"
        variant="dark"
        onClick={() => {
          buyOffer({ offerId }).then(() => {
            navigate("/UserProfile/Fundings");
          });
        }}
      >
        <strong>Kup teraz</strong>
      </Button>
    </Card>
  );
};

export default FavoriteBox;
