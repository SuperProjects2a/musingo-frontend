import { faCommentSlash} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Row, Col, Card, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getMessages, IMessage } from "../../services/messageService";

const Messages = () => {
  const [messages, setMessages] = useState<IMessage[]>([] as IMessage[]);

  useEffect(() => {
    const fetchMessages = async () => {
      var m = await getMessages();
      setMessages(m);
    };
    fetchMessages();
  }, []);
  return (
    <div className="userProfileDiv pt-4 ">
      {messages.length > 0 ? (
        messages.map((message, index) => (
          <Row className="px-2">
            <Col xs={{ span: 12 }} md={{ span: 8, offset: 2 }}>
              <Link className="categories" to="/Test">
                <Card
                  className="mx-sm-3 mx-md-0 mx-lg-3 mx-xl-5 mb-2 "
                  style={{ borderRadius: "20px" }}
                >
                  <Card.Body>
                    <Row className="pr-1">
                      <Col
                        xs={3}
                        sm={2}
                        md={2}
                        xl={2}
                        style={{ textAlign: "center" }}
                      >
                        <Card.Img
                          className="pl-xs-4"
                          src={`https://picsum.photos/200/300?random=${
                            Math.random() * 100
                          }`}
                          style={{
                            height: "75px",
                            width: "75px",
                            borderRadius: "100px",
                          }}
                        />
                      </Col>
                      <Col
                        style={
                          message.unReadMessagesCount > 0
                            ? { fontWeight: "700" }
                            : {}
                        }
                      >
                        <p style={{ fontSize: "20px", margin: "0px" }}>
                          {`${message.sender.name} ${message.sender.surname}`}
                        </p>
                        {message.text.length > 70 ? (
                          <p>{message.text.substring(0, 70)}...</p>
                        ) : (
                          <p>{message.text}</p>
                        )}{" "}
                        <span style={{ color: "grey" }}>
                          {message.sendTime}
                        </span>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          </Row>
        ))
      ) : (
        <Container className="d-flex justify-content-center" >
          <div className="py-5 m-sm-4" style={{textAlign: "center" }} >
            <FontAwesomeIcon
              icon={faCommentSlash}
              style={{ height: "100px" }}
              className="py-3"
            />
            <h5>Obecnie nie prowadzisz żadnej konwersacji.</h5>
          </div>
        </Container>
      )}
    </div>
  );
};

export default Messages;
