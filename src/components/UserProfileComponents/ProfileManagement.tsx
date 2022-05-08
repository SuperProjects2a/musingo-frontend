import { Card, Row, Col, Form, Button } from "react-bootstrap";
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
              <Card.Img
                variant="top"
                src={`https://picsum.photos/200/300?random=${
                  Math.random() * 100
                }`}
                style={{
                  height: " calc(11vh + 4vw)",
                  minHeight: "200px",
                  width: "200px",
                  objectFit: "cover",
                  borderRadius: "100px",
                }}
                className="pt-2 announcementImg"
              />
              <Card.Title className="mt-3">Dodaj zdjęcie profilu</Card.Title>

              <Form>
                <Form.Group>
                  <Row className="mb-3">
                    <Col xs={12} sm={8}>
                      <Form.Control
                        type="file"
                        accept=".png,.jpg,.jpeg,.webp"
                        className="formInputs"
                      />
                    </Col>
                    <Col xs={5} sm={4} className="pt-2 pt-sm-0">
                      <Button variant="dark">Wgraj zdjęcie</Button>
                    </Col>
                  </Row>
                </Form.Group>
              </Form>
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
