import { Container, Col, Row, Spinner } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import AnnouncementsCarousel from "./announcement/AnnouncementsCarousel";
import Posts from "./announcement/Posts";
import PaginationSearch from "./announcement/PaginationSearch";
import FilterSearch from "./announcement/FilterSearch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faToiletPaperSlash } from "@fortawesome/free-solid-svg-icons";
import { getOffers,getPromotedOffers, getOffersByFiler, getOffersByName, IAnnouncement, IOfferFilter } from "../services/offerService";


const Search = () => {
  const [announcements, setAnnouncements] = useState<IAnnouncement[]>(
    [] as IAnnouncement[]
  );
  const [promotedAnnouncements, setPromotedAnnouncements] = useState<IAnnouncement[]>(
    [] as IAnnouncement[]
  );
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(12);
  const [searchParams, setSearchParams] = useSearchParams();
  const [offerFilter, setOfferFilter] = useState<IOfferFilter>({Sorting: 'Latest', Search: null, PriceFrom: null, PriceTo: null, Category: ""});

  useEffect(() => {
    const fetchAnnouncements = async () => {
      setLoading(true);
      let offers = await getOffers();
      setAnnouncements(offers);
      let promotedOffers = await getPromotedOffers();
      setPromotedAnnouncements(promotedOffers);
      setLoading(false);
      let nameQuery = searchParams.get('Name');
      let categoryQuery = searchParams.get('Category');
      setOfferFilter({Search: nameQuery, Sorting: offerFilter.Sorting, PriceFrom: offerFilter.PriceFrom, PriceTo: offerFilter.PriceTo, Category: ""})
    };

    fetchAnnouncements();
  }, [searchParams]);

  useEffect(() => {
    const fetchAnnouncements = async () => {;
      let nameQuery = searchParams.get('Name');
      let sortingQuery = searchParams.get('Sorting') === null ? 'Latest' : searchParams.get('Sorting');
      let priceFromQuery = searchParams.get('PriceFrom');
      let priceToQuery = searchParams.get('PriceTo');
      let categoryQuery = searchParams.get('Category');
      setOfferFilter({Search: nameQuery, Sorting: sortingQuery, PriceFrom: priceFromQuery, PriceTo: priceToQuery, Category: ""});
      
    };
    fetchAnnouncements();
  }, [navigate])

  useEffect(() => {
    const updateAnnouncements = async () => {
      let nameQuery = searchParams.get('Name');
      let categoryQuery = searchParams.get('Category');
      let filter = {Search: nameQuery, Sorting: offerFilter.Sorting, PriceFrom: offerFilter.PriceFrom, PriceTo: offerFilter.PriceTo, Category: categoryQuery !== "null" && categoryQuery !== undefined && categoryQuery ? categoryQuery: ""};
      let offers = await getOffersByFiler(filter);
      setAnnouncements(offers);
    }
    updateAnnouncements();
    
  }, [offerFilter]);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentAnnouncements = announcements.slice(
    indexOfFirstPost,
    indexOfLastPost
  );

  const onFilterChange = (filter: IOfferFilter) => {
    setOfferFilter(filter);

  }

  // Change page
  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
  };

  return (
    <Container fluid style={{ textAlign: "left" }}>
      <div className="px-sm-1 px-md-2">
        <FilterSearch onFilterChange={(f: IOfferFilter) => {
          onFilterChange(f);
        }} />
      </div>
      {loading == true ? (
        <Col
          xs={{ offset: 5 }}
          lg={{ offset: 6 }}
          className="px-sm-5 px-lg-0 py-5 mb-5"
        >
          <Spinner
            animation="border"
            style={{ height: "50px", width: "50px" }}
          />
        </Col>
      ) : (
        <div className="px-2 px-sm-3 px-md-4 pb-3">
          {announcements.length > 0 && (
            <div className="pt-3">
              <h5 style={{ textAlign: "left" }}>
                <b>Wyr????nione</b>
              </h5>
              <Row className="d-flex justify-content-center px-4 px-sm-0">
                <AnnouncementsCarousel
                  announcements={promotedAnnouncements}
                  loading={loading}
                  center={false}
                />
              </Row>
            </div>
          )}
          <div>
            {announcements.length > 0 ? (
              <>
                <h5 style={{ textAlign: "left" }} className="pt-3">
                  <b>Og??oszenia</b>
                </h5>
                <div>
                  <Row className="d-flex justify-content-center">
                    <Posts
                      announcements={currentAnnouncements}
                      loading={loading}
                    />
                  </Row>
                  <Row className="py-2">
                    <PaginationSearch
                      postsPerPage={postsPerPage}
                      totalPosts={announcements.length}
                      paginate={paginate}
                      currentPage={currentPage}
                    ></PaginationSearch>
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
                  <h5>Nie znale??li??my pasuj??cych przedmiot??w.</h5>
                  <p>Spr??buj wyszuka?? pod inn?? nazw??</p>
                </div>
              </Container>
            )}
          </div>
        </div>
      )}
    </Container>
  );
};

export default Search;
