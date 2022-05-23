import React from "react";
import { Container, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceSadTear } from "@fortawesome/free-regular-svg-icons";
import { BrowserRouter as Router } from "react-router-dom";

const Error404 = () => {
  return (
    <Container className="py-5 my-4" fluid>
      <FontAwesomeIcon
        icon={faFaceSadTear}
        style={{ height: "125px" }}
        className="pb-2"
      />
      <h5>Strona, której szukasz, nie istnieje (błąd 404)</h5>
      <p> Sprawdź wpisany adres strony, lub</p>
      {/* <Button variant="dark" onClick={() => this?.props.history.push('/')}>Wróć na stronę główną</Button> */}
      {/* <Button component={Link} variant="dark" >Wróć na stronę główną</Button> */}
    </Container>
  );
};

export default Error404;
