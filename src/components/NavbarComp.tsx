import { Navbar, Nav, NavDropdown, FormControl, Container, InputGroup, Button, Col} from "react-bootstrap";
import { Route, Link, Routes} from "react-router-dom";
import Home from "./Home";
import Test from "./Test";
import SignUp from "./SignUp"
import SignIn from "./SignIn"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const NavbarComp = () => {
  return (
    <>
      <div className="header">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="px-4" sticky="top">
        <Navbar.Brand as={Link} to={"/"} style={{fontFamily: 'Nova Mono'}}>musingo</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <NavDropdown title="Kategorie" id="collasible-nav-dropdown">
              <NavDropdown.Item as={Link} to={"/Test"}>Gitary</NavDropdown.Item>
              <NavDropdown.Item as={Link} to={"/Test"}>Dęte</NavDropdown.Item>
              <NavDropdown.Item as={Link} to={"/Test"}>Klawiszowe</NavDropdown.Item>
              <NavDropdown.Item as={Link} to={"/Test"}>Perkusyjne</NavDropdown.Item>
              <NavDropdown.Item as={Link} to={"/Test"}>Smyczkowe</NavDropdown.Item>
              <NavDropdown.Item as={Link} to={"/Test"}>Mikrofony</NavDropdown.Item>
              <NavDropdown.Item as={Link} to={"/Test"}>Słuchawki</NavDropdown.Item>
              <NavDropdown.Item as={Link} to={"/Test"}>Nuty, książki</NavDropdown.Item>
              <NavDropdown.Item as={Link} to={"/Test"}>Akcesoria</NavDropdown.Item>
              <NavDropdown.Item as={Link} to={"/Test"}>Inne</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to={"/Test"}>Wiadomości</Nav.Link>
            <Nav.Link as={Link} to={"/Test"}>Doładuj konto</Nav.Link>
            <Nav.Link as={Link} to={"/SignIn"}>Zaloguj się</Nav.Link>
            <Nav.Link as={Link} to={"/SignUp"}>Zarejestruj się</Nav.Link>
            <Nav.Link as={Link} to={"/Test"}>Dodaj ogłoszenie</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Container className="py-3">
        <Col xs={{ span: 10, offset: 1 }} sm={{ span: 10, offset: 1 }} md={{ span: 8, offset: 2 }}>
        
        <InputGroup>
          <FormControl
            placeholder="Szukaj przedmiotów"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <Button variant="outline-dark" id="button-addon2">
          <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
          </Button>
        </InputGroup>
        </Col>
      </Container>
      </div>

      <div>
        <Routes>
        <Route path="/" element={<Home/>}></Route>
          <Route path="/Test" element={<Test/>}></Route>
          <Route path="/SignUp" element={<SignUp/>}></Route>
          <Route path="/SignIn" element={<SignIn/>}></Route>
        </Routes>
      </div>
      </>
  )
}

export default NavbarComp