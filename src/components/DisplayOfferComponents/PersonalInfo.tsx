import React from "react";
import { FunctionComponent } from "react";
import { Col, Row, Card, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompass, faStar } from "@fortawesome/free-solid-svg-icons";
import { IOwner } from "../../services/offerService";

const informationsUser = [
  {
    name: "Krzysztof",
    surname: "Kononowicz",
    rating: "2.4",
    ratingNumOf: "200",
    city: "Sosnowiec",
    state: "Śląskie",
  },
];

const PersonalInfo: FunctionComponent<{user: IOwner | undefined, city: string | undefined}> = (props) => {
  return (
    <div >
      {informationsUser.map((informationUser, index) => (
    <Card className="py-3 px-4">
    <Row>
      <Card.Img
        variant="top"
        src={`https://picsum.photos/200/300?random=${Math.random() * 100}`}
        style={{
          height: "calc(11vh + 4vw)",
          width: "calc(11vh + 4vw)",
          maxHeight: "88px",
          maxWidth: "88px",
          objectFit: "cover",
          borderRadius: "90px",
        }}
        className="pt-2 px-2 pb-2"
      />
      <Col className="personalInfoDisplayOffer">
        <strong>{props.user?.name} {props.user?.surname}</strong>
        <Col>
          <FontAwesomeIcon icon={faStar} className="iconsDisplayOffer" />
          {props.user?.avgRating}
          <small className="text-muted">/5</small>
          <Card.Subtitle className="py-1 px-4">
            <small className="text-muted">{"placeholder"} ocen</small>
          </Card.Subtitle>
        </Col>
        <Col className="pb-3">
          <FontAwesomeIcon icon={faCompass} className="iconsDisplayOffer" />
          {props.city}
          
        </Col>
      </Col>
    </Row>
    <Button className="" variant="outline-dark light">
      <strong>Zadzwoń</strong>
    </Button>
    <Button className="mt-2" variant="outline-dark light">
      <strong>Zapytaj o przedmiot</strong>
    </Button>
  </Card>
      ))}
    </div>
  );
};

export default PersonalInfo;
