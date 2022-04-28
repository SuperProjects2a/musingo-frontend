import { Row, Col, Card, Button } from "react-bootstrap";
const messages = [
  {
    date: "21.03.2010",
    user: "Patryk Graca",
    title: "Gitara elektryczna",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    date: "21.03.2010",
    user: "Anna Nowak",
    title: "Kurs gry na pianinie",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    date: "21.03.2010",
    user: "Jan Kowalski",
    title: "Perkusja",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
];

const Messages = () => {
  return (
    <div className="userProfileDiv pt-5 ">
      {messages.map((message, index) => (
        <Row className="px-2">
          <Col xs={{ span: 12 }} md={{ span: 8, offset: 2 }}>
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
                  <Col xs={8} sm={7} lg={8}>
                    <h6>
                      <b>{message.user}</b> - {message.title}
                    </h6>
                    {message.text.length > 100 ? (
                      <p>{message.text.substring(0, 80)}...</p>
                    ) : (
                      <p>{message.text}</p>
                    )}{" "}
                    <span style={{ color: "grey" }}>{message.date}</span>
                  </Col>
                  <Col xs={12} sm={3} lg={2}>
                    <p style={{ color: "red", float: "right" }}>X Usuń czat</p>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      ))}
    </div>
  );
};

export default Messages;
