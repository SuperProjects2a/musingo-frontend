import { Container, Form, Col, Button, Row } from "react-bootstrap";
import { Formik } from "formik";
import * as Yup from "yup";
const SignIn = () => {
  const loginSchema = Yup.object().shape({
    email: Yup.string()
      .email("Niepoprawny adres email")
      .required("Prosze wpisać adres email"),
    password: Yup.string()
      .required("Proszę wpisać hasło")
      .min(8, "Hasło składa się z minimum 8 znaków"),
  });

  return (
    <Container className="d-grid signContainer">
      <Row>
        <Col xs={{ span: 10, offset: 1 }}>
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validationSchema={loginSchema}
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
                <h1>Zaloguj się</h1>
                <Form.Group className="position-relative">
                  <Form.Label className="labelText">Adres email</Form.Label>
                  <Form.Control
                    name="email"
                    type="text"
                    size="lg"
                    placeholder="Wprowadź adres email"
                    autoComplete="email"
                    className="formInputs"
                    value={values.email}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    isInvalid={!!errors.email}
                  />
                  <Form.Control.Feedback type="invalid" tooltip>
                    {errors.email}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="position-relative">
                  <Form.Label className="labelText">Hasło</Form.Label>
                  <Form.Control
                    name="password"
                    type="password"
                    size="lg"
                    placeholder="Wprowadź hasło"
                    className="formInputs"
                    value={values.password}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    isInvalid={!!errors.password}
                  />
                  <Form.Control.Feedback type="invalid" tooltip>
                    {errors.password}
                  </Form.Control.Feedback>
                </Form.Group>

                <div className="d-grid mt-5">
                  <Button
                    size="lg"
                    variant="dark"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    Zaloguj się
                  </Button>
                </div>
                <p className="mt-3 signText">
                  Zalogowanie oznacza akceptację <a href="#">Regulaminu</a>{" "}
                  serwisu musingo.pl w aktualnym brzmieniu.
                </p>
              </Form>
            )}
          </Formik>
        </Col>
      </Row>
    </Container>
  );
};

export default SignIn;
