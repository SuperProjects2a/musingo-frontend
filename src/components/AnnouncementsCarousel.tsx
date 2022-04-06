import React from "react";
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

var settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 3,
  arrows: true,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 2,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 450,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

interface IAnnouncements {
  announcements: IAnnouncement[];
}

interface IAnnouncement {
  link: string;
  title: string;
  price: number;
  city: string;
}

const AnnouncementsCarousel: FC<IAnnouncements> = ({ announcements }) => {
  return (
    <Row className=" py-1 px-5 px-sm-4" fluid>
      <Slider {...settings}>
        {announcements.map((announcement, index) => (
          <Col className="px-1 px-sm-1">
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
