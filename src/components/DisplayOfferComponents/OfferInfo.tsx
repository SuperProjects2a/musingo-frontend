import React, { FunctionComponent } from "react";
import { Card } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFontAwesome } from "@fortawesome/free-solid-svg-icons";
import { IAnnouncement } from "../../services/offerService";

const OfferInfo: FunctionComponent<{ offer: IAnnouncement | undefined }> = (
  props
) => {
  let date = new Date(props.offer?.createTime as string).toLocaleString();
  return (
    <div>
      <Card style={{ textAlign: "left" }} className="p-2">
        <Card.Body>
          <Card.Subtitle className="py-1">
            <small className="text-muted">Dodane {date}</small>
          </Card.Subtitle>
          <Card.Title className="pt-1">{props.offer?.title}</Card.Title>
          <Card.Subtitle>
            <Card.Text className="pb-4">
              <strong>{props.offer?.cost} zł</strong>
            </Card.Text>
          </Card.Subtitle>
          <strong>Opis</strong>
          <Card.Text>{props.offer?.description}</Card.Text>
          <Link
            to={`/ReportOffer/${props.offer?.id}`}
            style={{ float: "right", color: "red" }}
          >
            <FontAwesomeIcon className="px-2" icon={faFontAwesome} />
            Zgłoś
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default OfferInfo;
