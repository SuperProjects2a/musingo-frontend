import { Card, Form, Button, Table } from "react-bootstrap";
import { Formik } from "formik";
import * as Yup from "yup";

const chanrgeAccountSchema = Yup.object().shape({
  chargeValue: Yup.number()
    .typeError("Wprowadź prawidłową kwotę")
    .positive("Podana kwota nie może być liczbą ujemną"),
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
                  Doładuj konto
                </Button>
              </Form>
            )}
          </Formik>
        </Card.Body>
      </Card>
      <Card className="mt-4">
        <Card.Body>
          <Card.Title>Historia płatności</Card.Title>
          <p>Stan konta: 911420,69</p>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>Kwota</th>
                <th>Data</th>
                <th>Użytkownik</th>
                <th>Przedmiot</th>
                <th>Opinie</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>24</td>
                <td>21.03.2022</td>
                <td>Maksymilian Średniawa</td>
                <td>Zaliczenie</td>
                <td>Zobacz opinie</td>
              </tr>
              <tr>
                <td>420</td>
                <td>26.03.2022</td>
                <td>Rafał Kulka</td>
                <td>Gitara z motywem Animu</td>
                <td>Zobacz opinie</td>
              </tr>
              <tr>
                <td>-400</td>
                <td>29.03.2022</td>
                <td>Patryk Graca</td>
                <td>Wzmacniasz</td>
                <td>Zobacz opinie</td>
              </tr>
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Fundings;
