import React from "react";
import {
  InputGroup,
  Container,
  Form,
  Col,
  Row,
  Card,
  Carousel,
  Button,
} from "react-bootstrap";
import { Formik } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faStar,
  faExpand,
  faCircleDot,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";

const DisplayOffer = () => {
  return (
    <div>
      <Row md={3} lg={3}>
        {/* IMAGE BOX */}
        <Card className="rounded border border-light mx-sm-2 mx-md-2 mx-lg-5 mt-sm-5 mb-sm-5 px-3">
          <Card.Img
            variant="top"
            src={`https://picsum.photos/200/300?random=${Math.random() * 100}`}
            style={{
              height: " calc(11vh + 4vw)",
              minHeight: "450px",
              width: "200%",
              objectFit: "cover",
              borderRadius: "10px",
            }}
            className="pt-2 px-2"
          />
          <Row>
            <Button className="my-2 my-sm-0 " variant="dark">
              <strong>Kup teraz</strong>
            </Button>
            <FontAwesomeIcon className="px-2 mt-3" icon={faCircleDot} />
            <FontAwesomeIcon className="px-2 mb-3" icon={faExpand} />
            <FontAwesomeIcon className="px-2 mb-3" icon={faAngleRight} />
          </Row>
        </Card>
        <Col>
          {/* USER INFO */}
          <Card
            style={{ width: "20rem", textAlign: "left" }}
            className="rounded border border-light mx-sm-2 mx-md-2 mx-lg-5 mt-sm-5 mb-sm-5 px-3"
          >
            <Row sm={2} md={2} lg={2}>
              <Card.Img
                variant="top"
                src={`https://picsum.photos/200/300?random=${
                  Math.random() * 100
                }`}
                style={{
                  height: "150px",
                  width: "150px",
                  objectFit: "cover",
                  borderRadius: "30px",
                }}
                className="pt-2 px-2"
              />
              <Card.Title className="mt-2">
                Tadeusz Norek
                <Col>
                  <FontAwesomeIcon className="mt-2" icon={faStar} />
                  3.5
                  <small className="text-muted">
                    <strong>/5</strong>
                  </small>
                  <Card.Subtitle className="py-1">
                    <small className="text-muted">
                      <strong>27 ocen</strong>
                    </small>
                  </Card.Subtitle>
                  <Col>
                    <FontAwesomeIcon className="mt-2" icon={faLocationDot} />
                    Miasto
                    <Card.Subtitle className="py-1">
                      <small className="text-muted">Wojewódzctwo</small>
                    </Card.Subtitle>
                  </Col>
                </Col>
              </Card.Title>
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
          <Card
            className="justify-content-center rounded border border-light mx-sm-2 mx-md-2 mx-lg-5 mt-sm-5 mb-sm-5 px-3"
            style={{ width: "20rem" }}
          >
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
        className="justify-content-center rounded border border-light mx-sm-2 mx-md-2 mx-lg-5 mt-sm-5 mb-sm-5 px-3"
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
