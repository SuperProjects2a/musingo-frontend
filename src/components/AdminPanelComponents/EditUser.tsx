import React from 'react'
import { Container, Form, Col, Row, Card, Button } from "react-bootstrap";
import { Formik } from "formik";
import * as Yup from "yup";

const EditUser = () => {
    const addOfferSchema = Yup.object().shape({
      category: Yup.string()
        .required("Wybierz rolę")
        .matches(
          /^[2,4]*$/i,
          "Wybierz rolę"
        ),
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
                          <strong>Rola</strong>
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
                          <option> Wybierz rolę </option>
                          <option value="4">Administrator</option>
                          <option value="2">Moderator</option>
                        </Form.Select>
                        <Form.Control.Feedback type="invalid">
                          {errors.category}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                  </Form.Group>
                  <Row>
                    <Col>
                      <Button
                        style={{ float: "right" }}
                        variant="dark"
                        type="submit"
                        disabled={isSubmitting}
                      >
                        Dodaj rolę
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

export default EditUser
