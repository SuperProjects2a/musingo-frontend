import React, { useState, useEffect } from "react";
import { Card, Row, Col, Form, Button, Container } from "react-bootstrap";
import { Rating } from "react-simple-star-rating";
import { useNavigate, useParams } from "react-router-dom";
import { getOffer, IAnnouncement } from "../services/offerService";

const AddReview = () => {
  const [rating, setRating] = useState(0);
  const [ratingValidation, setRatingValidation] = useState(false);
  const [commentText, setCommentText] = useState("");
  const [commentTextValidation, setCommentTextValidation] = useState(false);

  const navigate = useNavigate();
  const [offer, setOffer] = useState<IAnnouncement | undefined>(undefined);
  const { id } = useParams();

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
    if (rating > 0 && commentText.length > 0) {
      window.location.href = "/UserProfile/Fundings";
    }
  };

  useEffect(() => {
    const fetchAnnouncements = async () => {
      let idNumber = Number(id);
      let receivedOffer = await getOffer(idNumber);
      setOffer(receivedOffer);
    };

    fetchAnnouncements();
  }, [navigate]);

  return (
    <Container className="py-5">
      <Card className="p-2" style={{ textAlign: "left" }}>
        <Card.Body>
          <Card.Title style={{ fontSize: "25px" }}>
            {offer?.title} - {offer?.owner.name} {offer?.owner.surname}
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
              onChange={(e) => handleCommentText(e.target.value)}
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
