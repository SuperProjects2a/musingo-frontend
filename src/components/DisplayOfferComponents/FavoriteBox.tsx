import React, { useState } from "react";
import { FunctionComponent } from "react";
import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { buyOffer } from "../../services/offerInteractionService";
import { IAnnouncement } from "../../services/offerService";
import {
  watchOffer,
  removeWatch,
} from "../../services/offerInteractionService";

const FavoriteBox: FunctionComponent<{ offer: IAnnouncement | undefined }> = (
  props
) => {
  const navigate = useNavigate();
  const [watched, setWatched] = useState(props.offer?.isWatched ?? false);

  return (
    <Card className="py-4 px-4">
      {watched ? (
        <Button
          className=""
          variant="outline-dark light"
          onClick={() => {
            removeWatch({ offerId: props.offer?.id ?? -1 }).then(() => {
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
            watchOffer({ offerId: props.offer?.id ?? -1 }).then(() => {
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
          buyOffer({ offerId: props.offer?.id ?? -1 }).then(() => {
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
