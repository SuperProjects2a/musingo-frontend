import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Link, Routes} from "react-router-dom";
import { Navbar, Nav, NavDropdown, FormControl, Container, InputGroup, Button, Col, Row, Image, Card, Figure} from "react-bootstrap";

const Home = () => {
  return (
    <> 
      <div className="backgroundHomePage p-5 text-light" >
        <Container className="py-md-5 my-md-5 my-sm-3">
          <Row className="py-4">
            <h1>Kupuj, sprzedawaj, ciesz się muzyką</h1>
          </Row>
          <Row className="p-md-2">
            <Col className="d-none d-sm-block" lg={{ span: 8, offset: 2 }}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pulvinar felis ut lobortis molestie. Mauris porttitor arcu sapien, quis cursus sapien ullamcorper non. Vivamus lobortis, erat eu blandit consequat, leo velit aliquam enim, ac sagittis mauris arcu sit amet ante. Quisque finibus metus dui, vitae iaculis sapien consequat at. Integer in dignissim dolor, eu rhoncus quam. Vivamus egestas viverra nunc ac malesuada. Ut non lacus vel sem placerat malesuada.
              </p>
            </Col>
          </Row>
          <Row className="py-3">
            <Link to="/Test">
              <Button className="btn btn-danger" size="lg">Dodaj ogłoszenie</Button>
            </Link>
          </Row>       
          <Row className="p-2">            
            <Link to="/Test" className="linkHomePage" >
              <h5>Jak to zrobić?</h5>
            </Link> 
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Home