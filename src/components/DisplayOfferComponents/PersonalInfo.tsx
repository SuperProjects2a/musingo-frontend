import React from "react";
import { Col, Row, Card, Carousel, Button, Image } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompass, faStar } from "@fortawesome/free-solid-svg-icons";
import OfferCarousel from "./OfferCarousel";

const PersonalInfo = () => {
  return (
    <Card className="py-3 px-5 px-lg-4 px-xl-5 mt-2 mt-lg-0">
      <Row className="pt-2 pt-lg-0 px-sm-5 px-lg-0">
        <Card.Img
          src={`https://picsum.photos/200/300?random=${Math.random() * 100}`}
          className=""
          style={{
            height: " calc(11vh + 4vw)",
            minHeight: "60px",
            minWidth: "60px",
            maxHeight: "180px",
            maxWidth: "180px",
            objectFit: "cover",
            borderRadius: "45px",
          }}
        />
        <Col className="personalInfoDisplayOffer">
          <strong>Tadeusz Norek</strong>
          <Col>
            <FontAwesomeIcon icon={faStar} className="iconsDisplayOffer" />
            3.5
            <small className="text-muted">/5</small>
            <Card.Subtitle className="py-1 px-4">
              <small className="text-muted">27 ocen</small>
            </Card.Subtitle>
          </Col>
          <Col>
            <FontAwesomeIcon icon={faCompass} className="iconsDisplayOffer" />
            Miasto
            <Card.Subtitle className="py-1 px-4">
              <small className="text-muted">Wojewódzctwo</small>
            </Card.Subtitle>
          </Col>
        </Col>
      </Row>
      <Button className="mt-4 mx-sm-5 mx-lg-0" variant="outline-dark light">
        <strong>Zadzwoń</strong>
      </Button>
      <Button className="mt-2 mx-sm-5 mx-lg-0" variant="outline-dark light">
        <strong>Zapytaj o przedmiot</strong>
      </Button>
    </Card>
  );
};

export default PersonalInfo;
