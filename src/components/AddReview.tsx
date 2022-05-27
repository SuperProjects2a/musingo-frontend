import React, { useState } from "react";
import { Card, Row, Col, Form, Button, Container } from "react-bootstrap";
import { Rating } from "react-simple-star-rating";
import { useNavigate } from "react-router-dom";

const AddReview = () => {
  const [rating, setRating] = useState(0);
  const [ratingValidation, setRatingValidation] = useState(false);
  const [commentText, setCommentText] = useState("");
  //   const [commentTextLength, setCommentTextLength] = useState(0);
  const [commentTextValidation, setCommentTextValidation] = useState(false);
  const navigate = useNavigate();

  const handleRating = (rate: number) => {
    setRating(rate);
    setRatingValidation(false);
  };
  const handleCommentText = (text: string) => {
    setCommentText(text);
    text.length > 0
      ? setCommentTextValidation(false)
      : setCommentTextValidation(true);
  };
  const validationSchema = () => {
    rating > 0 || setRatingValidation(true);
    commentText.length > 0 || setCommentTextValidation(true);
    // ratingValidation == true || navigate("/");
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
              placeholder="Opisz kontakt ze sprzedającym. Czy opis i zdjęcia produktu są zgodne z rzeczywistością?"
              autoComplete="description"
              onBlur={(e) => handleCommentText(e.target.value)}
              //   value={values.description}
              //   onBlur={handleBlur}
              onChange={(e) => handleCommentText(e.target.value)}
              //   isInvalid={touched.description && !!errors.description}
            />
            <Form.Text>
              Maksymalna długość: <strong>{commentText.length}/300</strong>
            </Form.Text>
            {commentTextValidation == true && (
              <Row className="">
                <Form.Text className="text-danger">
                  <small>To pole jest wymagane.</small>
                </Form.Text>
              </Row>
            )}
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
