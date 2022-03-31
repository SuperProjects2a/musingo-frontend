import React from "react";
import { Form, Col, Button, Row } from "react-bootstrap";
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
      .min(9, "Wprowdź poprawny numer")
      .max(9, "Wprowdź poprawny numer"),
    tos: Yup.boolean()
      .required()
      .oneOf([true], "Regulamin musi zostać zaakceptowany"),
  });
  return (
    <div className="formDiv p-4">
      <Row>
        <Col>
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
              <Form onSubmit={handleSubmit}>
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
                    isInvalid={touched.name && !!errors.name}
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
                    isInvalid={touched.surname && !!errors.surname}
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
                    isInvalid={touched.email && !!errors.email}
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
                    isInvalid={touched.password && !!errors.password}
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
                    isInvalid={
                      touched.passwordConfirmation &&
                      !!errors.passwordConfirmation
                    }
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.passwordConfirmation}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group>
                  <Form.Label className="labelText">Numer telefonu</Form.Label>
                  <Form.Control
                    name="phoneNumber"
                    type="tel"
                    placeholder="Wprowadź numer telefonu"
                    autoComplete="phoneNumber"
                    className="formInputs"
                    value={values.phoneNumber}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    isInvalid={touched.phoneNumber && !!errors.phoneNumber}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.phoneNumber}
                  </Form.Control.Feedback>
                </Form.Group>
                <Row>
                  <Col>
                    <Form.Group>
                      <Form.Check
                        name="tos"
                        type="checkbox"
                        label="Akceptuje Regulamin"
                        className="labelText mt-2"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        isInvalid={touched.tos && !!errors.tos}
                        feedback={errors.tos}
                        feedbackType="invalid"
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <div className="d-grid">
                  <Button
                    variant="dark"
                    size="lg"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    Zarejestruj się
                  </Button>
                </div>
              </Form>
            )}
          </Formik>
        </Col>
      </Row>
    </div>
  );
};

export default SignUp;
