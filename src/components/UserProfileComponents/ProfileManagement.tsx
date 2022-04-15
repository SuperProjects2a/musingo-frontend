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
          <Card.Title>Dodaj zdjęcie profilu</Card.Title>
        </Card.Body>
      </Card>
      <Card className="mt-4">
        <Card.Body>
          <Card.Title>Zmień dane kontaktowe</Card.Title>
          <ContactDataChange />
        </Card.Body>
      </Card>
      <Card className="mt-4">
        <Card.Body>
          <Card.Title>Zmień hasło</Card.Title>
          <PasswordChange />
        </Card.Body>
      </Card>
      <Card className="mt-4">
        <Card.Body>
          <Card.Title>Zmień email</Card.Title>
          <EmailChange />
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProfileManagement;
