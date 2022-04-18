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
        <Col xs={12} lg={8}>
          <OfferCarousel />
        </Col>
        <Col xs={12} lg={4}>
          <Col>
            <PersonalInfo />
          </Col>
          <Col>
            <FavoriteBox />
          </Col>
        </Col>
        <Col xs={12} className="pt-2" >
          <OfferInfo />
        </Col>
      </Row>
    </div>
  );
};

export default DisplayOffer;
