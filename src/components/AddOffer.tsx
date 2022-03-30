import {
  InputGroup,
  Container,
  Form,
  Col,
  Row,
  Card,
  Button,
} from "react-bootstrap";
import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import { Formik } from "formik";

const AddOffer = () => {
  const addOfferSchema = Yup.object().shape({
    title: Yup.string()
      .required("To pole nie może zostać puste")
      .min(15, "Minimalna długość tytułu to przynajmniej 15 znaków")
      .max(50, "Maksymalna długość tytułu to 50 znaków."),
    description: Yup.string().required("To pole nie może zostać puste"),
    phoneNumber: Yup.string()
      .required("To pole nie może zostać puste")
      .matches(/^[0-9]*$/, "Wprowadź poprawny numer telefonu")
      .max(9, "Wprowdź poprawny numer"),
    tos: Yup.bool()
      .required()
      .oneOf([true], "Regulamin musi zostać zaakceptowany"),
    email: Yup.string()
      .email("Niepoprawny adres email")
      .required("To pole jest wymagane"),
    city: Yup.string()
      .required("To pole nie może zostać puste")
      .matches(
        /^[a-zA-ZąęółżźćńśĄĘÓŻŹĆŃŁŚ]{3,24}$/i,
        "Wprowadzono niedozwolone znaki"
      ),
  });

  const [descriptionLeng, setDescription] = React.useState("");
  const [check, setCheck] = React.useState(false);

  return (
    <div className="px-1 px-md-2 px-lg-5 mx-md-1 mx-lg-5">
      <Container
        className="justify-content-center"
        style={{ textAlign: "left" }}
      >
        <Card className="rounded border border-light mx-sm-1 mx-md-3 mx-lg-5">
          <Card.Header className="px-sm-4 px-md-5 py-3" as="h4">
            Dodaj ogłoszenie
          </Card.Header>
          <Card.Body className="px-sm-4 px-md-5">
            <Formik
              initialValues={{
                title: "",
                category: "",
                description: "",
                email: "",
                phoneNumber: "",
                city: "",
                price: "",
              }}
              validationSchema={addOfferSchema}
              onSubmit={(values, { setSubmitting, resetForm }) => {
                setSubmitting(true);
                resetForm();
                setSubmitting(false);
              }}
            >
              {({
                handleSubmit,
                handleChange,
                handleBlur,
                values,
                errors,
                isSubmitting,
              }) => (
                <Form onSubmit={handleSubmit}>
                  <Form.Group>
                    <h4>
                      <strong>Zdjęcia</strong>
                    </h4>
                    <Form.Label>Dodaj zdjęcia</Form.Label>
                    <InputGroup className="mb-3">
                      <Form.Control
                        type="file"
                        multiple
                        accept=".png,.jpg,.jpeg,.webp"
                        className="formInputs"
                      />
                      <Button
                        variant="dark"
                        type="submit"
                        className=" my-2 my-sm-0"
                      >
                        Wgraj zdjęcia
                      </Button>
                    </InputGroup>
                    <Form.Text>
                      Możesz dodać maksymalnie <strong>5</strong> zdjęć w
                      formacie: <strong>.png .jpg .jpeg .bpm</strong>
                    </Form.Text>
                  </Form.Group>
                  <Form.Group className="py-5">
                    <h4>
                      <strong>Informacje o produkcie</strong>
                    </h4>
                    <Col xs="6">
                      <Form.Label className="labelText">
                        Tytuł ogłoszenia
                      </Form.Label>
                      <Form.Control
                        title="title"
                        className="formInputs"
                        color="red"
                        type="text"
                        placeholder="np. IPhone 11 na gwarancji"
                        autoComplete="title"
                        value={values.title}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        isInvalid={!!errors.title}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.title}
                      </Form.Control.Feedback>
                      <Form.Label className="labelText">Kategoria</Form.Label>
                      <Form.Select className="formInputs" arial-label="cos">
                        <option> Wybierz kategorię </option>
                        <option value="gitary">Gitaty</option>
                        <option value="dete">Dęte</option>
                        <option value="klawiszowe">Klawiszowe</option>
                        <option value="perkusyjne">Perkusyjne</option>
                        <option value="smyczkowe">Smyczkowe</option>
                        <option value="mikrofony">Mikrofony</option>
                        <option value="sluchawki">Słuchawki</option>
                        <option value="nuty">Nuty, Książki</option>
                        <option value="akcesoria">Akcesoria</option>
                        <option value="inne">Inne</option>
                      </Form.Select>
                      <Form.Label className="labelText">Cena</Form.Label>
                      <Col xs="3">
                        <Form.Control
                          className="formInputs"
                          type="text"
                          placeholder="np. 50"
                        />
                      </Col>
                    </Col>
                    <Form.Label className="labelText">Opis</Form.Label>
                    <Form.Control
                      className="formInputs"
                      as="textarea"
                      rows={6}
                      type="text"
                      maxLength={9000}
                      placeholder="Opisz wystawiany przez Ciebie produkt."
                      onChange={(e) => setDescription(e.target.value)}
                    />
                    <Form.Text>
                      Maksymalna długość:{" "}
                      <strong>{descriptionLeng.length}/9000</strong>
                    </Form.Text>
                  </Form.Group>
                  <Form.Group>
                    <Col xs="6">
                      <h4>
                        <strong>Dane kontaktowe</strong>
                      </h4>
                      <Form.Label className="labelText">Miasto</Form.Label>
                      <Form.Control
                        className="formInputs"
                        type="text"
                        placeholder="Wprowadź nazwe miejscowości"
                      />
                      <Form.Label className="labelText">
                        Adres E-mail
                      </Form.Label>
                      <Form.Control
                        className="formInputs"
                        type="text"
                        placeholder="Wprowadź adres e-mail"
                      />
                      <Form.Label className="labelText">
                        Numer telefonu
                      </Form.Label>
                      <Form.Control
                        className="formInputs"
                        type="text"
                        placeholder="Wprowadź numer telefonu"
                      />
                    </Col>
                  </Form.Group>
                  <Row className="py-5">
                    <Col>
                      <Form.Check
                        type="checkbox"
                        onChange={(e) => setCheck(e.target.checked)}
                        label="Wyrażam zgodę na przetwarzanie moich danych osobowych."
                      />
                    </Col>
                    <Col
                      lg={{ span: 4, offset: 10 }}
                      md={{ span: 4, offset: 8 }}
                    >
                      <Button
                        className=" my-2 my-sm-0"
                        variant="dark"
                        type="submit"
                        disabled={isSubmitting}
                      >
                        Dodaj ogłoszenie
                      </Button>
                    </Col>
                  </Row>
                </Form>
              )}
            </Formik>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default AddOffer;
