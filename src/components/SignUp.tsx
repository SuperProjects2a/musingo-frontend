import React from "react";
import { Container, Form, Col, Button, Row } from "react-bootstrap";

const SignUp = () => {
  return (
    <Container className="d-grid signContainer">
      <Row>
        <Col xs={{ span: 10, offset: 1 }}>
          <Form className="bg-body rounded border border-light p-4 p-sm-3">
            <h1>Zarejestruj się</h1>
            <Form.Group>
              <Form.Label className="labelText">Imię</Form.Label>
              <Form.Control
                type="text"
                size="lg"
                placeholder="Wprowadź imię"
                autoComplete="name"
                className="formInputs"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label className="labelText">Nazwisko</Form.Label>
              <Form.Control
                type="text"
                size="lg"
                placeholder="Wprowadź nazwisko"
                autoComplete="surname"
                className="formInputs"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label className="labelText">Adres email</Form.Label>
              <Form.Control
                type="email"
                size="lg"
                placeholder="Wprowadź adres email"
                autoComplete="email"
                className="formInputs"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label className="labelText">Hasło</Form.Label>
              <Form.Control
                type="password"
                size="lg"
                placeholder="Wprowadź hasło"
                autoComplete="password"
                className="formInputs"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label className="labelText">Powtórz hasło</Form.Label>
              <Form.Control
                type="password"
                size="lg"
                placeholder="Wprowadź ponownie hasło"
                autoComplete="password"
                className="formInputs"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label className="labelText">Numer telefonu</Form.Label>
              <Form.Control
                type="tel"
                size="lg"
                placeholder="Wprowadź numer telefonu"
                autoComplete="phoneNumber"
                className="formInputs"
              />
            </Form.Group>
            <Form.Group>
              <Form.Check
                type="checkbox"
                label="Akceptuje Regulamin"
                className="labelText mt-2"
              />
            </Form.Group>

            <div className="d-grid mt-5">
              <Button variant="dark" size="lg">
                Zarejestruj się
              </Button>
            </div>
            <p>
              Masz już konto? <a href="#">Zaloguj się</a>
            </p>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default SignUp;
