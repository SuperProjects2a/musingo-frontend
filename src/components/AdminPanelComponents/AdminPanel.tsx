import { Tabs, Tab } from "react-bootstrap";
import OfferTab from "./OfferTab";
import UserTab from "./UserTab";
import { useState } from "react";

const AdminPanel = () => {
  const [key, setKey] = useState("Oferty");
  var bgClass = key === "Oferty" ? "UserTab" : "OfferTab";
  return (
    <div className={`${bgClass} py-sm-4`}>
      <div className="tabsdminPanel">
        <Tabs
          defaultActiveKey="Oferty"
          className="nav-fill"
          onSelect={(k: any) => setKey(k)}
        >
          <Tab eventKey="Oferty" title="Oferty">
            <OfferTab />
          </Tab>
          <Tab eventKey="Użytkownicy" title="Użytkownicy">
            <UserTab />
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminPanel;
