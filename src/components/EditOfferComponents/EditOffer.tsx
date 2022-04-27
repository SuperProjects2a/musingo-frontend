import { Container, Form, Col, Row, Card, Button } from "react-bootstrap";
import * as Yup from "yup";
import { Formik } from "formik";
import EditImage from "./EditImage";

const currentOfferInfos = [
  {
    titleCurrent: "Jakis tytuł",
    descriptionCurrent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    phoneNumberCurrent: "123456789",
    emailCurrent: "qweqwe@gmail.com",
    cityCurrent: "Sosnowiec",
    priceCurrent: "23",
    categoryCurrent: "gitary"
  },
];

const EditOffer = () => {
  const addOfferSchema = Yup.object().shape({
    title: Yup.string()
      .required("Wprowadź tytuł sprzedawanego przedmiotu")
      .min(5, "Minimalna długość tytułu to przynajmniej 5 znaków")
      .max(50, "Maksymalna długość tytułu to 50 znaków."),
    description: Yup.string().required("To pole jest wymagane"),
    phoneNumber: Yup.string()
      .required("To pole jest wymagane")
      .matches(/^[0-9]*$/, "Wprowadź poprawny numer telefonu")
      .min(9, "Wprowdź poprawny numer telefonu")
      .max(9, "Wprowdź poprawny numer telefonu"),
    email: Yup.string()
      .email("Wprowadź poprawny adres E-mail")
      .required("To pole jest wymagane"),
    city: Yup.string()
      .required("To pole jest wymagane")
      .matches(
        /^([a-zA-ZąęółżźćńśĄĘÓŻŹĆŃŁŚ-]+\s)*[-a-zA-ZąęółżźćńśĄĘÓŻŹĆŃŁŚ]+$/i,
        "Wprowadź prawidłową nazwę miejscowości"
      ),
    price: Yup.string()
      .required("Wprowdź poprawną cenę")
      .matches(/^[1-9][0-9]*$/, "Wprowdź poprawną cenę")
      .min(0.01, "Wprowdź poprawną cenę"),
    category: Yup.string()
      .required("Wybierz kategorię")
      .matches(
        /^[gitary, dete, klawiszowe, perkusyjne, smyczkowe, mikrofony, sluchawki,  akcesoria, inne]*$/i,
        "Wybierz kategorię"
      ),
  });

  return (
    <div className="px-1 px-md-2 px-lg-5 mx-md-1 mx-lg-5">
      {currentOfferInfos.map((currentOfferInfo, index) => (
      <Container
        className="justify-content-center"
        style={{ textAlign: "left" }}
      >
        <Card className="rounded border border-light mx-sm-1 mx-md-3 mx-lg-5 mt-sm-5 mb-sm-5">
          <Card.Header className="px-sm-4 px-md-5 py-3" as="h4">
            Edytuj ogłoszenie
          </Card.Header>
          <Card.Body className="px-sm-4 px-md-5">
            <Formik
              initialValues={{
                title: currentOfferInfo.titleCurrent,
                category: currentOfferInfo.categoryCurrent,
                description: currentOfferInfo.descriptionCurrent,
                email: currentOfferInfo.emailCurrent,
                phoneNumber: currentOfferInfo.phoneNumberCurrent,
                city: currentOfferInfo.cityCurrent,
                price: currentOfferInfo.priceCurrent,
              }}
              validationSchema={addOfferSchema}
              onSubmit={(values, { setSubmitting }) => {
                setSubmitting(true);
                setSubmitting(false);
              }}
            >
              {({
                handleSubmit,
                handleChange,
                handleBlur,
                touched,
                values,
                errors,
                isSubmitting,
              }) => (
                <Form onSubmit={handleSubmit}>
                  <EditImage />
                  <Form.Group className="py-5">
                    <h4>
                      <strong>Informacje o produkcie</strong>
                    </h4>
                    <Col sm="6">
                      <Form.Group className="py-2">
                        <Form.Label className="labelText">
                          Tytuł ogłoszenia
                        </Form.Label>
                        <Form.Control
                          name="title"
                          className="formInputs"
                          color="red"
                          type="text"
                          placeholder="np. Drewniana gitara klasyczna z futerałem i akcesoriami"
                          autoComplete="title"
                          value={values.title}
                          onBlur={handleBlur}
                          onChange={handleChange}
                          isInvalid={touched.title && !!errors.title}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.title}
                        </Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group className="py-2">
                        <Form.Label className="labelText">Kategoria</Form.Label>
                        <Form.Select
                          name="category"
                          className="formInputs"
                          autoComplete="category"
                          value={values.category}
                          onBlur={handleBlur}
                          onChange={handleChange}
                          isInvalid={touched.category && !!errors.category}
                        >
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
                        <Form.Control.Feedback type="invalid">
                          {errors.category}
                        </Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group className="sm-5 py-2">
                        <Form.Label className="labelText">Cena</Form.Label>
                        <Col sm="5">
                          <Form.Control
                            className="formInputs"
                            type="text"
                            placeholder="np. 50"
                            name="price"
                            autoComplete="price"
                            value={values.price}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            isInvalid={touched.price && !!errors.price}
                          />
                          <Form.Control.Feedback type="invalid">
                            {errors.price}
                          </Form.Control.Feedback>
                        </Col>
                      </Form.Group>
                    </Col>
                    <Form.Group className="py-2">
                      <Form.Label className="labelText">Opis</Form.Label>
                      <Form.Control
                        className="formInputs"
                        name="description"
                        as="textarea"
                        rows={6}
                        type="text"
                        maxLength={9000}
                        placeholder="Opisz wystawiany przez Ciebie produkt."
                        autoComplete="description"
                        value={values.description}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        isInvalid={touched.description && !!errors.description}
                      />
                      <Form.Text>
                        Maksymalna długość:{" "}
                        <strong>{values.description.length}/9000</strong>
                      </Form.Text>
                      <Form.Control.Feedback type="invalid">
                        {errors.description}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Form.Group>
                  <Form.Group>
                    <Col sm="6">
                      <h4>
                        <strong>Dane kontaktowe</strong>
                      </h4>
                      <Form.Group className="py-2">
                        <Form.Label className="labelText">Miasto</Form.Label>
                        <Form.Control
                          className="formInputs"
                          type="text"
                          placeholder="Wprowadź nazwe miejscowości"
                          name="city"
                          autoComplete="city"
                          value={values.city}
                          onBlur={handleBlur}
                          onChange={handleChange}
                          isInvalid={touched.city && !!errors.city}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.city}
                        </Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group className="py-2">
                        <Form.Label className="labelText">
                          Adres E-mail
                        </Form.Label>
                        <Form.Control
                          className="formInputs"
                          type="text"
                          placeholder="Wprowadź adres e-mail"
                          name="email"
                          autoComplete="email"
                          value={values.email}
                          onBlur={handleBlur}
                          onChange={handleChange}
                          isInvalid={touched.email && !!errors.email}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.email}
                        </Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group className="py-2">
                        <Form.Label className="labelText">
                          Numer telefonu
                        </Form.Label>
                        <Form.Control
                          className="formInputs"
                          type="text"
                          placeholder="Wprowadź numer telefonu"
                          name="phoneNumber"
                          autoComplete="phoneNumber"
                          value={values.phoneNumber}
                          onBlur={handleBlur}
                          onChange={handleChange}
                          isInvalid={
                            touched.phoneNumber && !!errors.phoneNumber
                          }
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.phoneNumber}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                  </Form.Group>
                  <Row className="py-5">
                    <Col
                      xl={{ span: 2, offset: 10 }}
                      lg={{ span: 3, offset: 9 }}
                      md={{ span: 4, offset: 8 }}
                    >
                      <Button
                        className=" my-2 my-sm-0"
                        variant="dark"
                        type="submit"
                        disabled={isSubmitting}
                      >
                        Edytuj ogłoszenie
                      </Button>
                    </Col>
                  </Row>
                </Form>
              )}
            </Formik>
          </Card.Body>
        </Card>
      </Container>
            ))}
    </div>
  );
};

export default EditOffer;
