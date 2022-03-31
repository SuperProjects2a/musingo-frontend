import React from "react";
import { FC } from "react";
import { Link } from "react-router-dom";
import { Container, Form, Col, Row, InputGroup, Image } from "react-bootstrap";
import AnnouncementCard from "./AnnouncementCard";

interface Property {
  category: string;
}

//let category: string;

// const Search: FC<typeof category> = (category) => {
// const Search: FC<Property> = (category) => {
const Search = () => {
  const announcements = [
    {
      link: "/Test",
      title: "Gitara elektryczna, stan rewelacyjny",
      price: 1000,
      city: "Bielsko-Biała",
    },
    { link: "/Test", title: "Flet", price: 100, city: "Warszawa" },
    {
      link: "/Test",
      title: "Nauka gry na fortepianie",
      price: 200,
      city: "Kozy",
    },
    {
      link: "/Test",
      title: "Budowa organów kościelnych",
      price: 1000000,
      city: "Gdańsk",
    },
    {
      link: "/Test",
      title: "Książka do nauki muzyki, 10-12 lat",
      price: 20,
      city: "Lublin",
    },
    { link: "/Test", title: "Ukulele", price: 300, city: "Olsztyn" },
    {
      link: "/Test",
      title: "Perkusja z podpisem zespołu XYZ",
      price: 10000,
      city: "Kraków",
    },
    {
      link: "/Test",
      title: "Kontrabas używany do nauki w szkole",
      price: 2500,
      city: "Wrocław",
    },
    {
      link: "/Test",
      title: "Skrzypce, nieużywane",
      price: 7850,
      city: "Poznań",
    },
    {
      link: "/Test",
      title: "Struny do skrzypiec, błyskawicznie reaguje na dotyk smyczka",
      price: 560,
      city: "Katowice",
    },
  ];
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
                <Form.Control type="number" min="0" placeholder="od" />
                <Form.Control
                  className="mx-2"
                  type="number"
                  min="0"
                  placeholder="od"
                />
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
                <option value="1">Od najnowszych</option>
                <option value="2">Cena: od najtańszych</option>
                <option value="3">Cena: od najdroższych</option>
              </Form.Select>
            </Col>
          </Row>
        </Form>
      </div>
      <hr />
      <Row className="px-2 px-sm-3 px-md-4">
        {announcements.map((announcement, index) => (
          <Col className="px-2 px-sm-1">
            <AnnouncementCard
              linkA={announcement.link}
              title={announcement.title}
              price={announcement.price}
              city={announcement.city}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Search;
