import React, { useState } from 'react';
import {Form, Col } from "react-bootstrap";




const informationsMessage = [
  {
    date: "10.10.2022 15:46",
    text: "jakasadasd asd asd asd d asd asd asd as dasd wiahfgd asd asd asd as dasd wiahfgd asd asd asd as dasd wiahfgd asd asd asd as dasd wiahfgas dasd wiahfghfghfghfghfghfghfghfghfghfghdomosas dasd wiahfghfghfghfghfghfghfghfghfghfghdomosas dasd wiahfghfghfghfghfghfghfghfghfghfghdomosc",
  },
    {
    date: "10.10.2022 15:46",
    text: "jakasadasd asd asd asd d asd asd asd as dasd wiahfgd asd asd asd as dasd wiahfgd asd asd asd as dasd wiahfgd asd asd asd as dasd wiahfgas dasd wiahfghfghfghfghfghfghfghfghfghfghdomosas dasd wiahfghfghfghfghfghfghfghfghfghfghdomosas dasd wiahfghfghfghfghfghfghfghfghfghfghdomosc",
  },
];

let userID:number = 0;

const ChatMessage = () => {
  if (userID == 0) 
{
  return (
    <div className="rounded border border-light chatMessageSender py-3 px-3" style={{backgroundColor:"lightgray"}}>
      {informationsMessage.map((informationMessage, index) => (
        <Form.Text style={{color: 'black'}}>
          <Col>
            <small>{informationMessage.date}</small>
          </Col>
          <strong >{informationMessage.text}</strong>
        </Form.Text>
      ))}
    </div>
    
  );
}
else
{
  return (
    <div className="rounded border border-light chatMessageUser py-3 px-3" style={{backgroundColor:"#adbce6"}}>
      {informationsMessage.map((informationMessage, index) => (
        <Form.Text style={{color: 'black'}}>
          <Col>
            <small>{informationMessage.date}</small>
          </Col>
          <strong >{informationMessage.text}</strong>

        </Form.Text>
      ))}
    </div>
    
  );
}

};

export default ChatMessage;
