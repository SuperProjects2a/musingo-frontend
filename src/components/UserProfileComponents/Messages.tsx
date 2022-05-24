import { Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
const messages = [
  {
    link: "/Test",
    date: "21.03.2010",
    user: "Patryk Graca",
    title: "Gitara elektryczna",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    unreadMessagesCount: 1,
  },
  {
    link: "/Test",
    date: "21.03.2010",
    user: "Anna Nowak",
    title: "Kurs gry na pianinie",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    unreadMessagesCount: 0,
  },
  {
    link: "/Test",
    date: "21.03.2010",
    user: "Jan Kowalski",
    title: "Perkusja",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    unreadMessagesCount: 0,
  },
];

const Messages = () => {
  return (
    <div className="userProfileDiv pt-4 ">
      {messages.map((message, index) => (
        <Row className="px-2">
          <Col xs={{ span: 12 }} md={{ span: 8, offset: 2 }}>
            <Link className="categories" to={message.link}>
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
                        message.unreadMessagesCount > 0
                          ? { fontWeight: "700" }
                          : {}
                      }
                    >
                      <p style={{ fontSize: "20px", margin: "0px" }}>
                        {message.user} - {message.title}
                      </p>
                      {message.text.length > 70 ? (
                        <p>{message.text.substring(0, 70)}...</p>
                      ) : (
                        <p>{message.text}</p>
                      )}{" "}
                      <span style={{ color: "grey" }}>{message.date}</span>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        </Row>
      ))}
    </div>
  );
};

export default Messages;
