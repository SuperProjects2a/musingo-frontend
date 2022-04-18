import React from "react";
import { Col, Row, Card, Carousel, Button, Image } from "react-bootstrap";
import OfferCarousel from "./OfferCarousel";
import PersonalInfo from "./PersonalInfo";
import FavoriteBox from "./FavoriteBox";
import OfferInfo from "./OfferInfo";

const DisplayOffer = () => {
  return (
    <div className="offerContainerDisplayOffer">
      <Row className="px-sm-3 px-lg-5">
        <Col xs={{ span: 12, offset: 12, order: 1 }} lg={{ span: 8, order: 1 }}>
          <OfferCarousel />
        </Col>
          <Col  xs={{ span: 12, offset: 12, order: 4 }} lg={{ span: 4, order: 2 }}>
            <PersonalInfo />
          </Col >
          <Col xs={{ span: 12, offset: 12, order: 2 }} lg={{ span: 4, offset: 8, order: 3 }}>
            <FavoriteBox />
          </Col>
        <Col  xs={{ span: 12, offset: 12, order: 3 }} className="pt-2" >
          <OfferInfo />
        </Col>
      </Row>
    </div>
  );
};

export default DisplayOffer;
