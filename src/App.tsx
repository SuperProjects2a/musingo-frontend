import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import NavbarComp from './components/NavbarComp'
import Footer from './components/Footer'

import { BrowserRouter, Router, Route, Link, Routes} from "react-router-dom";
import { Navbar, Nav, NavDropdown, Form, FormControl, Container, Offcanvas, Button } from "react-bootstrap";
import Home from "./components/Home"
import Test from "./components/Test"


// function App() {
//   return (
//     <div className="App">
//       {/* <NavbarComp/> */}
//       {/* <Footer/> */}


      
//     </div>
//   );
// }

function App() {
  return (
    <BrowserRouter>
      <div className="App">

      <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="px-4" sticky="top">
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
            <Nav.Link as={Link} to={"/Test"}>Dodaj ogłoszenie</Nav.Link>
          </Nav>
        </Navbar.Collapse>

        

      </Navbar>

      <div className="stickySearch">
        <Container >
          <Form className="d-flex py-3 col-12 gap-2" >
              <FormControl
                type="search"
                placeholder="Szukaj przedmiotów"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-dark">Szukaj</Button>
          </Form>
          </Container>
      </div>
      </>

      <div>
        <Routes>
        <Route path="/" element={<Home/>}></Route>
          <Route path="/Test" element={<Test/>}></Route>
        </Routes>
      </div>

      <Footer/>
      
      </div>
    </BrowserRouter>
  );
}

export default App;
