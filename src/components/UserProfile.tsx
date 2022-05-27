import React, { useState, useEffect } from "react";
import { Tabs, Tab } from "react-bootstrap";
import ProfileManagement from "./UserProfileComponents/ProfileManagement";
import Fundings from "./UserProfileComponents/Fundings";
import AcuiredRatings from "./UserProfileComponents/AcuiredRatings";
import Messages from "./UserProfileComponents/Messages";
import Offers from "./UserProfileComponents/Offers";
import { useNavigate } from "react-router-dom";
import { getUser, IUser } from "../services/userService";

const UserProfile = (activeTabs: any) => {
  const navigate = useNavigate();
  const [key, setKey] = useState(activeTabs.activeTabs);
  const [user,setUser] = useState<IUser>()
  useEffect(() => {
    const getU = async ()=>{
      let u = await getUser();
      setUser(u);
    }
    getU();
    setKey(activeTabs.activeTabs);

  });
  return (
    <div className="userProfileNav pt-3">
      <h5>{user?.name} {user?.surname}</h5>
      <Tabs
        activeKey={key}
        onSelect={(k) => {
          navigate("/UserProfile/" + k?.toString());
        }}
        className="mb-3"
      >
        <Tab eventKey="ProfileManagement" title="Ustawienia konta">
          <ProfileManagement />
        </Tab>
        <Tab eventKey="Fundings" title="Konto">
          <Fundings />
        </Tab>
        <Tab eventKey="Offers" title="Ogłoszenia">
          <Offers />
        </Tab>
        <Tab eventKey="AcuiredRatings" title="Otrzymane oceny">
          <AcuiredRatings />
        </Tab>
        <Tab eventKey="Messages" title="Wiadomości">
          <Messages />
        </Tab>
      </Tabs>
    </div>
  );
};

export default UserProfile;
