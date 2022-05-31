import React, { useState, useEffect } from "react";
import {
  Card,
  Row,
  Col,
  Form,
  Button,
  Container,
  Image,
} from "react-bootstrap";
import { Rating } from "react-simple-star-rating";
import { useNavigate, useParams } from "react-router-dom";
import { getOffer, IAnnouncement } from "../services/offerService";
import { postComent } from "../services/commentService";
import { getTransaction } from "../services/transactionService";

const AddReview = () => {
  const [rating, setRating] = useState(0);
  const [ratingIsValidation, setRatingValidation] = useState(false);
  const [commentText, setCommentText] = useState("");

  const navigate = useNavigate();
  const [offer, setOffer] = useState<IAnnouncement | undefined>(undefined);
  const { id } = useParams();

  const handleRating = (rate: number) => {
    setRating(rate);
    setRatingValidation(false);
  };

  useEffect(() => {
    const fetchAnnouncements = async () => {
      let idNumber = Number(id);
      let transaction = await getTransaction({ transactionId: idNumber });
      setOffer(transaction.offer as IAnnouncement);
    };

    fetchAnnouncements();
  }, [navigate]);

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event: any) => {
    const form = event.currentTarget;
    if (rating === 0) setRatingValidation(true);
    if (form.checkValidity() === false || rating === 0) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      event.preventDefault();
      postComent({
        transactionId: Number(id),
        rating: rating / 20,
        commentText: commentText,
      }).then(() => {
        navigate("/UserProfile/Fundings");
      });
    }

    setValidated(true);
  };

  return (
    <Container className="py-5">
      <Card className="p-2" style={{ textAlign: "left" }}>
        <Card.Body>
          <Row>
            {offer?.imageUrls[0] === null || (
              <Col md={3} lg={2} className="d-none d-md-block">
                <Image
                  src={offer?.imageUrls[0]}
                  style={{ maxWidth: "95%" }}
                ></Image>
              </Col>
            )}
            <Col>
              <Row>
                {offer?.imageUrls[0] === null || (
                  <Col xs={4} className="d-block d-md-none">
                    <Image
                      src={offer?.imageUrls[0]}
                      style={{
                        maxWidth: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    ></Image>
                  </Col>
                )}
                <Col>
                  <Card.Title style={{ fontSize: "25px" }}>
                    {offer?.title}
                  </Card.Title>
                  <Card.Subtitle className="py-1">
                    Sprzedający(a): {offer?.owner.name} {offer?.owner.surname}
                  </Card.Subtitle>
                </Col>
              </Row>
              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Row className="pt-4">
                  <Form.Label>Twoja ocena:</Form.Label>
                </Row>
                <Row>
                  <Form.Group>
                    <Rating
                      onClick={handleRating}
                      ratingValue={rating}
                      size={30}
                      allowHalfIcon={false}
                      showTooltip={true}
                      tooltipArray={[
                        "beznadzieny",
                        "słaby",
                        "przeciętny",
                        "ok",
                        "super",
                      ]}
                      tooltipDefaultText={""}
                      tooltipStyle={{
                        backgroundColor: "white",
                        color: "gray",
                        fontSize: "13px",
                        marginLeft: "-6px",
                      }}
                    />
                    {ratingIsValidation == true && (
                      <Row className="">
                        <Form.Text className="text-danger">
                          Wybierz ocenę od 1 do 5.
                        </Form.Text>
                      </Row>
                    )}
                  </Form.Group>
                </Row>
                <Form.Group>
                  <Form.Label className="pt-3">
                    Oceń zakupiony produkt oraz sprzedającego:
                  </Form.Label>
                  <Form.Control
                    // className="formInputs"
                    as="textarea"
                    rows={4}
                    type="text"
                    maxLength={300}
                    placeholder="Opisz kontakt ze sprzedającym. Czy opis i zdjęcia produktu są zgodne z rzeczywistością?"
                    onChange={(e) => setCommentText(e.target.value)}
                    required
                    className="mb-5"
                  />
                  <Form.Text
                    className="d-flex justify-content-end"
                    style={{ marginTop: "-45px" }}
                  >
                    {commentText.length}/300
                  </Form.Text>
                  <Form.Control.Feedback
                    type="invalid"
                    style={{ marginTop: "-21px" }}
                  >
                    To pole jest wymagane.
                  </Form.Control.Feedback>
                </Form.Group>

                <Row className="mt-3">
                  <Col
                    xs={12}
                    md={{ span: 4, offset: 8 }}
                    lg={{ span: 3, offset: 9 }}
                    xl={{ span: 2, offset: 10 }}
                    className="d-grid"
                  >
                    <Button className="mt-2" variant="dark" type="submit">
                      Dodaj opinię
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default AddReview;
