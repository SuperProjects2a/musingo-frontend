import React, { useState } from "react";
import { Container, Form, Col, Row, Card, Button } from "react-bootstrap";
import { Formik } from "formik";
import * as Yup from "yup";
import { userBanUnban } from "../../services/adminService";
import { IUser } from "../../services/userService";

const BanUser = () => {
  const addOfferSchema = Yup.object().shape({
    // category: Yup.string()
    //   .required("Wybierz powód")
    //   .matches(
    //     /^[Insults,ViolationsOfMusingoRules,Others]*$/i,
    //     "Wybierz powód"
    //   ),
    // description: Yup.string().required("To pole jest wymagane"),
    email: Yup.string()
      .email("Niepoprawny adres email")
      .required("Prosze wpisać adres email"),
  });
  const [user, setUser] = useState<IUser | null>(null);

  return (
    <div>
      <Container
        className="justify-content-center"
        style={{ textAlign: "left" }}
      >
        <Formik
          initialValues={{
            // category: "",
            // description: "",
            email: "",
          }}
          validationSchema={addOfferSchema}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            setSubmitting(true);
            userBanUnban(values.email).then((result) => {
              if (result.status === 200) {
                setUser(result.data);
                resetForm();
              }
            });
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
              <Form.Group>
                <Col sm="6">
                  <Form.Group className="py-2">
                    <Form.Label className="labelText">
                      <strong>Email użytkownika</strong>
                    </Form.Label>
                    <Form.Control
                      className="formInputs"
                      name="email"
                      type="text"
                      placeholder="Email użytkownika"
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
                  {user == null || (
                    <div className=" mt-3">
                      <p className="text-success" style={{ textAlign: "left" }}>
                        {user.isBanned == true
                          ? `Użytkownik ${user.email} został pomyślnie zbanowany`
                          : `Użytkownik ${user.email} został pomyślnie odbanowany`}
                      </p>
                    </div>
                  )}
                </Col>
                {/* <Col sm="6">
                      <Form.Group className="py-2">
                        <Form.Label className="labelText">
                          <strong>Powód</strong>
                        </Form.Label>
                        <Form.Select
                          name="category"
                          className="formInputs"
                          autoComplete="category"
                          value={values.category}
                          onBlur={handleBlur}
                          onChange={handleChange}
                          isInvalid={touched.category && !!errors.category}
                        >
                        <option> Wybierz powód </option>
                        <option value="Insults">Wyzwiska</option>
                        <option value="ViolationsOfMusingoRules">Złamanie zasad użytkowania serwisu</option>
                        <option value="Others">Inne</option>
                        </Form.Select>
                        <Form.Control.Feedback type="invalid">
                          {errors.category}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col> */}
                {/* <Form.Group className="py-2">
                      <Form.Label className="labelText">
                        <strong>Komentarz</strong>
                      </Form.Label>
                      <Form.Control
                        className="formInputs"
                        name="description"
                        as="textarea"
                        rows={6}
                        type="text"
                        maxLength={9000}
                        placeholder="Dodatkowe informacje o zablokowaniu konta."
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
                    </Form.Group> */}
              </Form.Group>
              <Row>
                <Col>
                  <Button
                    style={{ float: "right" }}
                    variant="dark"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    Zablokuj/odblokuj konto
                  </Button>
                </Col>
              </Row>
            </Form>
          )}
        </Formik>
      </Container>
    </div>
  );
};

export default BanUser;
