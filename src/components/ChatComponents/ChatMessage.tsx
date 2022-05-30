import React, { useEffect } from "react";
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
    date: "10.10.2022 15:47",
    text: "nie kupuje",
    id: "1",
  },
  {
    date: "10.10.2022 15:48",
    text: "to spadaj",
    id: "0",
  },
  {
    date: "10.10.2022 15:48",
    text: "to spadaj",
    id: "0",
  },
  {
    date: "10.10.2022 15:48",
    text: "to spadaj",
    id: "0",
  },
  {
    date: "10.10.2022 15:48",
    text: "to spadaj",
    id: "0",
  },
];

const ChatMessage = () => {
  useEffect(() => {
    const chat = document.getElementById("end-point");
    chat?.scrollIntoView();
  }, []);
  return (
    <div
      style={{
        height: "60vh",
        overflowY: "scroll",
        // display: "flex",
        // flexDirection: "column-reverse",
      }}
    >
      {informationsMessage.map((informationMessage, index) => (
        <Col>
          {informationMessage.id === "0" ? (
            <p>
              <div
                className="rounded border border-light chatMessageUser py-2 px-3 mt-1"
                style={{ backgroundColor: "#0084ff" }}
              >
                <Form.Text style={{ color: "white" }}>
                  <Col style={{ fontWeight: "100", lineHeight: "80%" }}>
                    <small>{informationMessage.date}</small>
                  </Col>
                  {informationMessage.text}
                </Form.Text>
              </div>
            </p>
          ) : (
            <p>
              <div
                className="rounded border border-light chatMessageSender py-2 px-3 mt-1 "
                style={{ backgroundColor: "#e4e6eb" }}
              >
                <Form.Text style={{ color: "black" }}>
                  <Col style={{ fontWeight: "100", lineHeight: "80%" }}>
                    <small>{informationMessage.date}</small>
                  </Col>
                  {informationMessage.text}
                </Form.Text>
              </div>
            </p>
          )}
        </Col>
      ))}
      <div id="end-point"></div>
    </div>
  );
};

export default ChatMessage;
