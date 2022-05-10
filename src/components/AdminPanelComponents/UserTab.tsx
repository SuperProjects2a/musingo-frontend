import { Tabs, Tab, Accordion } from "react-bootstrap";
import BanUser from "./BanUser";
import EditUser from "./EditUser";
import { useState } from "react";

const UserTab = () => {
  return (
    <div>
      <Accordion>
  <Accordion.Item eventKey="0">
    <Accordion.Header>Zablokuj użytkownika</Accordion.Header>
    <Accordion.Body>
    <BanUser />
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>Zarządzaj użytkownikiem</Accordion.Header>
    <Accordion.Body>
    <EditUser />
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
    </div>
  );
};

export default UserTab;
