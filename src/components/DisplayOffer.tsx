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
import { faLocationDot, faStar } from "@fortawesome/free-solid-svg-icons";

const DisplayOffer = () => {
  return (
    <div className="display_offer_container">
      <Row>
        <Col md={7} lg={8} xl={9}>
          {/* IMAGE BOX */}
          <Card className="mx-sm-5 mx-md-5">
            <Card.Body>
              <Carousel variant="dark">
                <Carousel.Item>
                  <img
                    className="carousel_item d-block w-100"
                    src={`https://picsum.photos/200/300?random=${
                      Math.random() * 100
                    }`}
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="carousel_item d-block w-100"
                    src={`https://picsum.photos/200/300?random=${
                      Math.random() * 100
                    }`}
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="carousel_item d-block w-100"
                    src={`https://picsum.photos/200/300?random=${
                      Math.random() * 100
                    }`}
                    alt="Third slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="carousel_item d-block w-100"
                    src={`https://picsum.photos/200/300?random=${
                      Math.random() * 100
                    }`}
                    alt="Fourth slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="carousel_item d-block w-100"
                    src={`https://picsum.photos/200/300?random=${
                      Math.random() * 100
                    }`}
                    alt="Fifth slide"
                  />
                </Carousel.Item>
              </Carousel>
              <Button
                className="pt-2 my-2 my-sm-0"
                variant="outline-dark light"
                style={{ display: "flex", marginLeft: "auto" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-aspect-ratio"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h13A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5v-9zM1.5 3a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-13z" />
                  <path d="M2 4.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1H3v2.5a.5.5 0 0 1-1 0v-3zm12 7a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1 0-1H13V8.5a.5.5 0 0 1 1 0v3z" />
                </svg>
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          {/* USER INFO */}
          <Card
            style={{ textAlign: "left" }}
            className="mx-sm-5 mx-md-5 mx-lg-5 px-3"
          >
            <Row>
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
              <Card.Title className="mt-2">
                Tadeusz Norek
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
                  <Col>
                    <FontAwesomeIcon
                      className="mt-2 mx-2"
                      icon={faLocationDot}
                    />
                    Miasto
                    <Card.Subtitle className="py-1 mx-3">
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
