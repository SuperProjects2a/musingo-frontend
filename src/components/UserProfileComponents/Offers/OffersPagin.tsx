import { FC } from "react";
import { Col, Row, Spinner } from "react-bootstrap";
import { IAnnouncement } from "../../../services/offerService";
import OfferCard from "./OfferCard";

interface IOffers {
  offers: IAnnouncement[];
  loading: boolean;
  setOffers:any;
  offs:any;
}



const OffersPagin: FC<IOffers> = ({ offers, loading,setOffers,offs }) => {
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
            setOffers={setOffers}
            offers={offs}
          />
        </Col>
      ))}
    </Row>
  );
};

export default OffersPagin;
