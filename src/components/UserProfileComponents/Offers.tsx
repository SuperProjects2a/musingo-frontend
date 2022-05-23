import React, { useState, useEffect } from "react";
import { Row, Container } from "react-bootstrap";
import data from "../../data.json";
import Pagination from "../announcement/PaginationSearch";
import OffersPagin from "./Offers/OffersPagin";

import axios from "axios";

interface IOffer {
  link: string;
  title: string;
  promote: boolean;
  date: string;
}
const Offers = () => {
  const [offers, setOffers] = useState<IOffer[]>([] as IOffer[]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(12);

  useEffect(() => {
    const fetchOffers = async () => {
      setLoading(true);
      setOffers(data);
      setLoading(false);
    };

    fetchOffers();
  }, []);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentAnnouncements = offers.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
  };
  return (
    <div className="userProfileDiv px-1 px-sm-4 py-3 py-sm-4 py-md-5">
      {offers.length > 0 ? (
        <>
          <div>
            <Row className="d-flex justify-content-center px-sm-2 px-md-4 px-lg-5 m-0">
              <OffersPagin offers={currentAnnouncements} loading={loading} />
            </Row>
            <Row className="pt-3 m-0">
              <Pagination
                postsPerPage={postsPerPage}
                totalPosts={offers.length}
                paginate={paginate}
                currentPage={currentPage}
              ></Pagination>
            </Row>
          </div>
        </>
      ) : (
        <Container className="py-4">
          <div style={{ textAlign: "center" }}>
            <h4>Nie masz aktywnych ogłoszeń.</h4>
          </div>
        </Container>
      )}
    </div>
  );
};

export default Offers;