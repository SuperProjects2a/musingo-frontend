import React from "react";
import { Col, Row, Card, Carousel, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faStar } from "@fortawesome/free-solid-svg-icons";
import OfferCarousel from "./OfferCarousel";

const DisplayOffer = () => {
  return (
    <div className="offerContainerDisplayOffer">
      <Row>//test
        <OfferCarousel />
        <Col>
          {/* USER INFO */}
          <Card
            style={{ textAlign: "left" }}
            className="mx-sm-5 mx-md-5 mx-lg-5 px-3"
          >
            <Row sm={2}>
              <Card.Img
                variant="top"
                src={`https://picsum.photos/200/300?random=${
                  Math.random() * 100
                }`}
                style={{
                  height: "120px",
                  width: "120px",
                  objectFit: "cover",
                  borderRadius: "30px",
                }}
                className="pt-3 px-2"
              />

              <Col className="personalInfoDisplayOffer mt-3">
                <strong>Tadeusz Norek</strong>
                <Col>
                  <FontAwesomeIcon className="mt-2 mx-2" icon={faStar} />
                  3.5
                  <small className="text-muted">
                    <strong>/5</strong>
                  </small>
                  <Card.Subtitle className="py-1 mx-3">
                    <small className="text-muted">
                      <strong>27 ocen</strong>
                    </small>
                  </Card.Subtitle>
                </Col>
                <Col>
                  <FontAwesomeIcon className="mt-2 mx-2" icon={faLocationDot} />
                  Miasto
                  <Card.Subtitle className="py-1 mx-3">
                    <small className="text-muted">Wojewódzctwo</small>
                  </Card.Subtitle>
                </Col>
              </Col>
            </Row>
            <Card.Body>
              <Row>
                <Button className="my-2 my-sm-0" variant="outline-dark light">
                  <strong>Zadzwoń</strong>
                </Button>
                <Button className="my-2 my-sm-0" variant="outline-dark light">
                  <strong>Zapytaj o przedmiot</strong>
                </Button>
              </Row>
            </Card.Body>
          </Card>
          <Card className="mx-sm-5 mx-md-5 mx-lg-5 px-3">
            <Card.Body>
              <Row>
                <Button className="my-2 my-sm-0" variant="outline-dark light">
                  <strong>Dodaj do ulubionych</strong>
                </Button>
                <Button className="my-2 my-sm-0" variant="dark">
                  <strong>Kup teraz</strong>
                </Button>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Card
        className="mx-sm-5 mx-md-5 mx-lg-5 mt-sm-5 mb-sm-5 px-3"
        style={{ textAlign: "left" }}
      >
        <Card.Body>
          <Card.Subtitle className="py-1">
            <small className="text-muted"> Dodane 10 marca 2001</small>
          </Card.Subtitle>
          <Card.Title className="pt-1">Mazda 32424324 sdfsdf</Card.Title>
          <Card.Subtitle>
            <Card.Text className="pb-4">
              <strong>32489238497zł</strong>
            </Card.Text>
          </Card.Subtitle>
          <strong>Opis</strong>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.ome quick example text to build on the
            card title and make up the bulk of the card's content.ome quick
            example text to build on the card title and make up the bulk of the
            card's content.ome quick example text to build on the card title and
            make up the bulk of the card's content.ome quick example text to
            build on the card title and make up the bulk of the card's
            content.ome quick example text to build on the card title and make
            up the bulk of the card's content.ome quick example text to build on
            the card title and make up the bulk of the card's content.ome quick
            example text to build on the card title and make up the bulk of the
            card's content.ome quick example text to build on the card title and
            make up the bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default DisplayOffer;
