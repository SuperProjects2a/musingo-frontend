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
import AnnouncementsCarousel from "./AnnouncementsCarousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faToiletPaperSlash } from "@fortawesome/free-solid-svg-icons";

import React, { useState, useEffect } from "react";
import axios from "axios";
import Posts from "./Posts";
import PaginationSearch from "./PaginationSearch";
import data from "./data.json";
import { getValue } from "@testing-library/user-event/dist/utils";

// interface Property {
//   category: string;
// }

interface IAnnouncement {
  link: string;
  title: string;
  price: number;
  city: string;
}

const announcementsArray = [
  {
    link: "/Test",
    title: "Gitara elektryczna, stan rewelacyjny",
    price: 1000,
    city: "Bielsko-Biała",
  },
  { link: "/Test", title: "Flet", price: 100, city: "Warszawa" },
  {
    link: "/Test",
    title: "Nauka gry na fortepianie",
    price: 200,
    city: "Kozy",
  },
  {
    link: "/Test",
    title: "Budowa organów kościelnych",
    price: 1000000,
    city: "Gdańsk",
  },
  {
    link: "/Test",
    title: "Książka do nauki muzyki, 10-12 lat",
    price: 20,
    city: "Lublin",
  },
  { link: "/Test", title: "Ukulele", price: 300, city: "Olsztyn" },
  {
    link: "/Test",
    title: "Perkusja z podpisem zespołu XYZ",
    price: 10000,
    city: "Kraków",
  },
  {
    link: "/Test",
    title: "Kontrabas używany do nauki w szkole",
    price: 2500,
    city: "Wrocław",
  },
  { link: "/Test", title: "Skrzypce, nieużywane", price: 7850, city: "Poznań" },
  {
    link: "/Test",
    title: "Struny do skrzypiec, błyskawicznie reaguje na dotyk smyczka",
    price: 560,
    city: "Katowice",
  },
];

const Search = () => {
  //   const state = {
  //     value: ''
  // }

  // const onChange =( e :any) => {
  //     //replace non-digits with blank
  //     const value = e.target.value.replace(/[^\d]/,'');

  //     if(parseInt(value) !== undefined) {
  //         this.setState({ value });
  //     }
  // }

  const [minPrice, setMinPrice] = useState<number | undefined>();
  const [maxPrice, setMaxPrice] = useState<number | undefined>();

  // const onChange = (e: any) => {
  //   // const value = e.target.value.replace(/[^\d]/, "");
  //   // const value = e.target.value.replace(",", "");
  //   const value = e.target.value;

  //   if (+value >= 0) {
  //     setPrice(value);
  //   }
  // };

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
                {/* <Form.Control type="number" min="0" placeholder="od" /> */}
                <Form.Control
                  type="number"
                  min="0"
                  placeholder="od"
                  value={minPrice}
                  onChange={(e) => setMinPrice(parseInt(e.target.value))}
                />
                <Form.Control
                  id="priceControl"
                  className="mx-2"
                  type="number"
                  min="0"
                  placeholder="od"
                  // aria-valuemin={0}
                  value={maxPrice}
                  // onChange={(e) => setPrice(parseInt(e.target.value))}
                  onChange={(e) => setMaxPrice(parseInt(e.target.value))}
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

export default Search;
