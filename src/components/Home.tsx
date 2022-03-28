import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Link, Routes } from "react-router-dom";
import {
  Navbar,
  Nav,
  NavDropdown,
  FormControl,
  Container,
  InputGroup,
  Button,
  Col,
  Row,
  Image,
  Figure,
  Card,
  Carousel,
  CardGroup,
} from "react-bootstrap";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

import AnnouncementCard from "./AnnouncementCard";

import guitarCategory from "../images/guitar-category.jpg";
import windCategory from "../images/wind-category.jpg";
import keyboarCategory from "../images/keyboard-category.jpg";
import percussionCategory from "../images/percussion-category.jpg";
import stringCategory from "../images/string-category.jpg";
import microphonesCategory from "../images/microphones-category.jpg";
import handsetCategory from "../images/handset-category.jpg";
import accessoriesCategory from "../images/accessories-category.jpg";
import bookNoteCategory from "../images/book-note-category.jpg";
import otherCategory from "../images/other-category.jpg";
import testIMG from "../images/test.jpg";

const categories = [
  { link: "/Test", text: "Gitary", imgLink: guitarCategory },
  { link: "/Test", text: "Dęte", imgLink: windCategory },
  { link: "/Test", text: "Klawiszowe", imgLink: keyboarCategory },
  { link: "/Test", text: "Perkusyjne", imgLink: percussionCategory },
  { link: "/Test", text: "Smyczkowe", imgLink: stringCategory },
  { link: "/Test", text: "Mikrofony", imgLink: microphonesCategory },
  { link: "/Test", text: "Słuchawki", imgLink: handsetCategory },
  { link: "/Test", text: "Akcesoria", imgLink: accessoriesCategory },
  { link: "/Test", text: "Nuty, książki", imgLink: bookNoteCategory },
  { link: "/Test", text: "Inne", imgLink: otherCategory },
];
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
  { link: "/Test", title: "Skrzypce, nieużywane", price: 7850, city: "Poznań" },
  {
    link: "/Test",
    title: "Struny do skrzypiec, błyskawicznie reaguje na dotyk smyczka",
    price: 560,
    city: "Katowice",
  },
];
const Home = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
    arrows: true,
    // nextArrow: <FontAwesomeIcon icon={faAngleLeft} />,
    // prevArrow: <FontAwesomeIcon icon={faAngleRight} />,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 4,
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
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: false,
          dots: false,
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
        breakpoint: 600,
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
    <>
      <div className="backgroundHomePage p-5 text-light">
        <Container className="py-lg-4 my-lg-3 py-md-2 my-md-2 my-sm-3">
          <Row className="py-4">
            <h1>Kupuj, sprzedawaj, ciesz się muzyką</h1>
          </Row>
          <Row className="p-md-2">
            <Col className="d-none d-md-block" lg={{ span: 8, offset: 2 }}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                pulvinar felis ut lobortis molestie. Mauris porttitor arcu
                sapien, quis cursus sapien ullamcorper non. Vivamus lobortis,
                erat eu blandit consequat, leo velit aliquam enim, ac sagittis
                mauris arcu sit amet ante. Quisque finibus metus dui, vitae
                iaculis sapien consequat at. Integer in dignissim dolor, eu
                rhoncus quam. Vivamus egestas viverra nunc ac malesuada. Ut non
                lacus vel sem placerat malesuada.
              </p>
            </Col>
          </Row>
          <Row className="py-3">
            <Link to="/Test">
              <Button className="btn btn-danger" size="lg">
                Dodaj ogłoszenie
              </Button>
            </Link>
          </Row>
          <Row className="p-2">
            <Link to="/Test" className="linkHomePage">
              <h5>Jak to zrobić?</h5>
            </Link>
          </Row>
        </Container>
      </div>
      <Container className="d-sm-block d-md-none bg-light pb-4" fluid>
        <Row className="py-4">
          <h3>Kategorie</h3>
        </Row>
        <Row className="d-flex justify-content-center pb-lg-2">
          {categories.map((category, index) => (
            <Col xs={12} sm={4} key={index}>
              <Link to={category.link} className="categories">
                <h4 className="py-1" style={{ textAlign: "center" }}>
                  {category.text}
                </h4>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
      {/* <Container className="d-none d-md-block bg-light pb-4" fluid>
        <Row className="py-4">
          <h3>Kategorie</h3>
        </Row>
        <Row className="d-flex justify-content-center pb-lg-2">
          <Row className="d-flex justify-content-center pb-lg-2">
            {categories
              .filter((item, index) => index < 5)
              .map((filteredItem) => (
                <Col sm={2}>
                  <Link to={filteredItem.link} className="categories">
                    <Image
                      src={filteredItem.imgLink}
                      fluid
                      className="d-none d-sm-block"
                    ></Image>
                    <h5 className="py-1">{filteredItem.text}</h5>
                  </Link>
                </Col>
              ))}
          </Row>
          <Row className="d-flex justify-content-center pb-lg-2">
            {categories
              .filter((item, index) => index > 4)
              .map((filteredItem) => (
                <Col sm={2}>
                  <Link to={filteredItem.link} className="categories">
                    <Image
                      src={filteredItem.imgLink}
                      fluid
                      className="d-none d-sm-block"
                    ></Image>
                    <h5 className="py-1">{filteredItem.text}</h5>
                  </Link>
                </Col>
              ))}
          </Row>
        </Row>
      </Container> */}
      <Container className=" py-4" fluid>
        <h3 className="">Wyróżnione</h3>

        <Row className="px-5 py-1 mx-1" fluid>
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
      </Container>

      <Container className="py-2" fluid>
        <h3 className="">Ostatnio dodane</h3>
      </Container>
      <Container className="px-5 py-1" fluid>
        <Slider {...settings}>
          {announcements.map((announcement, index) => (
            //let i = string.concat("https://picsum.photos/200/300?random=", {category.index});
            <Link to={announcement.link} className="categories px-sm-2">
              <Card>
                <Card.Img
                  variant="top"
                  // src={category.imgLink}
                  src={"https://picsum.photos/200/300?random=2"}
                  style={{ height: "22vh", width: "100%", objectFit: "cover" }}
                />
                <Card.Body>
                  <Card.Title style={{ height: "10vh" }}>
                    {/* <Card.Title> */}
                    {/* {category.text} bowihihc                   */}
                    {/* k[pqkdowjopj wpjmp wojfpowj wkwojfpo powj pwjjwpoj */}
                    {/* if({category.text}.length > 10) {{category.text}.substring(0, 10)} */}
                    {/* {announcement.title.length > 26 ? (
                      <p>{announcement.title.substring(0, 23)}...</p>
                    ) : ( */}
                    {announcement.title.length > 20 ? (
                      <p>{announcement.title.substring(0, 17)}...</p>
                    ) : (
                      <p>{announcement.title}</p>
                    )}
                  </Card.Title>
                  <Card.Text className="pt-1">
                    {/* <h5>k[pqkdowjopj wpjmp wojfpowj wkwojfpo powj pwjjwpoj</h5> */}
                    <b>{announcement.price} zł</b>
                    {/* <br />
                    Bielsko-Biała */}

                    <Card.Subtitle className="py-1">
                      <small className="text-muted">{announcement.city}</small>
                      {/* <br/>
                      <small className="text-muted">dzisiaj 10:15</small> */}
                    </Card.Subtitle>
                  </Card.Text>
                </Card.Body>
                {/* <Card.Footer>
                  <small className="text-muted">Bielsko-Biała</small>
                  <br />
                  <small className="text-muted">dzisiaj 10:15</small>
                </Card.Footer> */}
              </Card>
            </Link>
          ))}

          {/* <Link to={"/Test"} className="categories p-2">
            <Card>
              <Card.Img
                variant="top"
                src={testIMG}
                style={{ height: "20vw", width: "100%", objectFit: "cover" }}
              />
              <Card.Body>
                <Card.Title style={{ height: "50px" }}> bowihihc</Card.Title>
                <Card.Text className="pt-2">
                  <b>400 zł</b>
                  <br />
                  Bielsko-Biała
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">dzisiaj 10:15</small>
              </Card.Footer>
            </Card>
          </Link> */}

          {/* <div>
            <Card>
              <Card.Body>
                {" "}
                <h3>1</h3>This is some text within a card body.
              </Card.Body>
            </Card>
          </div>
          <div>
            <Card>
              <Card.Body>
                {" "}
                <h3>2</h3>This is some text within a card body.
              </Card.Body>
            </Card>
          </div>
          <div>
            <Card>
              <Card.Body>
                {" "}
                <h3>3</h3>This is some text within a card body.
              </Card.Body>
            </Card>
          </div>
          <div>
            <Card>
              <Card.Body>
                {" "}
                <h3>4</h3>This is some text within a card body.
              </Card.Body>
            </Card>
          </div>
          <div>
            <Card>
              <Card.Body>
                {" "}
                <h3>5</h3>This is some text within a card body.
              </Card.Body>
            </Card>
          </div>
          <div>
            <Card>
              <Card.Body>
                {" "}
                <h3>6</h3>This is some text within a card body.
              </Card.Body>
            </Card>
          </div> */}
        </Slider>
      </Container>
    </>
  );
};

export default Home;
