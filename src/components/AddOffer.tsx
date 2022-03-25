import { Container, Form, Col, Row, Card, Button } from "react-bootstrap";
import React, { useEffect, useState } from "react";

const NewAd = () => {
    const [description, setDescription] = React.useState("");
    const [category, setCategory] = React.useState("none");
    const [check, setCheck] = React.useState(false);
    const [title, setTitle] = React.useState("none");
    const [email, setEmail] = React.useState("none");
    const [phoneNumber, setPhoneNumber] = React.useState("none");
    const [city, setCity] = React.useState("none");

  return (
    <Container className="me-auto my-2 my-lg-0">
          <Card className="rounded border border-light">
          <Card.Header as="h4">Dodaj ogłoszenie</Card.Header>
            <Card.Body>
              <Form >
{/* Photos*/}
                <Form.Group>
                <h4 style={{textAlign:'left'}}><strong>Zdjęcia</strong></h4>
                <Form.Label>Dodaj zdjęcia</Form.Label>
                <Row className="align-items-right">
                    <Col xs="auto">
                      <Form.Control type="file" multiple accept=".png,.jpg,.jpeg,.webp"/>
                    </Col>
                    <Col xs="auto">
                      <Button variant="dark" type="submit" className=" my-2 my-sm-0">Dodaj</Button>
                    </Col>
                    <Form.Text>Możesz dodać maksymalnie <strong>5</strong> zdjęć w formacie: <strong>.png .jpg .jpeg .bpm</strong></Form.Text>
                  </Row>    
                </Form.Group>
{/* Title */}
                <Form.Group>
                <h4 style={{textAlign:'left'}}><strong>Informacje o produkcie</strong></h4>
                <Form.Label className="labelText" >Tytuł ogłoszenia*</Form.Label>
                <Form.Control
                    color="red"
                    type="text"
                    size="lg"
                    placeholder="np. IPhone 11 na gwarancji"
                    onChange={e => setTitle(e.target.value)}
                    />
{/* Category */}
                <Form.Label className="labelText">Kategoria*</Form.Label>
                <Form.Select 
                  style={{backgroundColor: "#dfdfdf"}} 
                  arial-label ="cos" 
                  onChange={e => setCategory(e.target.value)}
                  >
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
{/* Description */}
                <Form.Label className="labelText">Opis*</Form.Label>
                <Form.Control style={{backgroundColor: "#dfdfdf"}}                 
                  as="textarea" rows={6}
                  type="text"
                  size="lg"
                  maxLength={9000}
                  placeholder="Opisz wystawiany przez Ciebie produkt."
                  onChange={e => setDescription(e.target.value)}
                />
                <Form.Text>Maksymalna długość: <strong>{description.length}/9000</strong></Form.Text>
                </Form.Group>
{/* User Data */}
                <Form.Group>
                <h4 style={{textAlign:'left'}}><strong>Dane kontaktowe</strong></h4>
                <Form.Label className="labelText">Miasto*</Form.Label>
                <Form.Control style={{backgroundColor: "#dfdfdf"}}
                  type="text"
                  size="lg"
                  placeholder="Wprowadź nazwe miejscowości"
                  onChange={e => setCity(e.target.value)}
                />
                <Form.Label className="labelText">Adres E-mail</Form.Label>
                <Form.Control style={{backgroundColor: "#dfdfdf"}}
                  type="text"
                  size="lg"
                  placeholder="Wprowadź adres e-mail"
                  onChange={e => setEmail(e.target.value)}
                />
                <Form.Label className="labelText">Numer telefonu</Form.Label>
                <Form.Control style={{backgroundColor: "#dfdfdf"}}
                  type="text"
                  size="lg"
                  placeholder="Wprowadź numer telefonu"
                  onChange={e => setPhoneNumber(e.target.value) }
                />
                </Form.Group>
                <br />
              </Form>
{/* Button + Check Box */}
                <Row className="align-items-right">
                  <Col xs="auto">
                    <Form.Check 
                      type="checkbox"
                      id="autoSizingCheck"
                      className="mb-2"
                      onChange={e => setCheck(e.target.checked)}
                      label="Wyrażam zgodę na przetwarzanie moich nerek."
                    />
                  </Col>
                    <Col xs="auto">
                      <Button variant="dark" type="submit" className=" my-2 my-sm-0">Dodaj ogłoszenie</Button>
                    </Col>
                  </Row>
{/* Test values to display */}
                  <Form.Text>{title} + {category} + {description} + {city} + {email} + {phoneNumber} + {check.toString()}</Form.Text>
            </Card.Body>
          </Card>
    </Container>
  );
};

export default NewAd;