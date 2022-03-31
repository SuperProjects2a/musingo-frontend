import React from "react";
import { Container, Form, Col, Button, Row } from "react-bootstrap";
import { Formik } from "formik";
import * as Yup from "yup";

const SignUp = () => {
  const registerSchema = Yup.object().shape({
    name: Yup.string()
      .required("To pole jest wymagane")
      .min(3, "Wprowadź prawidłowe imię")
      .max(24, "Wprowadź prawidłowe imię")
      .matches(
        /^[a-zA-ZąęółżźćńśĄĘÓŻŹĆŃŁŚ]{3,24}$/i,
        "Wprowadzono niedozwolone znaki"
      ),

    surname: Yup.string()
      .min(3, "Wprowadź prawidłowe nazwisko")
      .max(24, "Wprowadź prawidłowe nazwisko")
      .matches(
        /^[a-zA-ZąęółżźćńśĄĘÓŻŹĆŃŁŚ]{3,24}$/i,
        "Wprowadzono niedozwolone znaki"
      )
      .required("To pole jest wymagane"),
    email: Yup.string()
      .email("Niepoprawny adres email")
      .required("To pole jest wymagane"),
    password: Yup.string()
      .required("To pole jest wymagane")
      .min(8, "Hasło musi składać się z minimum 8 znaków")
      .matches(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
        "Hasło musi zawierać 8 znaków, małą i dużą literę, znak specjalny i cyfre"
      ),
    passwordConfirmation: Yup.string()
      .required("To pole jest wymagane")
      .oneOf([Yup.ref("password"), null], "Hasło musza się zgadzać"),
    phoneNumber: Yup.string()
      .required("To pole jest wymagane")
      .matches(/^[0-9]*$/, "Wprowadź poprawny numer telefonu")
      .max(9, "Wprowdź poprawny numer"),
    tos: Yup.bool()
      .required()
      .oneOf([true], "Regulamin musi zostać zaakceptowany"),
  });
  return (
    <Container className="d-grid signContainer">
      <Row>
        <Col xs={{ span: 10, offset: 1 }}>
          <Formik
            initialValues={{
              name: "",
              surname: "",
              email: "",
              password: "",
              passwordConfirmation: "",
              phoneNumber: "",
              tos: false,
            }}
            validationSchema={registerSchema}
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
              touched,
              errors,
              isSubmitting,
            }) => (
              <Form
                className="bg-body rounded border border-light p-4 p-sm-3"
                onSubmit={handleSubmit}
              >
                <h1>Zarejestruj się</h1>
                <Form.Group>
                  <Form.Label className="labelText">Imię</Form.Label>
                  <Form.Control
                    name="name"
                    type="text"
                    placeholder="Wprowadź imię"
                    autoComplete="name"
                    className="formInputs"
                    value={values.name}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    isInvalid={!!errors.name}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.name}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group>
                  <Form.Label className="labelText">Nazwisko</Form.Label>
                  <Form.Control
                    name="surname"
                    type="text"
                    placeholder="Wprowadź nazwisko"
                    autoComplete="surname"
                    className="formInputs"
                    value={values.surname}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    isInvalid={!!errors.surname}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.surname}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group>
                  <Form.Label className="labelText">Adres email</Form.Label>
                  <Form.Control
                    name="email"
                    type="email"
                    placeholder="Wprowadź adres email"
                    autoComplete="email"
                    className="formInputs"
                    value={values.email}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    isInvalid={!!errors.email}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.email}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group>
                  <Form.Label className="labelText">Hasło</Form.Label>
                  <Form.Control
                    name="password"
                    type="password"
                    placeholder="Wprowadź hasło"
                    autoComplete="password"
                    className="formInputs"
                    value={values.password}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    isInvalid={!!errors.password}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.password}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group>
                  <Form.Label className="labelText">Powtórz hasło</Form.Label>
                  <Form.Control
                    name="passwordConfirmation"
                    type="password"
                    placeholder="Wprowadź ponownie hasło"
                    autoComplete="passwordConfirmation"
                    className="formInputs"
                    value={values.passwordConfirmation}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    isInvalid={!!errors.passwordConfirmation}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.passwordConfirmation}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group>
                  <Form.Label className="labelText">Numer telefonu</Form.Label>
                  <Form.Control
                    type="tel"
                    placeholder="Wprowadź numer telefonu"
                    autoComplete="phoneNumber"
                    className="formInputs"
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Check
                    type="checkbox"
                    label="Akceptuje Regulamin"
                    className="labelText mt-2"
                  />
                </Form.Group>

                <div className="d-grid mt-5">
                  <Button
                    variant="dark"
                    size="lg"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    Zarejestruj się
                  </Button>
                </div>
                <p>
                  Masz już konto? <a href="#">Zaloguj się</a>
                </p>
              </Form>
            )}
          </Formik>
        </Col>
      </Row>
    </Container>
  );
};

export default SignUp;
