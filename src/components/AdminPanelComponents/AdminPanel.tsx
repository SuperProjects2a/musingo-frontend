import { Tabs, Tab } from "react-bootstrap";
import OfferTab from "./OfferTab";
import OfferList from "./OfferList";
import UserTab from "./UserTab";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const AdminPanel = (params:any) => {
  const navigate = useNavigate();
  const [key, setKey] = useState(params.activeTabs);
  var bgClass = key === "Oferty" ? "UserTab" : "OfferTab";
  
  useEffect(()=>{
    setKey(params.activeTabs);
  },[navigate])

  return (
    <Container className={`${bgClass} py-5`}>
      <div className="tabsdminPanel">
        <Tabs
          activeKey={key}
          className="nav-fill"
          onSelect={(k: any) =>  navigate("/AdminPanel/" + k?.toString())}
        >
          <Tab eventKey="Oferty" title="Oferty">
            <OfferTab />
          </Tab>
          <Tab eventKey="ListaOfert" title="Zgłoszone oferty">
            <OfferList />
          </Tab>
          <Tab eventKey="Uzytkownicy" title="Użytkownicy">
            <UserTab />
          </Tab>
        </Tabs>
      </div>
    </Container>
  );
};

export default AdminPanel;
