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

const NavSearch = () => {
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
  return (
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
  );
};

export default NavSearch;
