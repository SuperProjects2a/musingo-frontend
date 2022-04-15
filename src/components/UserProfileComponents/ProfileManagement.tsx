import { Card } from "react-bootstrap";
import {
  ContactDataChange,
  PasswordChange,
  EmailChange,
} from "./ProfileManagementInfoChange";

const ProfileManagement = () => {
  return (
    <div className="userProfileDiv p-4">
      <Card>
        <Card.Body>
          <Card.Title className="font-weight-bold">
            Dodaj zdjęcie profilu
          </Card.Title>
        </Card.Body>
      </Card>
      <Card className="mt-4">
        <Card.Body>
          <Card.Title className="font-weight-bold">
            Zmień dane kontaktowe
          </Card.Title>
          <ContactDataChange />
        </Card.Body>
      </Card>
      <Card className="mt-4">
        <Card.Body>
          <Card.Title className="font-weight-bold">Zmień hasło</Card.Title>
          <PasswordChange />
        </Card.Body>
      </Card>
      <Card className="mt-4">
        <Card.Body>
          <Card.Title className="font-weight-bold">Zmień email</Card.Title>
          <EmailChange />
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProfileManagement;
