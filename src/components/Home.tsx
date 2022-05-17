import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { Container, Button, Col, Row, Image } from "react-bootstrap";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React, { useState, useEffect } from "react";
import AnnouncementsCarousel from "./announcement/AnnouncementsCarousel";
import data from "../data.json";

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
import DisplayOffer from "./DisplayOfferComponents/DisplayOffer";

const categories = [
  { link: "/Search", text: "Gitary", imgLink: guitarCategory },
  { link: "/Search", text: "Dęte", imgLink: windCategory },
  { link: "/Search", text: "Klawiszowe", imgLink: keyboarCategory },
  { link: "/Search", text: "Perkusyjne", imgLink: percussionCategory },
  { link: "/Search", text: "Smyczkowe", imgLink: stringCategory },
  { link: "/Search", text: "Mikrofony", imgLink: microphonesCategory },
  { link: "/Search", text: "Słuchawki", imgLink: handsetCategory },
  { link: "/Search", text: "Akcesoria", imgLink: accessoriesCategory },
  { link: "/Search", text: "Nuty, książki", imgLink: bookNoteCategory },
  { link: "/Search", text: "Inne", imgLink: otherCategory },
];

interface IAnnouncement {
  link: string;
  title: string;
  price: number;
  city: string;
  watch: boolean;
}

const Home = () => {
  const [announcements, setAnnouncements] = useState<IAnnouncement[]>(
    [] as IAnnouncement[]
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAnnouncements = async () => {
      setLoading(true);
      setAnnouncements(data);
      setLoading(false);
    };

    fetchAnnouncements();
  }, []);

  return (
    <div className="pb-4">
      {/* BANER */}
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
            <Link to="/AddOffer">
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
      {/* KATEGORIE MOB*/}
      <Container className="d-sm-block d-md-none bg-light pb-4" fluid>
        <Row className="py-4">
          <h3>Kategorie</h3>
        </Row>
        <Row className="d-flex justify-content-center pb-lg-2">
          {categories.map((category, index) => (
            <Col xs={12} sm={5} key={index}>
              <Link to={category.link} className="categories">
                <h5 className="py-1" style={{ textAlign: "center" }}>
                  {category.text}
                </h5>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>

      {/* KATEGORIE DES*/}
      <Container className="d-none d-md-block bg-light pb-4 mb-1" fluid>
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
      </Container>

      {/* WYROZNIONE */}
      <Container className="pt-3 px-4" fluid>
        {announcements.length > 0 && (
          <div>
            <h3 className="pb-2">Wyróżnione</h3>
            <Row className="d-flex justify-content-center px-4 px-sm-0">
              <AnnouncementsCarousel
                announcements={announcements}
                loading={loading}
                center={true}
              />
            </Row>
          </div>
        )}
      </Container>

      {/* OSTATNIO DODANE */}
      <Container className="pt-3 px-4" fluid>
        {announcements.length > 0 && (
          <div>
            <h3 className="pb-2">Ostatnio dodane</h3>
            <Row className="d-flex justify-content-center px-4 px-sm-0">
              <AnnouncementsCarousel
                announcements={announcements}
                loading={loading}
                center={true}
              />
            </Row>
          </div>
        )}
      </Container>
    </div>
  );
};

export default Home;
