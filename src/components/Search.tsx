import React from "react";
import { FC } from "react";
import { Container, Form, Col, Row } from "react-bootstrap";

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
            <Col xs={{ order: 1 }} sm={{ span: 4, order: 1 }} lg={3} xl={2}>
              <Form.Label>Kategoria</Form.Label>
            </Col>
            <Col
              xs={{ span: 12, order: 3 }}
              sm={{ span: 8, order: 2 }}
              className="pt-1"
            >
              <Form.Label>Cena</Form.Label>
            </Col>

            <Col sm={{ span: 12, order: 3 }}></Col>

            <Col
              xs={{ span: 10, order: 2 }}
              sm={{ span: 4, order: 4 }}
              lg={3}
              xl={2}
            >
              <Form.Select aria-label="Default select example">
                <option>Wybierz kategorię</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </Col>
            <Col xs={{ span: 3, order: 4 }} sm={{ span: 2, order: 5 }} lg={1}>
              <Form.Control type="number" placeholder="od" />
            </Col>
            <Col xs={{ span: 3, order: 5 }} sm={{ span: 2, order: 6 }} lg={1}>
              <Form.Control type="number" placeholder="do" />
            </Col>
          </Row>
        </Form>
      </div>
      <hr />
      <div className="px-2 px-sm-3 px-md-4">ifiuwg</div>
    </Container>
  );
};

export default Search;
