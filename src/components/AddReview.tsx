import React, { useState } from "react";
import { Card, Row, Col, Form, Button, Container } from "react-bootstrap";
import { Rating } from "react-simple-star-rating";

const AddReview = () => {
  const [rating, setRating] = useState(0);
  const [ratingValidation, setRatingValidation] = useState(false);
  const handleRating = (rate: number) => {
    setRating(rate);
  };
  const validationSchema = () => {
    rating > 0 || setRatingValidation(true);
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
            <Row>
              <Rating onClick={handleRating} ratingValue={rating} size={30} />
            </Row>
            {ratingValidation == true && (
              <Row className="">
                <Form.Text className="text-danger">
                  <small>Wybierz ocenę dla produktu.</small>
                </Form.Text>
              </Row>
            )}

            <Form.Label className="pt-2">
              Oceń zakupiony produkt oraz sprzedającego
            </Form.Label>
            <Form.Control
              className="formInputs"
              as="textarea"
              rows={4}
              type="text"
              maxLength={300}
              placeholder="Opisz kontakt ze sprzedającym. Czy opis i zdjęcia produktu były zgodny z rzeczywistością?"
              autoComplete="description"
              //   value={values.description}
              //   onBlur={handleBlur}
              //   onChange={handleChange}
              //   isInvalid={touched.description && !!errors.description}
            />
          </Form>
          <Row>
            <Col
              xs={12}
              md={{ span: 4, offset: 8 }}
              lg={{ span: 3, offset: 9 }}
              xl={{ span: 2, offset: 10 }}
              className="d-grid"
            >
              <Button
                className="mt-3"
                variant="dark"
                onClick={() => {
                  validationSchema();
                }}
              >
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
