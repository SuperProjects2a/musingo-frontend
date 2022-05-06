import React, { useState, useEffect } from "react";
import { Row, Col, Card, Button, Container } from "react-bootstrap";
import data from "../../data.json";
import Pagination from "../announcement/PaginationSearch";
import OffersPagin from "./OffersPagin";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faToiletPaperSlash } from "@fortawesome/free-solid-svg-icons";

import axios from "axios";

interface IOffer {
  link: string;
  title: string;
  price: number;
  city: string;
}
const Offers = () => {
  const [offers, setOffers] = useState<IOffer[]>([] as IOffer[]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(24);

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
          {/* <h5 style={{ textAlign: "left" }} className="pt-3">
            Ogłoszenia
          </h5> */}
          <div>
            <Row className="d-flex justify-content-center px-sm-2 px-md-4 px-lg-5">
              <OffersPagin offers={currentAnnouncements} loading={loading} />
            </Row>
            <Row className="py-2">
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
          <div className="py-5 m-sm-4" style={{ textAlign: "center" }}>
            <FontAwesomeIcon
              icon={faToiletPaperSlash}
              style={{ height: "100px" }}
              className="py-3"
            />
            <h5>Nie znaleźliśmy pasujących przedmiotów.</h5>
            <p>Spróbuj wyszukać pod inną nazwą</p>
          </div>
        </Container>
      )}
    </div>
    // <Container className="pt-5 mt-5">
    //   <Card>ddd</Card>
    // </Container>
  );
};

export default Offers;
