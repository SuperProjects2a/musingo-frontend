import React, { useEffect, useState } from "react";
import { FunctionComponent } from "react";
import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { buyOffer } from "../../services/offerInteractionService";
import { IAnnouncement } from "../../services/offerService";
import {
  watchOffer,
  removeWatch,
} from "../../services/offerInteractionService";

const FavoriteBox = ({
  offerId,
  isWatched,
}: {
  offerId: number;
  isWatched: boolean;
}) => {
  const navigate = useNavigate();
  const [watched, setWatched] = useState(isWatched);

  useEffect(() => {
    setWatched(isWatched);
  }, []);

  return (
    <Card className="py-4 px-4">
      {watched ? (
        <Button
          className=""
          variant="outline-dark light"
          onClick={() => {
            removeWatch({ offerId: offerId }).then(() => {
              setWatched(false);
            });
          }}
        >
          <strong>Usuń z obserwowanych</strong>
        </Button>
      ) : (
        <Button
          className=""
          variant="outline-dark light"
          onClick={() => {
            watchOffer({ offerId: offerId }).then(() => {
              setWatched(true);
            });
          }}
        >
          <strong>Dodaj do obserwowanych</strong>
        </Button>
      )}

      <Button
        className="mt-2"
        variant="dark"
        onClick={() => {
          buyOffer({ offerId: offerId }).then(() => {
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
