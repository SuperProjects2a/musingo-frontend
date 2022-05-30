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
import { startChat } from "../services/offerInteractionService";

const AskForItem = () => {
  const [messageText, setMessageText] = useState("");

  const navigate = useNavigate();
  const [offer, setOffer] = useState<IAnnouncement | undefined>(undefined);
  const { id } = useParams();

  useEffect(() => {
    const fetchAnnouncements = async () => {
      let idNumber = Number(id);
      let receivedOffer = await getOffer(idNumber);
      setOffer(receivedOffer);
    };

    fetchAnnouncements();
  }, [navigate]);

  const [validated, setValidated] = useState(false);

  const handleSubmit = async (event: any) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      event.preventDefault();
      startChat(offer?.id!,messageText).then((res)=>{
        console.log(res)
        navigate("/ChatWindow/" + res?.id);
      })
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
                <Form.Group>
                  <Form.Label className="pt-3">
                    Wiadomość
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    type="text"
                    maxLength={200}
                    placeholder="O co chcesz zapytać"
                    onChange={(e) => setMessageText(e.target.value)}
                    required
                    className="mb-5"
                  />
                  <Form.Text
                    className="d-flex justify-content-end"
                    style={{ marginTop: "-45px" }}
                  >
                    {messageText.length}/200
                  </Form.Text>
                  <Form.Control.Feedback
                    type="invalid"
                    style={{ marginTop: "-21px" }}
                  >
                    Wiadomość nie może być pusta.
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
                      Rozpocznij konwersacje
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

export default AskForItem;
