import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import OfferCarousel from "./OfferCarousel";
import PersonalInfo from "./PersonalInfo";
import FavoriteBox from "./FavoriteBox";
import OfferInfo from "./OfferInfo";

const DisplayOffer = () => {
  return (
    <Container className="mb-5 offerContainerDisplayOffer" fluid>
      <Row className="px-sm-3 px-lg-5 ">
        <Col xs={{ offset: 12, span: 12, order: 1 }} lg={{span: 8, order: 1 }}>
          <OfferCarousel />
        </Col>
        <Col xs={{ offset: 12, span: 12, order: 3 }} lg={{span: 4, order: 2 }}>
          <Col className="pt-2 pt-lg-0 pb-lg-2 px-lg-3">
            <PersonalInfo />
          </Col>
          <Col className="pt-2 pt-lg-4 px-lg-3">
            <FavoriteBox />
          </Col>
        </Col>
        <Col xs={{ offset: 12, span: 12, order: 2 }} className="pt-2 pt-lg-4">
          <OfferInfo />
        </Col>
      </Row>
    </Container>
  );
};

export default DisplayOffer;
