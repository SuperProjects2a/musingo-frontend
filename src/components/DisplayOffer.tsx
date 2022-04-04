import React from "react";
import {
  InputGroup,
  Container,
  Form,
  Col,
  Row,
  Card,
  Button,
} from "react-bootstrap";
import { Formik } from "formik";

const DisplayOffer = () => {
  return (
    <div>
      {/* USER INFO */}
      <Container className="justify-content-right">
        <Card
          style={{ width: "18rem" }}
          className="rounded border border-light mx-sm-1 mx-md-3 mx-lg-5 mt-sm-3 mb-sm-3"
        >
          <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
          <Card.Body>
            <Card.Title>Name/Surname placeholder</Card.Title>
            <Row>
              <Button
                className="my-2 my-sm-0"
                variant="outline-secondary light"
              >
                <strong>Zadzwoń</strong>
              </Button>
              <Button
                className="my-2 my-sm-0"
                variant="outline-secondary light"
              >
                <strong>Zapytaj o przedmiot</strong>
              </Button>
            </Row>
          </Card.Body>
        </Card>

        {/* BUY - FAV */}
        <Card
          className="rounded border border-light mx-sm-1 mx-md-3 mx-lg-5 mt-sm-3 mb-sm-3"
          style={{ width: "18rem" }}
        >
          <Card.Body>
            <Row>
              <Button
                className="my-2 my-sm-0"
                variant="outline-secondary light"
              >
                <strong>Dodaj do ulubionych</strong>
              </Button>
              <Button className="my-2 my-sm-0" variant="dark">
                <strong>Kup teraz</strong>
              </Button>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default DisplayOffer;
