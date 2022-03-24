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
} from "react-bootstrap";
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

const abc: string = "../images/hpImage.jpg";

const Home = () => {
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
            <Col xs={5} sm={4} key={index}>
              <Link to={category.link} className="categories">
                <h5 className="py-1" style={{ textAlign: "center" }}>
                  {category.text}
                </h5>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
      <Container className="d-none d-md-block bg-light pb-4" fluid>
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

      <Container className=" pb-4" fluid>
        <Row className="py-4">
          <h3>Wyróżnione</h3>
        </Row>
      </Container>
    </>
  );
};

export default Home;
