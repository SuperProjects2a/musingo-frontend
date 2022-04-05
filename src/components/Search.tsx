import { FC } from "react";
import {
  Container,
  Form,
  Col,
  Row,
  InputGroup,
  Spinner,
} from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import AnnouncementCard from "./AnnouncementCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faToiletPaperSlash } from "@fortawesome/free-solid-svg-icons";

import React, { useState, useEffect } from "react";
import axios from "axios";
import Posts from "./Posts";
import PaginationSearch from "./PaginationSearch";
import data from "./data.json";

// interface Property {
//   category: string;
// }

interface IAnnouncement {
  link: string;
  title: string;
  price: number;
  city: string;
}

const Search = () => {
  const [announcements, setAnnouncements] = useState<IAnnouncement[]>(
    [] as IAnnouncement[]
  );
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(4);

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

    fetchAnnouncements();
  }, []);

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

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 3,
    arrows: true,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
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
              xs={{ span: 5, order: 3 }}
              sm={{ span: 4, order: 2 }}
              lg={3}
              xl={2}
              className="pt-1 pt-sm-0"
            >
              <Form.Label>Cena</Form.Label>
              <InputGroup>
                <Form.Control type="number" min="0" placeholder="od" />
                <Form.Control
                  className="mx-2"
                  type="number"
                  min="0"
                  placeholder="od"
                />
              </InputGroup>
            </Col>
            <Col
              xs={{ span: 6, order: 2 }}
              sm={{ span: 4, order: 3 }}
              lg={{ span: 3, offset: 3 }}
              xl={{ span: 2, offset: 6 }}
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
              <Row className=" py-1 px-4" fluid>
                <Slider {...settings}>
                  {announcements.map((announcement, index) => (
                    <Col className="px-2 px-sm-1">
                      <AnnouncementCard
                        linkA={announcement.link}
                        title={announcement.title}
                        price={announcement.price}
                        city={announcement.city}
                      />
                    </Col>
                  ))}
                </Slider>
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
                  <Row>
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

export default Search;
