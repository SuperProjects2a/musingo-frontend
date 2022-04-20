import React from "react";
import { Row, Col, Card } from "react-bootstrap";
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
        <Card className="d-sm-block mb-2">
          <Card.Body>
            <Row>
              <Col xs={1}>
                <Card.Img
                  src={`https://picsum.photos/200/300?random=${
                    Math.random() * 100
                  }`}
                  style={{
                    maxHeight: "100px",
                    width: "100px",
                    borderRadius: "200px",
                  }}
                />
              </Col>
              <Col xs={9} key={index}>
                <h6>
                  <b>{message.user}</b> - {message.title}
                </h6>
                {message.text}
              </Col>
              <Col xs={2}></Col>
            </Row>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default Messages;
