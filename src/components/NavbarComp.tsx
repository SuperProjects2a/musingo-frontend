import React from 'react'
import { Navbar, Nav, NavDropdown, Form, FormControl, Container, Offcanvas, Button } from "react-bootstrap";
import { BrowserRouter, Router, Route, Link, Routes} from "react-router-dom";
import Home from "./Home";
import Test from "./Test";


const NavbarComp = () => {
  return (
    <div>
      <BrowserRouter>
      <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
        <Navbar.Brand as={Link} to={"/"} style={{fontFamily: 'Nova Mono'}}>musingo</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            
          </Nav>
          <Nav>
            <NavDropdown title="Kategorie" id="collasible-nav-dropdown">
              <NavDropdown.Item as={Link} to={"/Test"}>Gitary</NavDropdown.Item>
              <NavDropdown.Item as={Link} to={"/Test"}>Dęte</NavDropdown.Item>
              <NavDropdown.Item as={Link} to={"/Test"}>Klawiszowe</NavDropdown.Item>
              <NavDropdown.Item as={Link} to={"/Test"}>Perkusyjne</NavDropdown.Item>
              <NavDropdown.Item as={Link} to={"/Test"}>Smyczkowe</NavDropdown.Item>
              <NavDropdown.Item as={Link} to={"/Test"}>Mikrofony</NavDropdown.Item>
              <NavDropdown.Item as={Link} to={"/Test"}>Słuchawki</NavDropdown.Item>
              <NavDropdown.Item as={Link} to={"/Test"}>Akcesoria</NavDropdown.Item>
              <NavDropdown.Item as={Link} to={"/Test"}>Akcesoria</NavDropdown.Item>
              <NavDropdown.Item as={Link} to={"/Test"}>Inne</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to={"/Test"}>Wiadomości</Nav.Link>
            <Nav.Link as={Link} to={"/Test"}>Doładuj konto</Nav.Link>
            <Nav.Link as={Link} to={"/Test"}>Zaloguj się</Nav.Link>
            <Nav.Link as={Link} to={"/Test"}>Dodaj ogłoszenie</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>

      <Navbar>
        <Form className="d-flex p-3 col-12 gap-2" >
            <FormControl
              type="search"
              placeholder="Szukaj przedmiotów"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-dark">Szukaj</Button>
          </Form>
      </Navbar>
      </>

      <div>
        <Routes>
        <Route path="/" element={<Home/>}></Route>
          <Route path="/Test" element={<Test/>}></Route>
        </Routes>
      </div>

      </BrowserRouter>
    </div>
  )
}

export default NavbarComp