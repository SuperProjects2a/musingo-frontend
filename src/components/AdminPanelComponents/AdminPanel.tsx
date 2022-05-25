import { Tabs, Tab } from "react-bootstrap";
import OfferTab from "./OfferTab";
import OfferList from "./OfferList";
import UserTab from "./UserTab";
import { useState } from "react";
import { Container } from "react-bootstrap";

const AdminPanel = () => {
  const [key, setKey] = useState("Oferty");
  var bgClass = key === "Oferty" ? "UserTab" : "OfferTab";
  return (
    <Container className={`${bgClass} py-5`}>
      <div className="tabsdminPanel">
        <Tabs
          defaultActiveKey="Oferty"
          className="nav-fill"
          onSelect={(k: any) => setKey(k)}
        >
          <Tab eventKey="Oferty" title="Oferty">
            <OfferTab />
          </Tab>
          <Tab eventKey="Lista ofert" title="Zgłoszone oferty">
            <OfferList />
          </Tab>
          <Tab eventKey="Użytkownicy" title="Użytkownicy">
            <UserTab />
          </Tab>
        </Tabs>
      </div>
    </Container>
  );
};

export default AdminPanel;
