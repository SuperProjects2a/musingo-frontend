import {
  Navbar,
  Nav,
  NavDropdown,
  DropdownButton,
  Dropdown,
  Container,
  InputGroup,
  Button,
  Col,
  Form,
  Row,
} from "react-bootstrap";
import { Route, Link, Routes } from "react-router-dom";
import Home from "./Home";
import Test from "./Test";
import Search from "./Search";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const NavbarComp = () => {
  return (
    <>
      <div className="header">
        <Navbar
          collapseOnSelect
          expand="lg"
          bg="dark"
          variant="dark"
          className="px-4"
          sticky="top"
        >
          <Navbar.Brand as={Link} to={"/"} style={{ fontFamily: "Nova Mono" }}>
            musingo
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <NavDropdown title="Kategorie" id="collasible-nav-dropdown">
                <NavDropdown.Item as={Link} to={"/Test"}>
                  Gitary
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to={"/Test"}>
                  Dęte
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to={"/Test"}>
                  Klawiszowe
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to={"/Test"}>
                  Perkusyjne
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to={"/Test"}>
                  Smyczkowe
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to={"/Test"}>
                  Mikrofony
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to={"/Test"}>
                  Słuchawki
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to={"/Test"}>
                  Nuty, książki
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to={"/Test"}>
                  Akcesoria
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to={"/Test"}>
                  Inne
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={Link} to={"/Test"}>
                Wiadomości
              </Nav.Link>
              <Nav.Link as={Link} to={"/Test"}>
                Doładuj konto
              </Nav.Link>
              <Nav.Link as={Link} to={"/Test"}>
                Zaloguj się
              </Nav.Link>
              <Nav.Link as={Link} to={"/Test"}>
                Dodaj ogłoszenie
              </Nav.Link>
              <Nav.Link as={Link} to={"/Test"}>
                Dodaj ogłoszenie
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Container className="py-3" fluid>
          <Row>
            <Col
              className="px-3 px-md-5 px-lg-0"
              lg={{ span: 8, offset: 2 }}
              xl={{ span: 6, offset: 3 }}
            >
              <InputGroup>
                <Form.Control
                  type="text"
                  placeholder="Szukaj przedmiotów"
                  className="navBorder"
                  style={{ width: "45%" }}
                />
                <Form.Select
                  aria-label="Default select example"
                  className="selectColor navBorder"
                >
                  <option>Cała Polska</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
                <Button
                  variant="light"
                  id="button-addon2"
                  className="navBorder selectColor"
                >
                  <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
                </Button>
              </InputGroup>
            </Col>
          </Row>
        </Container>
      </div>

      <div>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Test" element={<Test />}></Route>
          <Route path="/Search" element={<Search />}></Route>
        </Routes>
      </div>
    </>
  );
};

export default NavbarComp;
