import React from "react";
import { Col, Row, Card, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompass, faStar } from "@fortawesome/free-solid-svg-icons";

let name:string;
let surname:string;
let rating:number;
let ratingNumOf:number;
let state:string;
let city:string;

const PersonalInfo = () => {
  return (
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
          <strong>{name} {surname}</strong>
          <Col>
            <FontAwesomeIcon icon={faStar} className="iconsDisplayOffer" />
            {rating}
            <small className="text-muted">/5</small>
            <Card.Subtitle className="py-1 px-4">
              <small className="text-muted">{ratingNumOf} ocen</small>
            </Card.Subtitle>
          </Col>
          <Col>
            <FontAwesomeIcon icon={faCompass} className="iconsDisplayOffer" />
            {city}
            <Card.Subtitle className="py-1 px-4 pb-3">
              <small className="text-muted">{state}</small>
            </Card.Subtitle>
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
  );
};

export default PersonalInfo;
