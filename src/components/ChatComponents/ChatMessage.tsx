import React, { useState } from "react";
import { Form, Col } from "react-bootstrap";

const informationsMessage = [
  {
    date: "10.10.2022 15:46",
    text: "jakasadasd asd asd asd d asd asd asd as dasd wiahfgd asd asd asd as dasd wiahfgd asd asd asd as dasd wiahfgd asd asd asd as dasd wiahfgas dasd wiahfghfghfghfghfghfghfghfghfghfghdomosas dasd wiahfghfghfghfghfghfghfghfghfghfghdomosas dasd wiahfghfghfghfghfghfghfghfghfghfghdomosc",
    id: "1",
  },
  {
    date: "10.10.2022 15:46",
    text: "jakasadasd asd asd asd d asd asd asd as dasd wiahfgd asd asd asd as dasd wiahfgd asd asd asd as dasd wiahfgd asd asd asd as dasd wiahfgas dasd wiahfghfghfghfghfghfghfghfghfghfghdomosas dasd wiahfghfghfghfghfghfghfghfghfghfghdomosas dasd wiahfghfghfghfghfghfghfghfghfghfghdomosc",
    id: "0",
  },
  {
    date: "10.10.2022 15:46",
    text: "jakasadasd asd asd asd d asd asd asd as dasd wiahfgd asd asd asd as dasd wiahfgd asd asd asd as dasd wiahfgd asd asd asd as dasd wiahfgas dasd wiahfghfghfghfghfghfghfghfghfghfghdomosas dasd wiahfghfghfghfghfghfghfghfghfghfghdomosas dasd wiahfghfghfghfghfghfghfghfghfghfghdomosc",
    id: "0",
  },
  {
    date: "10.10.2022 15:46",
    text: "jakasadasd asd asd asd d asd asd asd as dasd wiahfgd asd asd asd as dasd wiahfgd asd asd asd as dasd wiahfgd asd asd asd as dasd wiahfgas dasd wiahfghfghfghfghfghfghfghfghfghfghdomosas dasd wiahfghfghfghfghfghfghfghfghfghfghdomosas dasd wiahfghfghfghfghfghfghfghfghfghfghdomosc",
    id: "1",
  },
  {
    date: "10.10.2022 15:46",
    text: "jakasadasd asd asd asd d asd asd asd as dasd wiahfgd asd asd asd as dasd wiahfgd asd asd asd as dasd wiahfgd asd asd asd as dasd wiahfgas dasd wiahfghfghfghfghfghfghfghfghfghfghdomosas dasd wiahfghfghfghfghfghfghfghfghfghfghdomosas dasd wiahfghfghfghfghfghfghfghfghfghfghdomosc",
    id: "0",
  },
  {
    date: "10.10.2022 15:46",
    text: "jakasadasd asd asd asd d asd asd asd as dasd wiahfgd asd asd asd as dasd wiahfgd asd asd asd as dasd wiahfgd asd asd asd as dasd wiahfgas dasd wiahfghfghfghfghfghfghfghfghfghfghdomosas dasd wiahfghfghfghfghfghfghfghfghfghfghdomosas dasd wiahfghfghfghfghfghfghfghfghfghfghdomosc",
    id: "0",
  },
  {
    date: "10.10.2022 15:46",
    text: "jakasadasd asd asd asd d asd asd asd as dasd wiahfgd asd asd asd as dasd wiahfgd asd asd asd as dasd wiahfgd asd asd asd as dasd wiahfgas dasd wiahfghfghfghfghfghfghfghfghfghfghdomosas dasd wiahfghfghfghfghfghfghfghfghfghfghdomosas dasd wiahfghfghfghfghfghfghfghfghfghfghdomosc",
    id: "1",
  },
  {
    date: "10.10.2022 15:46",
    text: "jakasadasd asd asd asd d asd asd asd as dasd wiahfgd asd asd asd as dasd wiahfgd asd asd asd as dasd wiahfgd asd asd asd as dasd wiahfgas dasd wiahfghfghfghfghfghfghfghfghfghfghdomosas dasd wiahfghfghfghfghfghfghfghfghfghfghdomosas dasd wiahfghfghfghfghfghfghfghfghfghfghdomosc",
    id: "0",
  },
  {
    date: "10.10.2022 15:46",
    text: "jakasadasd asd asd asd d asd asd asd as dasd wiahfgd asd asd asd as dasd wiahfgd asd asd asd as dasd wiahfgd asd asd asd as dasd wiahfgas dasd wiahfghfghfghfghfghfghfghfghfghfghdomosas dasd wiahfghfghfghfghfghfghfghfghfghfghdomosas dasd wiahfghfghfghfghfghfghfghfghfghfghdomosc",
    id: "0",
  },
  {
    date: "10.10.2022 15:46",
    text: "jakasadasd asd asd asd d asd asd asd as dasd wiahfgd asd asd asd as dasd wiahfgd asd asd asd as dasd wiahfgd asd asd asd as dasd wiahfgas dasd wiahfghfghfghfghfghfghfghfghfghfghdomosas dasd wiahfghfghfghfghfghfghfghfghfghfghdomosas dasd wiahfghfghfghfghfghfghfghfghfghfghdomosc",
    id: "1",
  },
  {
    date: "10.10.2022 15:46",
    text: "jakasadasd asd asd asd d asd asd asd as dasd wiahfgd asd asd asd as dasd wiahfgd asd asd asd as dasd wiahfgd asd asd asd as dasd wiahfgas dasd wiahfghfghfghfghfghfghfghfghfghfghdomosas dasd wiahfghfghfghfghfghfghfghfghfghfghdomosas dasd wiahfghfghfghfghfghfghfghfghfghfghdomosc",
    id: "0",
  },
  {
    date: "10.10.2022 15:46",
    text: "jakasadasd asd asd asd d asd asd asd as dasd wiahfgd asd asd asd as dasd wiahfgd asd asd asd as dasd wiahfgd asd asd asd as dasd wiahfgas dasd wiahfghfghfghfghfghfghfghfghfghfghdomosas dasd wiahfghfghfghfghfghfghfghfghfghfghdomosas dasd wiahfghfghfghfghfghfghfghfghfghfghdomosc",
    id: "0",
  },
  {
    date: "10.10.2022 15:46",
    text: "jakasadasd asd asd asd d asd asd asd as dasd wiahfgd asd asd asd as dasd wiahfgd asd asd asd as dasd wiahfgd asd asd asd as dasd wiahfgas dasd wiahfghfghfghfghfghfghfghfghfghfghdomosas dasd wiahfghfghfghfghfghfghfghfghfghfghdomosas dasd wiahfghfghfghfghfghfghfghfghfghfghdomosc",
    id: "1",
  },
  {
    date: "10.10.2022 15:46",
    text: "jakasadasd asd asd asd d asd asd asd as dasd wiahfgd asd asd asd as dasd wiahfgd asd asd asd as dasd wiahfgd asd asd asd as dasd wiahfgas dasd wiahfghfghfghfghfghfghfghfghfghfghdomosas dasd wiahfghfghfghfghfghfghfghfghfghfghdomosas dasd wiahfghfghfghfghfghfghfghfghfghfghdomosc",
    id: "0",
  },
  {
    date: "10.10.2022 15:46",
    text: "jakasadasd asd asd asd d asd asd asd as dasd wiahfgd asd asd asd as dasd wiahfgd asd asd asd as dasd wiahfgd asd asd asd as dasd wiahfgas dasd wiahfghfghfghfghfghfghfghfghfghfghdomosas dasd wiahfghfghfghfghfghfghfghfghfghfghdomosas dasd wiahfghfghfghfghfghfghfghfghfghfghdomosc",
    id: "0",
  },
  {
    date: "10.10.2022 15:46",
    text: "jakasadasd asd asd asd d asd asd asd as dasd wiahfgd asd asd asd as dasd wiahfgd asd asd asd as dasd wiahfgd asd asd asd as dasd wiahfgas dasd wiahfghfghfghfghfghfghfghfghfghfghdomosas dasd wiahfghfghfghfghfghfghfghfghfghfghdomosas dasd wiahfghfghfghfghfghfghfghfghfghfghdomosc",
    id: "1",
  },
  {
    date: "10.10.2022 15:46",
    text: "jakasadasd asd asd asd d asd asd asd as dasd wiahfgd asd asd asd as dasd wiahfgd asd asd asd as dasd wiahfgd asd asd asd as dasd wiahfgas dasd wiahfghfghfghfghfghfghfghfghfghfghdomosas dasd wiahfghfghfghfghfghfghfghfghfghfghdomosas dasd wiahfghfghfghfghfghfghfghfghfghfghdomosc",
    id: "0",
  },
  {
    date: "10.10.2022 15:46",
    text: "jakasadasd asd asd asd d asd asd asd as dasd wiahfgd asd asd asd as dasd wiahfgd asd asd asd as dasd wiahfgd asd asd asd as dasd wiahfgas dasd wiahfghfghfghfghfghfghfghfghfghfghdomosas dasd wiahfghfghfghfghfghfghfghfghfghfghdomosas dasd wiahfghfghfghfghfghfghfghfghfghfghdomosc",
    id: "0",
  },
];



const ChatMessage = () => {
  return (
    <div>
      {informationsMessage.map((informationMessage, index) => (
        <Col>
          {informationMessage.id === "0" ? (
            <p>
              <div
                className="rounded border border-light chatMessageUser py-3 px-3"
                style={{ backgroundColor: "#0084ff" }}
              >
                <Form.Text style={{ color: "white", }}>
                  <Col style={{fontWeight: "100"}} >
                  <small>{informationMessage.date}</small>
                  </Col>
                  {informationMessage.text}
                </Form.Text>
              </div>
            </p>
          ) : (
            <p>
              <div
                className="rounded border border-light chatMessageSender py-3 px-3 "
                style={{ backgroundColor: "#e4e6eb" }}
              >
                <Form.Text style={{ color: "black" }}>
                <Col style={{fontWeight: "100"}} >
                <small>{informationMessage.date}</small>
                  </Col>
                  {informationMessage.text}
                </Form.Text>
              </div>
            </p>
          )}
        </Col>
      ))}
    </div>
  );
};


export default ChatMessage;
