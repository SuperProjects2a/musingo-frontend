import React from "react";
import { Card, Button } from "react-bootstrap";

const FavoriteBox = () => {
  return (
    <Card className="py-4 px-5 px-lg-4 px-xl-5 mt-2">
      <Button className="mx-sm-5 mx-lg-0" variant="outline-dark light">
        <strong>Dodaj do ulubionych</strong>
      </Button>
      <Button className="mt-2 mx-sm-5 mx-lg-0" variant="dark">
        <strong>Kup teraz</strong>
      </Button>
    </Card>
  );
};

export default FavoriteBox;
