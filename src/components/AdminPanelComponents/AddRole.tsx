import React, { useState } from 'react'
import { Container, Form, Col, Row, Card, Button } from "react-bootstrap";
import { Formik } from "formik";
import * as Yup from "yup";
import {addRole, IUpdateRole} from "../../services/adminService";
import { IUser } from '../../services/userService';

const AddRole = () => {
    const addOfferSchema = Yup.object().shape({
      category: Yup.string()
        .required("Wybierz rolę")
        .matches(
          /^[1,2,4]*$/i,
          "Wybierz rolę"
        ),
      email: Yup.string()
      .email("Niepoprawny adres email")
      .required("Prosze wpisać adres email")
    });
    const [user,setUser] = useState<IUser|null>(null);
  return (
    <div >
      <Container
        className="justify-content-center"
        style={{ textAlign: "left" }}
      >

            <Formik
              initialValues={{
                category: "",
                email: "",
              }}
              validationSchema={addOfferSchema}
              onSubmit={(values, { setSubmitting, resetForm }) => {
                setSubmitting(true);
                const role: IUpdateRole = {
                  email: values.email,
                  role: Number(values.category)
                }
                addRole(role)
                  .then((result) => {
                    if(result.status === 200){
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
                          <option value="1">User</option>
                        </Form.Select>
                        <Form.Control.Feedback type="invalid">
                          {errors.category}
                        </Form.Control.Feedback>
                      </Form.Group>
                      {user == null || (
                    <div className=" mt-3">
                      <p className="text-success" style={{ textAlign: "left" }}>
                         Użytkownik {user.email} posiada role: {user.role}
                      </p>
                    </div>
                  )}
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

export default AddRole
