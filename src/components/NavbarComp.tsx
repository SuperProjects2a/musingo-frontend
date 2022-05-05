import {
  Navbar,
  Nav,
  NavDropdown,
  Container,
  InputGroup,
  Button,
  Col,
  Form,
} from "react-bootstrap";
import React, { useCallback, useState, useLayoutEffect } from "react";
import {
  Route,
  Link,
  Routes,
  useNavigate,
  useLocation,
} from "react-router-dom";
import Home from "./Home";
import Test from "./Test";
import Search from "./Search";
import SignInUp from "./SignInUp";
import AddOffer from "./AddOfferComponents/AddOffer";
import DisplayOffer from "./DisplayOfferComponents/DisplayOffer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const NavbarComp = () => {
  const location = useLocation();
  // Scroll to top if path changes
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();
  const handleOnClickEnter = useCallback(
    () => navigate("/Search", { replace: true }),
    [navigate]
  );
  const handleKeyDown = (e: any) => {
    if (e.key === "Enter") {
      setSearchValue(e.target.value);
      handleOnClickEnter();
    }
  };
  const handleBlur = (e: any) => {
    setSearchValue(e.target.value);
  };

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
                <NavDropdown.Item as={Link} to={"/Search"}>
                  Gitary
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to={"/Search"}>
                  Dęte
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to={"/Search"}>
                  Klawiszowe
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to={"/Search"}>
                  Perkusyjne
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to={"/Search"}>
                  Smyczkowe
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to={"/Search"}>
                  Mikrofony
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to={"/Search"}>
                  Słuchawki
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to={"/Search"}>
                  Nuty, książki
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to={"/Search"}>
                  Akcesoria
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to={"/Search"}>
                  Inne
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={Link} to={"/Test"}>
                Wiadomości
              </Nav.Link>
              <Nav.Link as={Link} to={"/Test"}>
                Doładuj konto
              </Nav.Link>
              <Nav.Link as={Link} to={"/SignInUp"}>
                Zaloguj się
              </Nav.Link>
              <Nav.Link as={Link} to={"/AddOffer"}>
                Dodaj ogłoszenie
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Container className="py-3 d-flex justify-content-center" fluid>
          <Col
            className="px-2 px-sm-3 px-md-5 px-lg-0"
            xs={12}
            md={11}
            lg={8}
            xl={7}
          >
            <InputGroup>
              <Form.Control
                type="text"
                placeholder="Szukaj przedmiotów"
                className="navBorder"
                style={{ width: "45%" }}
                onKeyDown={(e) => {
                  handleKeyDown(e);
                }}
                onBlur={(e) => {
                  handleBlur(e);
                }}
              />
              <Link to="/Search">
                <Button
                  variant="light"
                  id="button-addon2"
                  className="navBorder selectColor"
                  type="submit"
                >
                  <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
                </Button>
              </Link>
            </InputGroup>
          </Col>
        </Container>
      </div>

      <div>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Test" element={<Test />}></Route>
          <Route path="/Search" element={<Search />}></Route>
          <Route path="/SignInUp" element={<SignInUp />}></Route>
          <Route path="/AddOffer" element={<AddOffer />}></Route>
          <Route path="/DisplayOffer" element={<DisplayOffer />}></Route>
        </Routes>
      </div>
    </>
  );
};

export default NavbarComp;
