import { Form, Col, Button, Row } from "react-bootstrap";
import { Formik } from "formik";
import * as Yup from "yup";

const contactDataChangeSchema = Yup.object().shape({
  street: Yup.string()
    .required("To pole jest wymagane przy zmianie")
    .min(3, "Wprowadź prawidłową nazwe ulicy")
    .max(60, "Wprowadź prawidłową nazwe ulicy")
    .matches(
      /^[a-zA-ZąęółżźćńśĄĘÓŻŹĆŃŁŚ]{3,60}$/i,
      "Wprowadzono niedozwolone znaki"
    ),

  city: Yup.string()
    .required("To pole jest wymagane przy zmianie")
    .min(3, "Wprowadź prawidłową nazwe miasta")
    .max(60, "Wprowadź prawidłową nazwe miasta")
    .matches(
      /^([a-zA-ZąęółżźćńśĄĘÓŻŹĆŃŁŚ-]+\s)*[-a-zA-ZąęółżźćńśĄĘÓŻŹĆŃŁŚ]{3,60}$/i,
      "Wprowadzono niedozwolone znaki"
    ),
  houseNumber: Yup.string()
    .required("To pole jest wymagane przy zmianie")
    .matches(/^[1-9][0-9]{0,5}$/, "Wprowadź poprawny numer domu"),

  postCode: Yup.string()
    .required("To pole jest wymagane przy zmianie")
    .matches(/^[1-9][0-9]-[1-9][0-9]{2,2}$/i, "Wprowadź poprawny kod pocztowy")
    .required("To pole jest wymagane"),
  phoneNumber: Yup.string()
    .required("To pole jest wymagane przy zmianie")
    .matches(/^[0-9]*$/, "Wprowadź poprawny numer telefonu")
    .min(9, "Wprowdź poprawny numer")
    .max(9, "Wprowdź poprawny numer"),
});
const passwordDataChangeSchema = Yup.object().shape({
  password: Yup.string()
    .required("To pole jest wymagane przy zmianie")
    .min(8, "Hasło musi składać się z minimum 8 znaków")
    .matches(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
      "Hasło musi zawierać 8 znaków, małą i dużą literę, znak specjalny i cyfre"
    ),
  passwordConfirmation: Yup.string()
    .required("To pole jest wymagane przy zmianie")
    .oneOf([Yup.ref("password"), null], "Hasło musza się zgadzać"),
  oldPassword: Yup.string().required("To pole jest wymagane przy zmianie"),
});
const emailDataChangeSchema = Yup.object().shape({
  email: Yup.string()
    .email("Niepoprawny adres email")
    .required("To pole jest wymagane przy zmianie"),
});

export const ContactDataChange = (params: any) => {
  return (
    <div className="userInfoChangeForm pt-2">
      <Row>
        <Col>
          <Formik
            initialValues={{
              city: "",
              street: "",
              houseNumber: "",
              postCode: "",
              phoneNumber: "",
            }}
            validationSchema={contactDataChangeSchema}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              setSubmitting(true);
              params.setUpdateProfile({
                ...params.updateProfile,
                city: values.city,
                street: values.street,
                houseNumber: values.houseNumber,
                postCode: values.postCode,
                phoneNumber: values.phoneNumber,
              });
              console.log(params.updateProfile);
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
                <Form.Group>
                  <Form.Label>Miasto</Form.Label>
                  <Form.Control
                    name="city"
                    type="text"
                    placeholder="Wprowadź miasto"
                    autoComplete="city"
                    className="formInputs"
                    value={values.city}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    isInvalid={touched.city && !!errors.city}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.city}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mt-2">
                  <Form.Label>Ulica</Form.Label>
                  <Form.Control
                    name="street"
                    type="text"
                    placeholder="Wprowadź nazwę ulicy"
                    autoComplete="street"
                    className="formInputs"
                    value={values.street}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    isInvalid={touched.street && !!errors.street}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.street}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mt-2">
                  <Form.Label>Numer domu/mieszkania</Form.Label>
                  <Form.Control
                    name="houseNumber"
                    type="text"
                    placeholder="Wprowadź numer"
                    autoComplete="houseNumber"
                    className="formInputs"
                    value={values.houseNumber}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    isInvalid={touched.houseNumber && !!errors.houseNumber}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.houseNumber}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mt-2">
                  <Form.Label>Kod Pocztowy</Form.Label>
                  <Form.Control
                    name="postCode"
                    type="text"
                    placeholder="Wprowadź kod pocztowy"
                    autoComplete="postCode"
                    className="formInputs"
                    value={values.postCode}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    isInvalid={touched.postCode && !!errors.postCode}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.postCode}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group>
                  <Form.Label className=" mt-2 ">Numer telefonu</Form.Label>
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
                <div className="my-4 d-grid">
                  <Button
                    variant="dark"
                    size="lg"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    Zapisz zmiany
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

export const PasswordChange = (params: any) => {
  return (
    <div className="userInfoChangeForm pt-2">
      <Row>
        <Col>
          <Formik
            initialValues={{
              oldPassword: "",
              password: "",
              passwordConfirmation: "",
            }}
            validationSchema={passwordDataChangeSchema}
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
                <Form.Group>
                  <Form.Label>Stare hasło</Form.Label>
                  <Form.Control
                    name="oldPassword"
                    type="password"
                    placeholder="Wprowadź stare hasło"
                    autoComplete="oldPassword"
                    className="formInputs"
                    value={values.oldPassword}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    isInvalid={touched.oldPassword && !!errors.oldPassword}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.oldPassword}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group>
                  <Form.Label className="mt-2 ">Nowe hasło</Form.Label>
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
                  <Form.Label className="mt-2 ">Powtórz nowe hasło</Form.Label>
                  <Form.Control
                    name="passwordConfirmation"
                    type="password"
                    placeholder="Wprowadź ponownie nowe hasło"
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

                <div className="my-4 d-grid">
                  <Button
                    variant="dark"
                    size="lg"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    Zapisz zmiany
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

export const EmailChange = (params: any) => {
  return (
    <div className="userInfoChangeForm pt-2">
      <Row>
        <Col>
          <Formik
            initialValues={{
              email: "",
            }}
            validationSchema={emailDataChangeSchema}
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
                <Form.Group>
                  <Form.Label>Nowy adres email</Form.Label>
                  <Form.Control
                    name="email"
                    type="email"
                    placeholder="Wprowadź nowy adres email"
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

                <div className="my-4 d-grid">
                  <Button
                    variant="dark"
                    size="lg"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    Zapisz zmiany
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
