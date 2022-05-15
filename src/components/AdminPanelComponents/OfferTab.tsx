import React, { useState, useEffect } from "react";
import { Container, Form, Col, Row, Card, Button } from "react-bootstrap";
import { Formik } from "formik";
import * as Yup from "yup";
import { offerBanUnban, reportedOffers } from "../../services/adminService";

const OfferTab = () => {
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
      .min(1, "Wprowdź poprawne ID"),
  });
  interface IReportOffer {
    cost: number;
    id: number;
    imageUrl: null;
    isBanned: boolean;
    itemCategory: string;
    offerStatus: string;
    title: string;
    reports: IReport[];
  }
  interface IReport {
    id: number;
    reason: string;
    text: string;
    reporter: IUser;
  }
  interface IUser {
    avgRating: number;
    email: string;
    imageUrl: null;
    name: string;
    phoneNumber: string;
    role: string;
    surname: string;
  }
  const [reportedOff, setReportedOff] = useState<IReportOffer[]>();

  const getReportedOffers = () => {
    reportedOffers().then((result) => {
      setReportedOff(result);
    });
  };

  useEffect(() => {
    getReportedOffers();
  }, []);

  return (
    <div className="px-1 px-md-2 px-lg-4 ">
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
            offerBanUnban(Number(values.id)).then((result) => {
              if (result.status === 200) resetForm();
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
                      <strong>ID oferty</strong>
                    </Form.Label>
                    <Form.Control
                      className="formInputs"
                      name="id"
                      type="text"
                      placeholder="ID oferty"
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
                      <option value="ViolationsOfMusingoRules">
                        Złamanie zasad użytkowania serwisu
                      </option>
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
                    placeholder="Dodatkowe informacje o zablokowaniu oferty."
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
                    className="my-3"
                    style={{ float: "right" }}
                    variant="dark"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    Zablokuj/odblokuj ofertę
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

export default OfferTab;
