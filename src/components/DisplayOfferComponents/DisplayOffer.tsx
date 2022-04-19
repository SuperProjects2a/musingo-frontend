import React from "react";
import { Col, Row } from "react-bootstrap";
import OfferCarousel from "./OfferCarousel";
import PersonalInfo from "./PersonalInfo";
import FavoriteBox from "./FavoriteBox";
import OfferInfo from "./OfferInfo";

const DisplayOffer = () => {
  return (
    <div className="offerContainerDisplayOffer">
      <Row className="px-sm-3 px-lg-5">
        <Col xs={{ offset: 12, span: 12, order: 1 }} lg={{ span: 8, order: 1 }}>
          <OfferCarousel />
        </Col>
        <Col xs={{ offset: 12, span: 12, order: 3 }} lg={{ span: 4, order: 2 }}>
          <Col className="pt-2 pt-lg-0">
            <PersonalInfo />
          </Col>
          <Col className="pt-2 pt-lg-4">
            <FavoriteBox />
          </Col>
        </Col>
        <Col xs={{ offset: 12, span: 12, order: 2 }} className="pt-2 pt-lg-4">
          <OfferInfo />
        </Col>
      </Row>
    </div>
  );
};

export default DisplayOffer;
