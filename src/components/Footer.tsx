import { Link } from "react-router-dom";
import { Col, Row, Container } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="pb-2 mb-2">
      <hr style={{ marginTop: "0px" }} />
      <Container className="py-2" fluid>
        <Row xs="auto" className="px-3">
          <Col>
            <Link to="/Test" className="link">
              Regulamin
            </Link>
          </Col>
          <Col>
            <Link to="/Test" className="link">
              Wyróżnione ogłoszenia
            </Link>
          </Col>
          <Col>
            <Link to="/Test" className="link">
              Jak działa musingo?
            </Link>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
