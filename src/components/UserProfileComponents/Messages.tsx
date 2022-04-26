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
    <div className="userProfileDiv p-4">
      {messages.map((message, index) => (
        <Card className="mb-2" style={{ borderRadius: "20px" }}>
          <Card.Body>
            <Row className="pr-1">
              <Col xs={4} sm={3} md={2} style={{ textAlign: "center" }}>
                <Card.Img
                  src={`https://picsum.photos/200/300?random=${
                    Math.random() * 100
                  }`}
                  style={{
                    maxHeight: "100px",
                    width: "100px",
                    borderRadius: "100px",
                  }}
                />
              </Col>
              <Col xs={8} sm={7} md={8}>
                <h6>
                  <b>{message.user}</b> - {message.title}
                </h6>
                {message.text.length > 100 ? (
                  <p>{message.text.substring(0, 120)}...</p>
                ) : (
                  <p>{message.text}</p>
                )}{" "}
                <span style={{ color: "grey" }}>{message.date}</span>
              </Col>
              <Col xs={12} sm={2} md={2}>
                <p className="deleteChat">X Usuń czat</p>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default Messages;
