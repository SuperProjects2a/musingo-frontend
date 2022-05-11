import { FC } from "react";
import { Col, Row, Spinner } from "react-bootstrap";
import OfferCard from "./OfferCard";

interface IPost {
  offers: IOffer[];
  loading: boolean;
}

interface IOffer {
  link: string;
  title: string;
  date: string;
  promote: boolean;
}

const OffersPagin: FC<IPost> = ({ offers, loading }) => {
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
          // xs={6}
          // sm={4}
          md={3}
          lg={3}
          xl={2}
          // xs={6}
          className="p-1"
          // className="px-3 px-sm-1 py-1"
        >
          <OfferCard
            link={offer.link}
            title={offer.title}
            promote={offer.promote}
            date={offer.date}
          />
        </Col>
      ))}
    </Row>
  );
};

export default OffersPagin;
