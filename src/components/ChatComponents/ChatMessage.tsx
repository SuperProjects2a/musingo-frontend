import React from "react";
import { Container, Form, Card, Col } from "react-bootstrap";

const informationsMessage = [
  {
    date: "10.10.2022 15:46",
    text: "jakasadasd asd asd asd d asd asd asd as dasd wiahfgd asd asd asd as dasd wiahfgd asd asd asd as dasd wiahfgd asd asd asd as dasd wiahfgas dasd wiahfghfghfghfghfghfghfghfghfghfghdomosas dasd wiahfghfghfghfghfghfghfghfghfghfghdomosas dasd wiahfghfghfghfghfghfghfghfghfghfghdomosc",
  },
];

const ChatMessage = () => {
  return (
    <div className="chatMessage py-3 px-3">
      {informationsMessage.map((informationMessage, index) => (
        <Form.Text>
          <Col>
            <small>{informationMessage.date}</small>
          </Col>
          <strong>{informationMessage.text}</strong>

        </Form.Text>
      ))}
    </div>
    
  );
};

export default ChatMessage;
