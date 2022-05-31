import { Container, InputGroup, Button, Col, Form } from "react-bootstrap";
import React, { useCallback, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import NavbarComp from "./NavbarComp";

const NavSearch = () => {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
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

  const submitQuery = (queryString: string) => {
    navigate({pathname:'/Search', search:'?Name='+queryString});
  }

  return (
    <>
      <div className="header">
        <NavbarComp />
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
              <Button
                  variant="light"
                  id="button-addon2"
                  className="navBorder selectColor"
                  type="submit"
                  onClick={() => submitQuery(searchParams.get('Category') === null ? searchValue :`${searchValue}&Category=${searchParams.get('Category')}`)}
                >
                  <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
                </Button>
            </InputGroup>
          </Col>
        </Container>
      </div>
    </>
  );
};

export default NavSearch;
