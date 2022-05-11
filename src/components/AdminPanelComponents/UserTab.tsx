import { Tabs, Tab, Accordion } from "react-bootstrap";
import BanUser from "./BanUser";
import AddRole from "./AddRole";
import RemoveRole from "./RemoveRole";
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
    <Accordion.Header>Dodaj rolę</Accordion.Header>
    <Accordion.Body>
    <AddRole />
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="2">
    <Accordion.Header>Usuń rolę</Accordion.Header>
    <Accordion.Body>
    <RemoveRole />
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
    </div>
  );
};

export default UserTab;
