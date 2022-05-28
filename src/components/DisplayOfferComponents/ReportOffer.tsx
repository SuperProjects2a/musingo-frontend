import { Container, Form, Col, Row, Card, Button } from "react-bootstrap";
import * as Yup from "yup";
import { Formik } from "formik";
import OfferInfo from "./OfferInfo";
import { useNavigate, useParams } from "react-router-dom";
import { ICreateReport, reportOffer } from "../../services/offerService";
import { useState } from "react";

const ReportOffer = () => {
  const addOfferSchema = Yup.object().shape({
    category: Yup.string()
      .required("Wybierz powód")
      .matches(
        /^[Insults,ViolationsOfMusingoRules,Others]*$/i,
        "Wybierz powód"
      ),
    description: Yup.string().required("To pole jest wymagane"),
  });
  const { id } = useParams();
  const idNumber = Number(id);
  const navigate = useNavigate();
  const [isReported, setIsReported] = useState(false);

  const report = async (createReport: ICreateReport) => {
    reportOffer(createReport)
      .then(() => {
        navigate("/DisplayOffer/" + id);
      })
      .catch((err) => {
        if (err?.data?.detail?.includes("You reported this offer"))
          setIsReported(true);
      });
  };
  return (
    <div className="px-1 px-md-2 px-lg-5 mx-md-1 mx-lg-5">
      <Container
        className="justify-content-center"
        style={{ textAlign: "left" }}
      >
        <Card className="rounded border border-light mx-sm-1 mx-md-3 mx-lg-5 mt-sm-5 mb-sm-5">
          <Card.Header className="px-sm-4 px-md-5 py-3" as="h4">
            Formularz zgłoszeniowy
          </Card.Header>
          <Card.Body className="px-sm-4 px-md-5">
            <Formik
              initialValues={{
                category: "",
                description: "",
              }}
              validationSchema={addOfferSchema}
              onSubmit={(values, { setSubmitting, resetForm }) => {
                setSubmitting(true);
                const createReport: ICreateReport = {
                  offerId: idNumber,
                  reason: values.category,
                  text: values.description,
                };
                report(createReport);
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
                          <strong>Powód zgłoszenia</strong>
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
                        placeholder="Powinniśmy wiedzieć cos jeszcze?"
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
                    {isReported === true && (
                      <div className=" mt-3">
                        <p
                          className="text-danger"
                          style={{ textAlign: "center" }}
                        >
                          Ta oferta już została zgłoszona przez Ciebie
                        </p>
                      </div>
                    )}
                  </Form.Group>
                  <Row>
                    <Col>
                      <Button
                        style={{ float: "right" }}
                        variant="dark"
                        type="submit"
                        disabled={isSubmitting}
                      >
                        Dodaj zgłoszenie
                      </Button>
                    </Col>
                  </Row>
                </Form>
              )}
            </Formik>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default ReportOffer;
