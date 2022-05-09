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
import DisplayOffer from "./DisplayOfferComponents/DisplayOffer";
import EditOffer from "./EditOfferComponents/EditOffer";
import AddOffer from "./AddOfferComponents/AddOffer";
import { FundAdd } from "./funds/FundAdd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import UserProfile from "./UserProfile";
import FundSuccess from "./funds/FundSuccess";
import FundFailure from "./funds/FundFailure";

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
          <Navbar.Brand
            as={Link}
            to={"/"}
            style={{ fontFamily: "Nova Mono", fontSize: 28 }}
          >
            musingo
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <NavDropdown
                title="Kategorie"
                id="collasible-nav-dropdown"
                className="mb-auto mt-auto"
              >
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
              <Nav.Link as={Link} to={"/Test"} className="mb-auto mt-auto">
                Wiadomości
              </Nav.Link>
              <Nav.Link as={Link} to={"/Test"} className="mb-auto mt-auto">
                Obserwowane
              </Nav.Link>
              <Nav.Link as={Link} to={"/SignInUp"} className="mb-auto mt-auto">
                Zaloguj się
              </Nav.Link>
              <Nav.Link as={Link} to={"/AddOffer"} className="mb-auto mt-auto">
                Dodaj ogłoszenie
              </Nav.Link>
              <Nav.Link
                as={Link}
                to={"/UserProfile"}
                className="mb-auto mt-auto"
              >
                Moje konto
              </Nav.Link>
              <Nav.Link
                as={Link}
                to={"/"}
                className="text-white mb-auto mt-auto"
              >
                <div style={{ fontWeight: "bold" }}>100.45zł</div>
              </Nav.Link>
              <Nav.Link as={Link} to={"/FundAdd"}>
                <Button className="btn btn-success">Doładuj konto</Button>
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
          <Route path="/UserProfile" element={<UserProfile />}></Route>
          <Route path="/AddOffer" element={<AddOffer />}></Route>
          <Route path="/DisplayOffer" element={<DisplayOffer />}></Route>
          <Route path="/EditOffer" element={<EditOffer />}></Route>
          <Route path="/FundAdd" element={<FundAdd></FundAdd>}></Route>
          <Route path="/FundSuccess" element={<FundSuccess />}></Route>
          <Route path="/FundFailure" element={<FundFailure />}></Route>
        </Routes>
      </div>
    </>
  );
};

export default NavbarComp;
