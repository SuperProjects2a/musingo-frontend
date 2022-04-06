import React from "react";
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

const AnnouncementsCarousel = () => {
  return (
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
  );
};

export default AnnouncementsCarousel;
