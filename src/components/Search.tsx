import React from "react";
import { FC } from "react";
import { Container, Form, Col, Row, InputGroup } from "react-bootstrap";

interface Property {
  category: string;
}

//let category: string;

// const Search: FC<typeof category> = (category) => {
// const Search: FC<Property> = (category) => {
const Search = () => {
  return (
    <Container fluid>
      <div className="px-2 px-sm-3 px-md-4" style={{ textAlign: "left" }}>
        <h4>
          <b>Filtry</b>
        </h4>
        <Form>
          <Row>
            <Col
              xs={{ span: 6, order: 1 }}
              sm={{ span: 4, order: 1 }}
              lg={3}
              xl={2}
            >
              <Form.Label>Kategoria</Form.Label>
              <Form.Select
                aria-label="Default select example"
                className="selectColor"
              >
                <option>Wybierz kategorię</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </Col>
            <Col
              xs={{ span: 5, order: 3 }}
              sm={{ span: 4, order: 2 }}
              lg={3}
              xl={2}
              className="pt-1 pt-sm-0"
            >
              <Form.Label>Cena</Form.Label>
              <InputGroup>
                <Form.Control type="number" placeholder="od" />
                <Form.Control className="mx-2" type="number" placeholder="od" />
              </InputGroup>
            </Col>
            <Col
              xs={{ span: 6, order: 2 }}
              sm={{ span: 4, order: 3 }}
              lg={{ span: 3, offset: 3 }}
              xl={{ span: 2, offset: 6 }}
            >
              <Form.Label>Sortowanie</Form.Label>
              <Form.Select
                aria-label="Default select example"
                className="selectColor"
              >
                <option>S</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </Col>
          </Row>
        </Form>
      </div>
      <hr />
      <div className="px-2 px-sm-3 px-md-4">aaa</div>
    </Container>
  );
};

export default Search;
