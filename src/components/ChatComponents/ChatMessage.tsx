import React, { useEffect, useState } from "react";
import { Form, Col, Spinner } from "react-bootstrap";
import { convertTime, getChatWindow, getMessages, IMessage } from "../../services/messageService";


const ChatMessage = (params:any) => {
  return (
    <>{params.loading == true ? (
      <Col
        xs={{ offset: 5 }}
        lg={{ offset: 6 }}
        className="px-sm-5 px-lg-0 py-5 mb-5"
      >
        <Spinner
          animation="border"
          style={{ height: "50px", width: "50px" }}
        />
      </Col>
    ) : (
    <div
      style={{
        height: "60vh",
        overflowY: "scroll",
      }}
    >
      {params.messages?.map((message:IMessage) => (
        <Col>
          {message?.sender?.email === params.user?.email ? (
            <p>
              <div
                className="rounded border border-light chatMessageUser py-2 px-3 mt-1"
                style={{ backgroundColor: "#0084ff" }}
              >
                <Form.Text style={{ color: "white" }}>
                  <Col style={{ fontWeight: "100", lineHeight: "80%" }}>
                    <small>{convertTime(message.sendTime )}</small>
                  </Col>
                  {message.text}
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
                    <small>{convertTime(message.sendTime )}</small>
                  </Col>
                  {message.text}
                </Form.Text>
              </div>
            </p>
          )}
        </Col>
      ))}
      <div id="end-point"></div>
    </div>)}
    </>
  );
};

export default ChatMessage;
