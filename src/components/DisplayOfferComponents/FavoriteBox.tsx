import React from "react";
import { Card, Button } from "react-bootstrap";

const FavoriteBox = () => {
  return (
    <Card className="py-4 px-4">
      <Button className="" variant="outline-dark light">
        <strong>Dodaj do ulubionych</strong>
      </Button>
      <Button className="mt-2" variant="dark">
        <strong>Kup teraz</strong>
      </Button>
    </Card>
  );
};

export default FavoriteBox;
