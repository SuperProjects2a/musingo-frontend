import { Card, Row, Col } from "react-bootstrap";
import {
  ContactDataChange,
  PasswordChange,
  EmailChange,
} from "./ProfileManagementInfoChange";

const ProfileManagement = () => {
  return (
    <div className="userProfileDiv p-4">
      <Row>
        <Col
          xs={{ span: 12 }}
          sm={{ span: 10, offset: 1 }}
          md={{ span: 8, offset: 2 }}
          lg={{ span: 6, offset: 3 }}
        >
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
        </Col>
      </Row>
    </div>
  );
};

export default ProfileManagement;
