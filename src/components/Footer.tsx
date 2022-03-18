import React from 'react'
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Form, FormControl, Container, Offcanvas, Button, Col, Row } from "react-bootstrap";

const Footer = () => {
  return (
    //   <footer >
    //       <hr/>
    //       <div className="container-fluid p-2" >
    //         <Link style={{color: "white"}} to="/Test">Regulamin</Link>        
    //         <Link to="/Test" className="link">Wyróżnione ogłoszenia</Link>        
    //         <Link to="/Test">Jak działą musingo?</Link>        
    //       </div>
    //       <div>
    //       <p>Copyright &copy; 2021</p>
    //       </div>

    //  </footer>

    <footer className="py-2 my-2">
      <hr/>
      <Row xs="auto" className="px-4 pb-2">
          <Col >
            <Link to="/Test" className="link">Regulamin</Link>
          </Col>
          <Col>
            <Link to="/Test" className="link">Wyróżnione ogłoszenia</Link>
          </Col>
          <Col>
            <Link to="/Test" className="link">Jak działa musingo?</Link>
          </Col>
      </Row>
      {/* <Container className="pt-3">
        <p >Copyright &copy; 2021</p>
      </Container> */}

    </footer>
  )
}

export default Footer