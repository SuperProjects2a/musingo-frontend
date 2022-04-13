import {
  Container,
  Form,
  Col,
  Row,
  InputGroup,
  Spinner,
} from "react-bootstrap";
import React, { useState, useEffect } from "react";

import AnnouncementsCarousel from "./announcement/AnnouncementsCarousel";
import Posts from "./announcement/Posts";
import PaginationSearch from "./announcement/PaginationSearch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faToiletPaperSlash } from "@fortawesome/free-solid-svg-icons";
import data from "./data.json";

import axios from "axios";

interface IAnnouncement {
  link: string;
  title: string;
  price: number;
  city: string;
}

const Search = () => {
  const [minPrice, setMinPrice] = useState<number | undefined>();
  const [maxPrice, setMaxPrice] = useState<number | undefined>();
  const [validated, setValidated] = useState(false);

  const [announcements, setAnnouncements] = useState<IAnnouncement[]>(
    [] as IAnnouncement[]
  );
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(24);

  useEffect(() => {
    // const fetchPosts = async () => {
    //   setLoading(true);
    //   const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
    //   setPosts(res.data);
    //   setLoading(false);
    // };
    const fetchAnnouncements = async () => {
      setLoading(true);
      setAnnouncements(data);
      setLoading(false);
    };

    setValidated(false);
    if (minPrice != undefined && maxPrice != undefined) {
      if (maxPrice < minPrice) {
        setValidated(true);
      }
    }

    fetchAnnouncements();
  }, [minPrice, maxPrice]);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentAnnouncements = announcements.slice(
    indexOfFirstPost,
    indexOfLastPost
  );

  // Change page
  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
  };

  return (
    <Container fluid style={{ textAlign: "left" }}>
      {/* FILTRY */}
      <div className="px-2 px-sm-3 px-md-4">
        <h4>
          <b>Filtry</b>
        </h4>
        <Form>
          <Row>
            <Col
              xs={{ span: 6, order: 1 }}
              sm={{ span: 4, order: 1 }}
              lg={3}
              xl={2}
            >
              <Form.Label>Kategoria</Form.Label>
              <Form.Select
                aria-label="Default select example"
                className="selectColor"
              >
                <option>Wybierz kategorię</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </Col>
            <Col
              xs={{ span: 10, order: 3 }}
              sm={{ span: 4, order: 2 }}
              lg={4}
              xl={3}
              className="pt-1 pt-sm-0"
            >
              <Form.Label>Cena</Form.Label>
              <Col xs={9} sm={12} lg={10}>
                <InputGroup>
                  <Form.Control
                    type="number"
                    min="0"
                    placeholder="od"
                    value={minPrice}
                    onChange={(e) => {
                      setMinPrice(parseInt(e.target.value));
                    }}
                  />
                  <Form.Control
                    className="mx-2"
                    type="number"
                    min="0"
                    placeholder="do"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(parseInt(e.target.value))}
                  />
                </InputGroup>
              </Col>
              {validated == true ? (
                <Row>
                  <Form.Text className="text-danger">
                    <small>Wartość "od" nie może być większa niż "do".</small>
                  </Form.Text>
                </Row>
              ) : (
                <></>
              )}
            </Col>
            <Col
              xs={{ span: 6, order: 2 }}
              sm={{ span: 4, order: 3 }}
              lg={{ span: 3, offset: 2 }}
              xl={{ span: 2, offset: 5 }}
            >
              <Form.Label>Sortowanie</Form.Label>
              <Form.Select
                aria-label="Default select example"
                className="selectColor"
              >
                <option value="1">Od najnowszych</option>
                <option value="2">Cena: od najtańszych</option>
                <option value="3">Cena: od najdroższych</option>
              </Form.Select>
            </Col>
          </Row>
        </Form>
      </div>

      {/* OGŁOSZENIA */}
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
          {announcements.length > 0 ? (
            <div className="py-4">
              <h5 style={{ textAlign: "left" }}>
                <b>Wyróżnione</b>
              </h5>
              <Row className="d-flex justify-content-center">
                <AnnouncementsCarousel
                  announcements={announcements}
                  loading={loading}
                />
              </Row>
            </div>
          ) : (
            <div className="px-2 px-sm-3 px-md-4 pb-3"></div>
          )}
          <div>
            {announcements.length > 0 ? (
              <>
                <h5 style={{ textAlign: "left" }}>
                  <b>Ogłoszenia</b>
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
                  <h5>Nie znaleźliśmy pasujących przedmiotów.</h5>
                  <p>Spróbuj wyszukać pod inną nazwą</p>
                </div>
              </Container>
            )}
          </div>
        </div>
      )}
    </Container>
  );
};

Search.defaultProps = {
  category: "Rahul",
};

export default Search;
