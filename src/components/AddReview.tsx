import React, { useState } from "react";
import {
  Card,
  Row,
  Col,
  Form,
  Button,
  Container,
  FloatingLabel,
} from "react-bootstrap";
import { Rating } from "react-simple-star-rating";

const AddReview = () => {
  const [rating, setRating] = useState(0);
  const handleRating = (rate: number) => {
    setRating(rate);
    console.log(rate);
  };
  return (
    <Container className="py-5">
      <Card className="p-2" style={{ textAlign: "left" }}>
        <Card.Body>
          <Card.Title style={{ fontSize: "25px" }}>
            Gitara elektryczna
          </Card.Title>
          <Form>
            <Row>
              <Form.Label>Twoja ocena</Form.Label>
            </Row>
            <Row className="pb-2">
              <Rating onClick={handleRating} ratingValue={rating} size={30} />
            </Row>

            <Form.Label>Oceń zakupiony produkt oraz sprzedającego</Form.Label>
            <Form.Control
              className="formInputs"
              as="textarea"
              rows={4}
              type="text"
              maxLength={5000}
              placeholder="Opisz kontakt ze sprzedającym. Czy opis i zdjęcia produktu były zgodny z rzeczywistością?"
              autoComplete="description"
              //   value={values.description}
              //   onBlur={handleBlur}
              //   onChange={handleChange}
              //   isInvalid={touched.description && !!errors.description}
            />
          </Form>
          <Row style={{ float: "right" }}>
            <Col xs={12}>
              <Button className="mt-3" variant="dark">
                Dodaj opinię
              </Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default AddReview;
