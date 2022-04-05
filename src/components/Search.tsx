import { FC } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Form,
  Col,
  Row,
  InputGroup,
  Image,
  Card,
  Pagination,
} from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import AnnouncementCard from "./AnnouncementCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'
import { faBoxArchive } from "@fortawesome/free-solid-svg-icons";
import { faFaceFrown } from "@fortawesome/free-solid-svg-icons";
import { faLinkSlash } from "@fortawesome/free-solid-svg-icons";
import { faFileCircleQuestion } from "@fortawesome/free-solid-svg-icons";
import { faHeartCrack } from "@fortawesome/free-solid-svg-icons";
import { faToiletPaperSlash } from "@fortawesome/free-solid-svg-icons";

import React, { useState, useEffect } from "react";
import axios from "axios";
import Posts from "./Posts";
import Pag from "./Pagination";

// import FontAwesome5Pro from 'react-native-vector-icons/FontAwesome5Pro';

// interface Property {
//   category: string;
// }

//let category: string;

// const Search: FC<typeof category> = (category) => {
// const Search: FC<Property> = (category) => {
const Search = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setPosts(res.data);
      setLoading(false);
    };

    fetchPosts();
  }, []);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

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

  const announcements = [
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
    {
      link: "/Test",
      title: "Skrzypce, nieużywane",
      price: 7850,
      city: "Poznań",
    },
    {
      link: "/Test",
      title: "Struny do skrzypiec, błyskawicznie reaguje na dotyk smyczka",
      price: 560,
      city: "Katowice",
    },
  ];

  return (
    <Container fluid style={{ textAlign: "left" }}>
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
      <div className="px-2 px-sm-3 px-md-4 pb-3">
        {announcements.length > 20 ? (
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
                  {announcements.map((announcement, index) => (
                    <Col
                      xs={{ span: 6, offset: 0 }}
                      sm={{ span: 4, offset: 0 }}
                      md={3}
                      lg={3}
                      xl={2}
                      className="p-1 p-xl-2"
                    >
                      <AnnouncementCard
                        linkA={announcement.link}
                        title={announcement.title}
                        price={announcement.price}
                        city={announcement.city}
                      />
                    </Col>
                  ))}
                  {/* <Col xs={3}>
                    <Image
                      src={`https://picsum.photos/200/300?random=${
                        Math.random() * 100
                      }`}
                      style={{
                        // height: " calc(14vh + 2vw)",
                        // minHeight: "150px",
                        // maxHeight: "200px",
                        width: "100%",
                        // width: "100%",
                        height: "200px",
                        objectFit: "cover",
                      }}
                    />
                  </Col> */}
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

      {/* <div className="px-2 px-sm-3 px-md-4 pb-3">
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
        <div>
          <h5 style={{ textAlign: "left" }}>
            <b>Pozostałe</b>
          </h5>
        </div>
      </div> */}

      <div className="container mt-5">
        <h1 className="text-primary mb-3">My Blog</h1>
        <Posts posts={currentPosts} loading={loading} />
        <Pag
          postsPerPage={postsPerPage}
          totalPosts={posts.length}
          paginate={paginate}
        />
      </div>
    </Container>
  );
};

export default Search;
