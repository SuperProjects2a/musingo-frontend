import { Card, Form, Col, Button, Row, InputGroup } from "react-bootstrap";
import { Formik } from "formik";
import * as Yup from "yup";

const chanrgeAccountSchema = Yup.object().shape({
  chargeValue: Yup.number().positive("Wprowadź prawidłową kwote"),
});

const Fundings = () => {
  return (
    <div className="userProfileDiv p-4">
      <Card>
        <Card.Body>
          <Card.Title>Doładuj konto</Card.Title>
          <Formik
            initialValues={{
              chargeValue: "",
            }}
            validationSchema={chanrgeAccountSchema}
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
              <Form onSubmit={handleSubmit} style={{ textAlign: "left" }}>
                <Form.Group style={{ float: "left" }}>
                  <Form.Label>Kwota</Form.Label>

                  <Form.Control
                    name="chargeValue"
                    type="text"
                    autoComplete="chargeValue"
                    className="formInputs"
                    value={values.chargeValue}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    isInvalid={touched.chargeValue && !!errors.chargeValue}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.chargeValue}
                  </Form.Control.Feedback>
                </Form.Group>
                <Button
                  className="chargeButton"
                  variant="dark"
                  type="submit"
                  disabled={isSubmitting}
                >
                  Zapisz zmiany
                </Button>
              </Form>
            )}
          </Formik>
        </Card.Body>
      </Card>
      <Card className="mt-4">
        <Card.Body>
          <Card.Title>Historia płatności</Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Fundings;
