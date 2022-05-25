import { FC } from "react";
import { Col, Row, Spinner } from "react-bootstrap";
import { IOffer } from "../../../services/profileService";
import OfferCard from "./OfferCard";

interface IOffers {
  offers: IOffer[];
  loading: boolean;
}



const OffersPagin: FC<IOffers> = ({ offers, loading }) => {
  if (loading) {
    return (
      <Col xs={{ offset: 5 }} lg={{ offset: 6 }} className="px-sm-5 px-lg-0">
        <Spinner animation="border" />
      </Col>
    );
  }

  return (
    <Row>
      {offers.map((offer, index) => (
        <Col
          xs={{ span: 8, offset: 2 }}
          sm={{ span: 4, offset: 0 }}
          md={3}
          lg={3}
          xl={2}
          className="p-1"
        >
          <OfferCard
            offer={offer}
          />
        </Col>
      ))}
    </Row>
  );
};

export default OffersPagin;
