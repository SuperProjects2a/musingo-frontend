import { Tabs, Tab } from "react-bootstrap";
import ProfileManagement from "./UserProfileComponents/ProfileManagement";

const UserProfile = () => {
  return (
    <div className="userProfileNav pt-3">
      <h5>Patryk Graca</h5>
      <Tabs defaultActiveKey="Ustawienia konta" className="mb-3">
        <Tab eventKey="Ustawienia konta" title="Ustawienia konta">
          <ProfileManagement />
        </Tab>
        <Tab eventKey="Konto" title="Konto"></Tab>
        <Tab eventKey="Ogłoszenia" title="Ogłoszenia"></Tab>
        <Tab eventKey="Otrzymane oceny" title="Otrzymane oceny"></Tab>
        <Tab eventKey="Wiadomosci" title="Wiadomosci"></Tab>
      </Tabs>
    </div>
  );
};

export default UserProfile;
