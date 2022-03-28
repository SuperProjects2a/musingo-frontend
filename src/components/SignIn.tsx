import { Container, Form, Col, Button, Row } from "react-bootstrap";
import { Formik } from "formik";
import * as Yup from "yup";
const SignIn = () => {
  const loginSchema = Yup.object().shape({
    email: Yup.string()
      .email("Niepoprawny adres email")
      .required("Prosze wpisać adres email"),
    password: Yup.string().required("Proszę wpisać hasło").min(8),
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
            onSubmit={console.log}
          >
            {({
              handleSubmit,
              handleChange,
              handleBlur,
              values,
              touched,
              errors,
            }) => (
              <Form
                className="bg-body rounded border border-light p-4 p-sm-3"
                onSubmit={handleSubmit}
                noValidate
              >
                <h1>Zaloguj się</h1>
                <Form.Group controlId="validationFormik101">
                  <Form.Label className="labelText">Adres email</Form.Label>
                  <Form.Control
                    name="email"
                    type="text"
                    size="lg"
                    placeholder="Wprowadź adres email"
                    autoComplete="email"
                    className="position-relative formInputs"
                    value={values.email}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    isValid={touched.email && !errors.email}
                    isInvalid={!!errors.email}
                  />
                  <Form.Control.Feedback type="invalid" tooltip>
                    {errors.email}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="validationFormik102">
                  <Form.Label className="labelText">Hasło</Form.Label>
                  <Form.Control
                    name="password"
                    type="password"
                    size="lg"
                    placeholder="Wprowadź hasło"
                    autoComplete="password"
                    className="position-relative formInputs"
                    value={values.password}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    isValid={touched.password && !errors.password}
                    isInvalid={!!errors.password}
                  />
                  <Form.Control.Feedback type="invalid" tooltip>
                    {errors.password}
                  </Form.Control.Feedback>
                </Form.Group>

                <div className="d-grid mt-4">
                  <Button size="lg" variant="dark" type="submit">
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
