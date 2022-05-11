import { Form, Col, Button, Row } from "react-bootstrap";
import { Formik } from "formik";
import { login } from "../../services/userService";
import React, { useState, useEffect } from "react";
import * as Yup from "yup";
const SignIn = () => {
  const loginSchema = Yup.object().shape({
    email: Yup.string()
      .email("Niepoprawny adres email")
      .required("Prosze wpisać adres email"),
    password: Yup.string().required("Proszę wpisać hasło"),
  });

  const [isError,setIsError] = useState(false);

  return (
    <div className="p-4">
      <Row>
        <Col>
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validationSchema={loginSchema}
            onSubmit={async (values, { setSubmitting, resetForm }) => {
              setSubmitting(true);
              await login(values)
                .then((res) => {
                  setIsError(false);
                  localStorage.setItem("token", res.headers.authtoken);
                  window.location.href = "/";
                })
                .catch((err) => {
                  setIsError(true);
                });
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
              <Form onSubmit={handleSubmit} style={{ textAlign: "left" }}>
                <Form.Group className="position-relative">
                  <Form.Label>Adres email</Form.Label>
                  <Form.Control
                    name="email"
                    type="text"
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

                <Form.Group className="position-relative">
                  <Form.Label className="mt-2">Hasło</Form.Label>
                  <Form.Control
                    name="password"
                    type="password"
                    placeholder="Wprowadź hasło"
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
                {isError == true &&<div className="d-grid my-4">
                 <p className="text-danger" style={{textAlign: 'center'}}>Nieprawidłowy login lub hasło</p>
                </div>}
                <div className="d-grid my-4">
                  <Button
                    size="lg"
                    variant="dark"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    Zaloguj się
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

export default SignIn;
