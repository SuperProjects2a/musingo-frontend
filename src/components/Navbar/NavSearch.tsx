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
import React, {
  useCallback,
  useState,
  useEffect,
  useLayoutEffect,
} from "react";
import {
  Route,
  Link,
  Routes,
  useNavigate,
  useLocation,
} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import navigationService from "../../services/NavigationService";

const NavSearch = () => {
  const [user, setUser] = useState<IUser | null>(null);

  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");
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

  useEffect(() => {
    const getU = async () => {
      const u = await getUser();
      setUser(u);
    };

    if (
      typeof localStorage.getItem("token") === "string" &&
      localStorage.getItem("token") !== null
    ) {
      getU();
    }
  }, []);

  const onFundAdd = async () => {
    const u = await getUser();
    setUser(u);
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
              {user?.role.includes("Admin") && (
                <Nav.Link
                  as={Link}
                  to={"/AdminPanel"}
                  className="mb-auto mt-auto"
                >
                  Admin panel
                </Nav.Link>
              )}
              {user == null || (
                <Nav.Link as={Link} to={"/Test"} className="mb-auto mt-auto">
                  Wiadomości
                </Nav.Link>
              )}

              {user == null && (
                <Nav.Link
                  as={Link}
                  to={"/SignInUp"}
                  className="mb-auto mt-auto"
                >
                  Zaloguj się
                </Nav.Link>
              )}
              {user == null || (
                <Nav.Link
                  as={Link}
                  to={"/AddOffer"}
                  className="mb-auto mt-auto"
                >
                  Dodaj ogłoszenie
                </Nav.Link>
              )}
              {user == null || (
                <Nav.Link as={Link} to={"/Watch"} className="mb-auto mt-auto">
                  Obserwowane
                </Nav.Link>
              )}
              {user == null || (
                <Nav.Link
                  as={Link}
                  to={"/UserProfile"}
                  className="mb-auto mt-auto"
                >
                  Moje konto
                </Nav.Link>
              )}
              {user == null || (
                <Nav.Link
                  onClick={() => {
                    localStorage.removeItem("token");
                    setUser(null);
                  }}
                  as={Link}
                  to={"/"}
                  className="mb-auto mt-auto"
                >
                  Wyloguj się
                </Nav.Link>
              )}
              {user == null || (
                <div
                  className="text-white mb-auto mt-auto noSelect p-2"
                  style={{ fontWeight: "bold" }}
                >
                  {user.walletBalance} zł
                </div>
              )}
              {user == null || (
                <Nav.Link as={Link} to={"/FundAdd"}>
                  <Button className="btn btn-success">Doładuj konto</Button>
                </Nav.Link>
              )}
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
    </>
    // <Container className="py-3 d-flex justify-content-center" fluid>
    //   <Col
    //     className="px-2 px-sm-3 px-md-5 px-lg-0"
    //     xs={12}
    //     md={11}
    //     lg={8}
    //     xl={7}
    //   >
    //     <InputGroup>
    //       <Form.Control
    //         type="text"
    //         placeholder="Szukaj przedmiotów"
    //         className="navBorder"
    //         style={{ width: "45%" }}
    //         onKeyDown={(e) => {
    //           handleKeyDown(e);
    //         }}
    //         onBlur={(e) => {
    //           handleBlur(e);
    //         }}
    //       />
    //       <Link to="/Search">
    //         <Button
    //           variant="light"
    //           id="button-addon2"
    //           className="navBorder selectColor"
    //           type="submit"
    //         >
    //           <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
    //         </Button>
    //       </Link>
    //     </InputGroup>
    //   </Col>
    // </Container>
  );
};

export default NavSearch;
