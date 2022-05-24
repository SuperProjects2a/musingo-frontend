import React from "react";
import { FunctionComponent } from "react";
import { Col, Card, Carousel, Button } from "react-bootstrap";

const OfferCarousel: FunctionComponent<{images: string[] | undefined}> = (props) => {
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
            {props.images?.map(index => {
              return (<Carousel.Item>
                <img
                  src={index}
                  alt=""
                  style={{
                    minWidth: "17vw",
                    minHeight: "30vh",
                    maxWidth: "50vw",
                    maxHeight: "50vh",
                    marginBottom: "60px",
                  }}
                />
              </Carousel.Item>)
              
            })}
          </Carousel>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default OfferCarousel;
