import { InputGroup, Container, Form, Col, Row, Card, Button } from "react-bootstrap";
import React, { useEffect, useState } from "react";

const AddOffer = () => {
    const [description, setDescription] = React.useState("");
    const [category, setCategory] = React.useState("none");
    const [check, setCheck] = React.useState(false);
    const [fill, setFill] = React.useState(false);   
    const [title, setTitle] = React.useState("none");
    const [email, setEmail] = React.useState("none");
    const [phoneNumber, setPhoneNumber] = React.useState("none");
    const [city, setCity] = React.useState("none");

  return (
    <div className="px-1 px-md-2 px-lg-5 mx-md-1 mx-lg-5"> 
      <Container className ="justify-content-center" style={{ textAlign: "left" }}>
        <Card className="rounded border border-light mx-sm-1 mx-md-3 mx-lg-5">
         <Card.Header className="px-sm-4 px-md-5 py-3" as="h4">Dodaj ogłoszenie</Card.Header>
         <Card.Body className="px-sm-4 px-md-5">
            <Form >
                <Form.Group> {/* Photos*/}
                  <h4><strong>Zdjęcia</strong></h4>
                  <Form.Label>Dodaj zdjęcia</Form.Label>
                  <InputGroup className="mb-3">
                  <Form.Control type="file" multiple accept=".png,.jpg,.jpeg,.webp"/>
                  <Button variant="dark" type="submit" className=" my-2 my-sm-0">Wgraj zdjęcia</Button>
                  </InputGroup> 
                  <Form.Text>Możesz dodać maksymalnie <strong>5</strong> zdjęć w formacie: <strong>.png .jpg .jpeg .bpm</strong></Form.Text>
                </Form.Group>
                <Form.Group className = "py-5"> {/* Info */} 
                  <h4><strong>Informacje o produkcie</strong></h4>
                  <Col xs="6">
                    <Form.Label className="labelText" >Tytuł ogłoszenia</Form.Label>
                      <Form.Control
                        color="red"
                        type="text"
                        placeholder="np. IPhone 11 na gwarancji"
                        onChange={e => setTitle(e.target.value)}
                      />
                    <Form.Label className="labelText">Kategoria</Form.Label>
                    <Form.Select 
                        arial-label ="cos" 
                        onChange={e => setCategory(e.target.value)}>
                          <option> Wybierz kategorię </option>
                          <option value = "gitary">Gitaty</option>
                          <option value = "dete">Dęte</option>
                          <option value = "klawiszowe">Klawiszowe</option>
                          <option value = "perkusyjne">Perkusyjne</option>
                          <option value = "smyczkowe">Smyczkowe</option>
                          <option value = "mikrofony">Mikrofony</option>
                          <option value = "sluchawki">Słuchawki</option>
                          <option value = "nuty">Nuty, Książki</option>
                          <option value = "akcesoria">Akcesoria</option>
                          <option value = "inne">Inne</option>
                    </Form.Select>
                    </Col>
                      <Form.Label className="labelText">Opis</Form.Label>
                      <Form.Control                
                        as="textarea" rows={6}
                        type="text"
                        maxLength={9000}
                        placeholder="Opisz wystawiany przez Ciebie produkt."
                        onChange={e => setDescription(e.target.value)}
                      />
                      <Form.Text>Maksymalna długość: <strong>{description.length}/9000</strong></Form.Text>
                    </Form.Group>
                    <Form.Group>
                    <Col xs="6">
                        <h4><strong>Dane kontaktowe</strong></h4> {/* User Data */}
                        <Form.Label className="labelText">Miasto</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Wprowadź nazwe miejscowości"
                          onChange={e => setCity(e.target.value)}
                        />
                        <Form.Label className="labelText">Adres E-mail</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Wprowadź adres e-mail"
                          onChange={e => setEmail(e.target.value)}
                        />
                        <Form.Label className="labelText">Numer telefonu</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Wprowadź numer telefonu"
                          onChange={e => setPhoneNumber(e.target.value) }
                        />
                    </Col>
                    </Form.Group>
            </Form>
              <Row className="py-5" >
                <Col>
                  <Form.Check 
                    type="checkbox"
                    onChange={e => setCheck(e.target.checked)}
                    label="Wyrażam zgodę na przetwarzanie moich nerek."
                    />
                </Col> 
                <Col lg={{ span: 4, offset: 9}} md={{ span: 4, offset: 8}} >
                  <Button  variant="dark" type="submit" className=" my-2 my-sm-0">Dodaj ogłoszenie</Button>                                
                </Col>
                </Row>
          </Card.Body>
        </Card>
      </Container>
    </div> 
  );
};

export default AddOffer;