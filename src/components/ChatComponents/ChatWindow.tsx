import { Container, Form, Card, Button, InputGroup } from "react-bootstrap";
import * as Yup from "yup";
import { Formik } from "formik";
import ChatMessage from "./ChatMessage";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const informationsUser = [
  {
    name: "Krzysztof",
    surname: "Kononowicz",
  },
];

const ChatWindow = () => {
  const addOfferSchema = Yup.object().shape({
    message: Yup.string().required("To pole nie może być puste"),
  });

  return (
    <div id="menu">
      {informationsUser.map((informationUser, index) => (
        <Container style={{ textAlign: "left" }}>
          {/* <Card className="rounded border border-light mx-sm-1 mx-md-3 mx-lg-5 mt-sm-5 mb-sm-5 chatWindow"> */}
          <Card className="rounded border border-light my-2 chatWindow">
            <Card.Header as="h5" className="my-0 py-1">
              <Card.Img
                variant="top"
                src={`https://picsum.photos/200/300?random=${
                  Math.random() * 100
                }`}
                style={{
                  height: "calc(11vh + 4vw)",
                  width: "calc(11vh + 4vw)",
                  maxHeight: "60px",
                  maxWidth: "60px",
                  objectFit: "cover",
                  borderRadius: "90px",
                }}
                className="pt-2 px-2 pb-2"
              />
              {informationUser.name} {informationUser.surname}
            </Card.Header>
            <Card.Body className="px-sm-4 px-md- pt-0">
              <ChatMessage />
              <Formik
                initialValues={{
                  message: "",
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
                    <Form.Group className="pt-1">
                      <InputGroup>
                        <Form.Control
                          name="message"
                          type="text"
                          maxLength={200}
                          placeholder="Wyślij wiadomość"
                          autoComplete="message"
                          value={values.message}
                          onChange={handleChange}
                          isInvalid={touched.message && !!errors.message}
                        />
                        <Button
                          style={{ float: "right" }}
                          variant="dark"
                          type="submit"
                          disabled={isSubmitting}
                        >
                          <FontAwesomeIcon
                            icon={faPaperPlane}
                          ></FontAwesomeIcon>
                        </Button>
                      </InputGroup>
                      <Form.Text>
                        Maksymalna długość:{" "}
                        <strong>{values.message.length}/200</strong>
                      </Form.Text>
                      <Form.Control.Feedback type="invalid">
                        {errors.message}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Form>
                )}
              </Formik>
            </Card.Body>
          </Card>
        </Container>
      ))}
    </div>
  );
};

export default ChatWindow;
