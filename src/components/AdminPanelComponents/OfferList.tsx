import React from "react";
import { Container, Table } from "react-bootstrap";

const OfferList = () => {
  return (
    <Container className="py-2 px-2 px-lg-4" fluid>
      <Table striped responsive bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Tytuł</th>
            <th>Powód</th>
            <th>Komentarz</th>
          </tr>
        </thead>
      </Table>
    </Container>
  );
};

export default OfferList;
