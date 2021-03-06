import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { Col, Row, Container } from "react-bootstrap";
import OfferCarousel from "./OfferCarousel";
import PersonalInfo from "./PersonalInfo";
import FavoriteBox from "./FavoriteBox";
import OfferInfo from "./OfferInfo";
import AnnouncementsCarousel from "../announcement/AnnouncementsCarousel";
import {
  getOffers,
  getOffer,
  IAnnouncement,
  getPromotedOffers,
  getUserOtherOffers,
} from "../../services/offerService";

const DisplayOffer = () => {
  const [announcements, setAnnouncements] = useState<IAnnouncement[]>(
    [] as IAnnouncement[]
  );
  const [promotedAnnouncements, setPromotedAnnouncements] = useState<
    IAnnouncement[]
  >([] as IAnnouncement[]);
  const [loading, setLoading] = useState(true);
  const [offer, setOffer] = useState<IAnnouncement | undefined>(undefined);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAnnouncements = async () => {
      setLoading(true);
      let idNumber = Number(id);
      let receivedOffer = await getOffer(idNumber);
      setOffer(receivedOffer);
      let offers = await getUserOtherOffers(
        receivedOffer?.owner?.email,
        idNumber
      );
      let promotedOffers = await getPromotedOffers();
      setPromotedAnnouncements(promotedOffers);
      setAnnouncements(offers);
      setLoading(false);
    };

    fetchAnnouncements();
  }, [navigate]);

  return (
    <>
      {offer === undefined ? (
        <></>
      ) : (
        <Container className="mb-5 offerContainerDisplayOffer" fluid>
          <Row className="px-sm-3 px-lg-4">
            <Col
              xs={{ offset: 12, span: 12, order: 1 }}
              lg={{ span: 8, order: 1 }}
              className="px-lg-4 "
            >
              <OfferCarousel images={offer?.imageUrls} />
            </Col>
            <Col
              xs={{ offset: 12, span: 12, order: 3 }}
              lg={{ span: 4, order: 2 }}
            >
              <Col className="pt-2 pt-lg-0  px-lg-3 px-xxl-0">
                <PersonalInfo user={offer?.owner} city={offer?.city} />
              </Col>
              <Col className="pt-2 pt-lg-4 px-lg-3 px-xxl-0">
                <FavoriteBox
                  offerId={offer?.id ?? -1}
                  isWatched={offer.isWatched}
                />
              </Col>
            </Col>
            <Col
              xs={{ offset: 12, span: 12, order: 2 }}
              className="pt-2 pt-lg-4 px-lg-4"
            >
              <OfferInfo offer={offer} />
            </Col>
          </Row>
          <Row className="pt-3 px-4">
            {announcements.length > 0 && (
              <div>
                <h3 className="pb-2">Inne przedmioty sprzedaj??cego</h3>
                <Row className="d-flex justify-content-center px-4 px-sm-0">
                  <AnnouncementsCarousel
                    announcements={announcements}
                    loading={loading}
                    center={true}
                  />
                </Row>
              </div>
            )}
          </Row>
          <Row className="pt-3 px-4">
            {announcements.length > 0 && (
              <div>
                <h3 className="pb-2">Wyr????nione</h3>
                <Row className="d-flex justify-content-center px-4 px-sm-0">
                  <AnnouncementsCarousel
                    announcements={promotedAnnouncements}
                    loading={loading}
                    center={true}
                  />
                </Row>
              </div>
            )}
          </Row>
        </Container>
      )}
    </>
  );
};

export default DisplayOffer;
