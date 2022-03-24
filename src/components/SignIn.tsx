import React from "react";
import { Container, Form, Col, Button, Row } from "react-bootstrap";

const SignIn = () => {
  return (
    <Container className="d-grid signContainer">
      <Row>
        <Col xs={{ span: 10, offset: 1 }}>
          <Form className="bg-body rounded border border-light p-4 p-sm-3">
            <h1>Zaloguj się</h1>
            <Form.Group>
              <Form.Label className="labelText">Adres email</Form.Label>
              <Form.Control
                type="email"
                size="lg"
                placeholder="Wprowadź adres email"
                autoComplete="email"
                className="position-relative formInputs"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label className="labelText">Hasło</Form.Label>
              <Form.Control
                type="password"
                size="lg"
                placeholder="Wprowadź hasło"
                autoComplete="password"
                className="position-relative formInputs"
              />
            </Form.Group>

            <div className="d-grid mt-4">
              <Button size="lg" variant="dark">
                Zaloguj się
              </Button>
            </div>
            <p className="mt-3 signText">
              Zalogowanie oznacza akceptację <a href="#">Regulaminu</a> serwisu
              musingo.pl w aktualnym brzmieniu.
            </p>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default SignIn;
