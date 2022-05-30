import { Container, Form, Card, Button, InputGroup } from "react-bootstrap";
import { Formik } from "formik";
import ChatMessage from "./ChatMessage";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import {
  getChatWindow,
  IMessage,
  ISendMessage,
  sendMessage,
} from "../../services/messageService";
import { getUser, IUser } from "../../services/userService";
import { Link, useParams } from "react-router-dom";


const ChatWindow = () => {
  const [messages, setMessages] = useState<IMessage[]>([] as IMessage[]);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<IUser>();
  const { id } = useParams();
  const [numberId, setNumberId] = useState(0);

  useEffect(() => {
    setNumberId(Number(id));
    const getM = async () => {
      setLoading(true);
      const m = await getChatWindow(Number(id));
      setMessages(m);
      const u = await getUser();
      setUser(u);
      setLoading(false);
    };
    getM(); 
  }, []);

  useEffect(()=>{
    const chat = document.getElementById("end-point");
    chat?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start",
    });
  },[messages])

  useEffect(()=>{
    const chat = document.getElementById("end-point");
    chat?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start",
    });
  })
  return (
    <div id="menu">
        <Container style={{ textAlign: "left" }}>
          {/* <Card className="rounded border border-light mx-sm-1 mx-md-3 mx-lg-5 mt-sm-5 mb-sm-5 chatWindow"> */}
          <Card className="rounded border border-light my-2 chatWindow">
            <Link to = {`/DisplayOffer/${messages[0]?.transaction?.offer?.id.toString()}`} className="link">
            <Card.Header as="h5" className="my-0 py-1">
              <Card.Img
                variant="top"
                src={messages[0]?.transaction?.offer?.imageUrl}
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
              {user?.email === messages[0]?.transaction?.buyer?.email
                                ? `${messages[0]?.transaction?.seller?.name} ${messages[0]?.transaction?.seller?.surname} - `
                                : `${messages[0]?.transaction?.buyer?.name} ${messages[0]?.transaction?.buyer?.surname} - `}
                              {messages[0]?.transaction?.offer?.title}
            </Card.Header>
            </Link>
            <Card.Body className="px-sm-4 px-md- pt-0">
              <ChatMessage
                messages={messages}
                setMessages={setMessages}
                loading={loading}
                setLoading={setLoading}
                user={user}
                setUser={setUser}
                numberId={numberId}
                setNumberId={setNumberId}
              />
              <Formik
                initialValues={{
                  message: "",
                }}
                onSubmit={async (values, { setSubmitting, resetForm }) => {
                  setSubmitting(true);
                  const newMessage:ISendMessage ={
                    transactionId:numberId,
                    text:values.message
                  };
                  sendMessage(newMessage).then(res =>{
                    setMessages([...messages,res]);
                  });
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
                          className="noBorderLine rounded"
                          name="message"
                          type="text"
                          maxLength={200}
                          placeholder="Wyślij wiadomość"
                          autoComplete="off"
                          value={values.message}
                          onChange={handleChange}
                          isInvalid={touched.message && !!errors.message}
                        />

                        {values?.message?.length > 0 ? (
                          <Button
                            className="mx-2 rounded"
                            style={{ float: "right" }}
                            variant="dark"
                            type="submit"
                            disabled={isSubmitting}
                          >
                            <FontAwesomeIcon
                              icon={faPaperPlane}
                            ></FontAwesomeIcon>
                          </Button>
                        ) : (
                          <></>
                        )}
                      </InputGroup>
                      <Form.Text>
                        Maksymalna długość:{" "}
                        <strong>{values.message.length}/200</strong>
                      </Form.Text>
                    </Form.Group>
                  </Form>
                )}
              </Formik>
            </Card.Body>
          </Card>
        </Container>
    </div>
  );
};

export default ChatWindow;
