import React from 'react'
import { Container, Form, Col, Row, Card, Button } from "react-bootstrap";
import { Formik } from "formik";
import * as Yup from "yup";

const BanUser = () => {
    const addOfferSchema = Yup.object().shape({
      category: Yup.string()
        .required("Wybierz powód")
        .matches(
          /^[Insults,ViolationsOfMusingoRules,Others]*$/i,
          "Wybierz powód"
        ),
      description: Yup.string().required("To pole jest wymagane"),
      id: Yup.string()
      .required("To pole jest wymagane")
      .matches(/^[1-9][0-9]*$/, "Wprowdź poprawne ID")
      .min(1, "Wprowdź poprawne ID")
    });
  return (
    <div >
      <Container
        className="justify-content-center"
        style={{ textAlign: "left" }}
      >
            <Formik
              initialValues={{
                category: "",
                description: "",
                id: "",
              }}
              validationSchema={addOfferSchema}
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
                        <strong>ID użytkownika</strong>
                      </Form.Label>
                      <Form.Control
                        className="formInputs"
                        name="id"
                        type="text"
                        placeholder="ID użytkownika"
                        autoComplete="id"
                        value={values.id}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        isInvalid={touched.id && !!errors.id}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.id}
                      </Form.Control.Feedback>
                    </Form.Group>
                    </Col>
                    <Col sm="6">
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
                    </Col>
                    <Form.Group className="py-2">
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
                    </Form.Group>
                  </Form.Group>
                  <Row>
                    <Col>
                      <Button
                        style={{ float: "right" }}
                        variant="dark"
                        type="submit"
                        disabled={isSubmitting}
                      >
                        Zablokuj konto
                      </Button>
                    </Col>
                  </Row>
                </Form>
              )}
            </Formik>
      </Container>
    </div>
  )
}

export default BanUser