import { Container, Form, Col, Button, Row } from "react-bootstrap";
import { Formik } from "formik";
import * as Yup from "yup";
const SignIn = () => {
  const loginSchema = Yup.object().shape({
    email: Yup.string()
      .email("Niepoprawny adres email")
      .required("Prosze wpisać adres email"),
    password: Yup.string().required("Proszę wpisać hasło"),
  });

  return (
    <div className="bg-primary pt-5 pb-5 m-0">
      <div className="d-grid signContainer">
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

                  <Form.Group className="position-relative">
                    <Form.Label className="labelText">Hasło</Form.Label>
                    <Form.Control
                      name="password"
                      type="password"
                      placeholder="Wprowadź hasło"
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

                  <div className="d-grid mt-2">
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
    </div>
  );
};

export default SignIn;
