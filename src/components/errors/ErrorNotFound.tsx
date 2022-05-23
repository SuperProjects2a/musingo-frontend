import React from "react";
import { Container, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPersonDigging } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const ErrorNotFound = () => {
  const navigate = useNavigate();
  return (
    <Container className="py-5 my-4" fluid>
      <FontAwesomeIcon
        icon={faPersonDigging}
        style={{ height: "125px" }}
        className="pb-2"
      />
      <h5>Nie możemy znaleźć takiej oferty</h5>
      <Button variant="dark" onClick={() => navigate("/")} className="my-1">
        Wróć na stronę główną
      </Button>
    </Container>
  );
};

export default ErrorNotFound;
