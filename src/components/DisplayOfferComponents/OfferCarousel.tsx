import React from "react";
import { Col, Card, Carousel, Button } from "react-bootstrap";

const OfferCarousel = () => {
  return (
    <Col>
      {/* IMAGE BOX */}
      <Card
        className="p-2"
        style={{
          minWidth: "60vw",
          minHeight: "60vh",
          maxWidth: "1200px",
          maxHeight: "60vh",
        }}
      >
        <Card.Body>
          <Carousel variant="dark">
            <Carousel.Item>
              <img
                src={`https://images3.alphacoders.com/954/thumb-1920-954241.jpg`}
                alt=""
                style={{
                  maxWidth: "50vw",
                  maxHeight: "50vh",
                  marginBottom: "60px",
                }}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src={`https://wallpaperbat.com/img/35702-trillectro-aaron-campbell-2560x1440-wallpaper.png`}
                alt=""
                style={{
                  maxWidth: "50vw",
                  maxHeight: "50vh",
                  marginBottom: "60px",
                }}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src={`https://picsum.photos/200/300?random=${
                  Math.random() * 100
                }`}
                alt=""
                style={{
                  maxWidth: "50vw",
                  maxHeight: "50vh",
                  marginBottom: "60px",
                }}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src={`https://picsum.photos/200/300?random=${
                  Math.random() * 100
                }`}
                alt=""
                style={{
                  maxWidth: "50vw",
                  maxHeight: "50vh",
                  marginBottom: "60px",
                }}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src={`https://picsum.photos/200/300?random=${
                  Math.random() * 100
                }`}
                alt=""
                style={{
                  maxWidth: "50vw",
                  maxHeight: "50vh",
                  marginBottom: "60px",
                }}
              />
            </Carousel.Item>
          </Carousel>
        </Card.Body>

      </Card>
    </Col>
  );
};

export default OfferCarousel;
