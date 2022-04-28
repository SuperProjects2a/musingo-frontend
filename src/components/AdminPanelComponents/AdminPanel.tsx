import { Tabs, Tab } from "react-bootstrap";
import OfferTab from "./OfferTab";
import UserTab from "./UserTab";
import { useState } from "react";

const AdminPanel = () => {
  const [key, setKey] = useState("Użytkownicy");
  var bgClass = key === "Użytkownicy" ? "OfferTab" : "UserTab";
  return (
    <div className={`${bgClass} py-sm-4`}>
      <div className="formDiv">
        <Tabs
          defaultActiveKey="Użytkownicy"
          className="nav-fill mb-3"
          onSelect={(k: any) => setKey(k)}
        >
          <Tab eventKey="Użytkownicy" title="Użytkownicy">
            <OfferTab />
          </Tab>
          <Tab eventKey="Oferty" title="Oferty">
            <UserTab />
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminPanel;
