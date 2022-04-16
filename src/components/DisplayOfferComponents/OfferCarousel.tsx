import React from "react";
import { Col, Card, Carousel, Button } from "react-bootstrap";

const OfferCarousel = () => {
  return (
    // <Col md={7} lg={9} xl={9}>
    <Col>
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
            <Carousel.Item>
              <img
                className="carouselItemDisplayOffer d-block w-100"
                src={`https://picsum.photos/200/300?random=${
                  Math.random() * 100
                }`}
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="carouselItemDisplayOffer d-block w-100"
                src={`https://picsum.photos/200/300?random=${
                  Math.random() * 100
                }`}
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="carouselItemDisplayOffer d-block w-100"
                src={`https://picsum.photos/200/300?random=${
                  Math.random() * 100
                }`}
                alt="Fourth slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="carouselItemDisplayOffer d-block w-100"
                src={`https://picsum.photos/200/300?random=${
                  Math.random() * 100
                }`}
                alt="Fifth slide"
              />
            </Carousel.Item>
          </Carousel>
          <Button
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
  );
};

export default OfferCarousel;
