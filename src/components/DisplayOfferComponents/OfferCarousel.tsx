import React, { useState } from "react";
import { Col, Card, Carousel, Button, Toast } from "react-bootstrap";

const OfferCarousel = () => {
  const [show, setShow] = useState(false);
  return (
    <Col>
      <Toast onClose={() => setShow(false)} show={show}>
        <Toast.Header>
          <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
          <strong className="me-auto">Wyświetlanie zdjęcia</strong>
        </Toast.Header>
        <Toast.Body>
          <img
            className="d-block w-100"
            src={`https://picsum.photos/200/300?random=${Math.random() * 100}`}
            alt="First slide"
            style={{
              height: "100%",
              width: "100%",
            }}
          />
        </Toast.Body>
      </Toast>
      {/* IMAGE BOX */}
      <Card className="p-2">
        <Card.Body>
          <Carousel variant="dark">
            <Carousel.Item>
              <img
                className="carouselItemDisplayOffer d-block w-100"
                src={`https://picsum.photos/200/300?random=${
                  Math.random() * 100
                }`}
                alt="First slide"
              />
            </Carousel.Item>
          </Carousel>
          <Button
            variant="outline-dark light"
            style={{ display: "flex", marginLeft: "auto" }}
            onClick={() => setShow(true)}
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
  );
};

export default OfferCarousel;

function setShow(arg0: boolean): void {
  throw new Error("Function not implemented.");
}
